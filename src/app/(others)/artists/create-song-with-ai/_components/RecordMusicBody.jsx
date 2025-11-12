// "use client";
// import styles from '../createsong.module.scss'

// const RecordMusicBody=()=>{

//     return(
//         <>
//        <div className='grid grid-rows-12'>
//                 <div className='row-span-9 text-center font-mono text-3xl text-white'>
//                     11:11
//                 </div>

//                 <div className='row-span-3 flex flex-col items-center justify-center gap-6'>
//                     <button>
//                         <div
//                             className={`${styles.record_music_btn} flex h-20 w-20 items-center justify-center rounded-full`}>
//                             <div className='h-8 w-8 rounded-full bg-[#C6FF00]'></div>
//                         </div>
//                     </button>

//                     <p className='text-xs text-[#C2C2C2]'>
//                         1 min limit. Upgrade to use longer audio (8 min)
//                     </p>
//                 </div>
//             </div>
//         </>
//     )
// };

// export default RecordMusicBody;

'use client'

import { useEffect, useRef, useState } from 'react'
import { uploadRecordedMusic } from '@/services/api/song-api'
import { useMutation } from '@tanstack/react-query'
import { IoIosPlay } from 'react-icons/io'
import { TiMediaPause } from 'react-icons/ti'
import { ReactMic } from 'react-mic'
import WaveSurfer from 'wavesurfer.js'
import RegionsPlugin from 'wavesurfer.js/plugins/regions'

import queryConstants from '@/constants/query-constants'
import RecordMusicAnimation from '@/components/animatedgif/RecordMusicAnimation'

import styles from '../createsong.module.scss'
import BufferToWaveBlob from './BufferToWaveBlob'

const RecordMusicBody = () => {
    const [isRecording, setIsRecording] = useState(false)
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)
    const waveformRef = useRef(null)
    const waveSurferInstance = useRef(null)
    const [isAudioReady, setIsAudioReady] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [recordedBlob, setRecordedBlob] = useState(null)
    const [trimStart, setTrimStart] = useState(0)
    const [trimEnd, setTrimEnd] = useState(0)
    const [totalDuration, setTotalDuration] = useState(0)
    const [currentDuration, setCurrentDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const regionsPluginRef = useRef(null)
    const [hasRegion, setHasRegion] = useState(false)
    const [hasReachedLimit, setHasReachedLimit] = useState(false)

    const { mutateAsync: uploadRecordedMusicAsync } = useMutation({
        mutationKey: [queryConstants.uploadRecordedMusic],
        mutationFn: uploadRecordedMusic,
    })

    const handleStart = () => {
        console.log('start')
        if (hasReachedLimit) return

        setIsRecording(true)
        setTimer(0)
        setIsAudioReady(false)
        setHasRegion(false)
        setTotalDuration(0)
        setCurrentDuration(0)
        setCurrentTime(0)
        intervalRef.current = setInterval(() => {
            setTimer((prev) => prev + 1)
        }, 1000)
    }

    const handleStop = () => {
        console.log('stop')
        setIsRecording(false)
        if (intervalRef.current) clearInterval(intervalRef.current)

        if (timer >= 60) {
            setHasReachedLimit(true)
        }
    }

    const onStop = (recordedData) => {
        console.log('recordedData', recordedData)
        setRecordedBlob(recordedData.blob)

        const url = URL.createObjectURL(recordedData.blob)

        if (waveSurferInstance.current) {
            waveSurferInstance.current.destroy()
        }

        waveSurferInstance.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: '#C6FF00',
            progressColor: '#84cc16',
            barWidth: 2,
            barRadius: 4,
            height: 100,
            responsive: true,
            normalize: true,
        })

        waveSurferInstance.current.load(url)

        waveSurferInstance.current.on('ready', () => {
            const duration = waveSurferInstance.current.getDuration()
            setTrimStart(0)
            setTrimEnd(duration)
            setTotalDuration(duration)
            setCurrentDuration(duration)
            setCurrentTime(0)
            setIsAudioReady(true)

            if (regionsPluginRef.current) {
                regionsPluginRef.current.destroy()
            }

            regionsPluginRef.current =
                waveSurferInstance.current.registerPlugin(
                    RegionsPlugin.create()
                )

            // Enable drag selection (optional if you're creating region manually)
            regionsPluginRef.current.enableDragSelection({
                color: 'rgba(198, 255, 0, 0.3)',
            })

            // ✅ Create initial region to show draggable start/end bars
            const defaultRegion = regionsPluginRef.current.addRegion({
                start: 0,
                end: duration,
                color: 'rgba(198, 255, 0, 0.3)',
                drag: true,
                resize: true,
            })

            setHasRegion(true)

            // Set region event listeners
            regionsPluginRef.current.on('region-updated', (region) => {
                setTrimStart(region.start)
                setTrimEnd(region.end)
            })

            regionsPluginRef.current.on('region-removed', () => {
                setHasRegion(false)
                const fullDuration = waveSurferInstance.current.getDuration()
                setTrimStart(0)
                setTrimEnd(fullDuration)
            })

            // Optional: ensure only one region exists
            regionsPluginRef.current.on('region-created', (region) => {
                const allRegions = regionsPluginRef.current.getRegions()
                Object.values(allRegions).forEach((r) => {
                    if (r.id !== region.id) r.remove()
                })
                setTrimStart(region.start)
                setTrimEnd(region.end)
                setHasRegion(true)
            })
        })

        waveSurferInstance.current.on('finish', () => {
            setIsPlaying(false)
            setCurrentTime(0)
        })

        waveSurferInstance.current.on('play', () => {
            setIsPlaying(true)
        })

        waveSurferInstance.current.on('pause', () => {
            setIsPlaying(false)
        })

        waveSurferInstance.current.on('timeupdate', (time) => {
            setCurrentTime(time)
        })
    }

    const handlePlayPause = () => {
        if (waveSurferInstance.current) {
            waveSurferInstance.current.playPause()
        }
    }

    const handleTrimAudio = async () => {
        if (!recordedBlob || trimStart >= trimEnd) {
            console.error('Invalid trim parameters')
            return
        }

        try {
            const arrayBuffer = await recordedBlob.arrayBuffer()
            const audioContext = new AudioContext()
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)

            const sampleRate = audioBuffer.sampleRate
            const totalSamples = audioBuffer.length

            // Calculate sample offsets
            const startOffset = Math.max(0, Math.floor(trimStart * sampleRate))
            const endOffset = Math.min(
                totalSamples,
                Math.floor(trimEnd * sampleRate)
            )
            const length = endOffset - startOffset

            if (length <= 0) {
                console.error('Invalid trim length.')
                return
            }

            // Create trimmed buffer
            const trimmedBuffer = audioContext.createBuffer(
                audioBuffer.numberOfChannels,
                length,
                sampleRate
            )

            // Copy audio data for each channel
            for (
                let channel = 0;
                channel < audioBuffer.numberOfChannels;
                channel++
            ) {
                const sourceData = audioBuffer.getChannelData(channel)
                const trimmedData = trimmedBuffer.getChannelData(channel)
                for (let i = 0; i < length; i++) {
                    trimmedData[i] = sourceData[startOffset + i]
                }
            }

            // Convert to blob
            const trimmedBlob = await BufferToWaveBlob(trimmedBuffer)
            const trimmedURL = URL.createObjectURL(trimmedBlob)

            // Stop current playback
            if (waveSurferInstance.current.isPlaying()) {
                waveSurferInstance.current.pause()
            }

            // Load trimmed audio
            waveSurferInstance.current.load(trimmedURL)
            setRecordedBlob(trimmedBlob)

            // Wait for the new audio to be ready
            waveSurferInstance.current.once('ready', () => {
                const newDuration = waveSurferInstance.current.getDuration()

                // Clear all regions
                if (regionsPluginRef.current) {
                    regionsPluginRef.current.clearRegions()

                    // Re-enable drag selection after trim
                    regionsPluginRef.current.enableDragSelection({
                        color: 'rgba(198, 255, 0, 0.3)',
                    })
                }

                // Update durations
                setCurrentDuration(newDuration)
                setTrimStart(0)
                setTrimEnd(newDuration)
                setHasRegion(false)
                setCurrentTime(0)
            })
        } catch (error) {
            console.error('Error trimming audio:', error)
        }
    }

    // const handleSaveAudio = () => {
    //     if (!recordedBlob) return

    //     // Create download link
    //     const url = URL.createObjectURL(recordedBlob)
    //     const a = document.createElement('a')
    //     a.href = url
    //     a.download = `recording-${Date.now()}.wav`
    //     document.body.appendChild(a)
    //     a.click()
    //     document.body.removeChild(a)
    //     URL.revokeObjectURL(url)

    //     console.log('Audio saved successfully')
    // }

    const handleReset = () => {
        if (waveSurferInstance.current) {
            waveSurferInstance.current.destroy()
        }
        setIsAudioReady(false)
        setIsPlaying(false)
        setRecordedBlob(null)
        setTrimStart(0)
        setTrimEnd(0)
        setTotalDuration(0)
        setCurrentDuration(0)
        setCurrentTime(0)
        setHasRegion(false)
        setTimer(0)
        setHasReachedLimit(false)
    }

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60)
            .toString()
            .padStart(2, '0')
        const sec = (seconds % 60).toString().padStart(2, '0')
        return `${min}:${sec}`
    }

    const formatDuration = (seconds) => {
        const min = Math.floor(seconds / 60)
            .toString()
            .padStart(2, '0')
        const sec = Math.floor(seconds % 60)
            .toString()
            .padStart(2, '0')
        return `${min}:${sec}`
    }

    useEffect(() => {
        return () => {
            if (waveSurferInstance.current) {
                waveSurferInstance.current.destroy()
            }
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (timer >= 60) {
            handleStop()
            setHasReachedLimit(true)
        }
    }, [timer])

    console.log('recordedBlob', recordedBlob)

    return (
        <div className='grid grid-rows-12'>
            <div className='row-span-9 flex flex-col items-center justify-start text-center font-mono text-3xl text-white'>
                <div className={`${isAudioReady ? 'mb-7' : 'mb-24'}`}>
                    {isAudioReady
                        ? // ? hasRegion
                          //     ? `${formatDuration(trimEnd - trimStart)} / ${formatDuration(totalDuration)}`
                          `${formatDuration(currentTime)} / ${formatDuration(currentDuration)}`
                        : formatTime(timer)}
                </div>

                {/* <div className={`${isRecording ? styles.react_mic_container : ""}`}>  */}
                <ReactMic
                    record={isRecording}
                    className={`${isRecording ? styles.sound_wave : ''} w-full`}
                    onStop={onStop}
                    strokeColor='#b3e600'
                    backgroundColor='transparent'
                    visualSetting='frequencyBars'
                    mimeType='audio/webm'
                    echoCancellation={true}
                />
                {/* </div> */}

                <div className={`${isAudioReady ? 'mt-0' : 'mt-0'} w-full`}>
                    <div id='waveform' ref={waveformRef} />

                    {/* {isRecording && <RecordMusicAnimation />} */}

                    {isAudioReady && (
                        <div className='mt-2 flex flex-col items-center justify-center gap-2'>
                            <span className='text-xs text-white'>
                                {hasRegion
                                    ? `Selected: ${trimStart.toFixed(2)}s - ${trimEnd.toFixed(2)}s (${(trimEnd - trimStart).toFixed(2)}s)`
                                    : 'Drag on waveform to select region to trim'}
                            </span>
                            <div className='flex gap-2'>
                                <button
                                    className={`rounded px-3 py-1 text-xs ${
                                        hasRegion
                                            ? 'bg-[#C6FF00] text-black hover:bg-[#b3e600]'
                                            : 'cursor-not-allowed bg-gray-500 text-gray-300'
                                    }`}
                                    onClick={handleTrimAudio}
                                    disabled={!hasRegion}>
                                    Trim Audio
                                </button>
                                <button
                                    className='rounded bg-green-600 px-3 py-1 text-xs text-white hover:bg-green-700'
                                    // onClick={handleSaveAudio}
                                >
                                    Save Audio
                                </button>
                                <button
                                    className='rounded bg-red-600 px-3 py-1 text-xs text-white hover:bg-red-700'
                                    onClick={handleReset}>
                                    Reset
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='row-span-3 flex flex-col items-center justify-center gap-6'>
                {isAudioReady ? (
                    <button onClick={handlePlayPause}>
                        <div
                            className={`${styles.record_music_btn} flex h-20 w-20 items-center justify-center rounded-full`}>
                            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-[#C6FF00] text-black'>
                                {isPlaying ? (
                                    <TiMediaPause size={30} />
                                ) : (
                                    <IoIosPlay size={30} />
                                )}
                            </div>
                        </div>
                    </button>
                ) : (
                    <button onClick={isRecording ? handleStop : handleStart}>
                        <div
                            className={`${styles.record_music_btn} flex h-20 w-20 items-center justify-center rounded-full`}>
                            <div
                                className={`h-8 w-8 rounded-full ${
                                    isRecording ? 'bg-red-500' : 'bg-[#C6FF00]'
                                }`}></div>
                        </div>
                    </button>
                )}

                {hasReachedLimit ? (
                    <p className='text-center text-xs text-red-500'>
                        You've reached the 1-minute recording limit.{' '}
                        <button className='underline'>Upgrade</button> to record
                        up to 8 minutes.
                    </p>
                ) : (
                    <p className='text-xs text-[#C2C2C2]'>
                        1 min limit.{' '}
                        <button className='underline'>Upgrade</button> to use
                        longer audio (8 min)
                    </p>
                )}
            </div>
        </div>
    )
}

export default RecordMusicBody
