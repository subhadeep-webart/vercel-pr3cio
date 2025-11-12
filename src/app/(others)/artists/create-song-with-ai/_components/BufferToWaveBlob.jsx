const BufferToWaveBlob = (abuffer) => {
    return new Promise((resolve) => {
        const numOfChan = abuffer.numberOfChannels,
            length = abuffer.length * numOfChan * 2 + 44,
            buffer = new ArrayBuffer(length),
            view = new DataView(buffer),
            channels = [],
            sampleRate = abuffer.sampleRate,
            bitDepth = 16

        // Write WAVE header
        function setUint32(offset, data) {
            view.setUint32(offset, data, true)
        }

        function setUint16(offset, data) {
            view.setUint16(offset, data, true)
        }

        setUint32(0, 0x46464952) // "RIFF"
        setUint32(4, length - 8)
        setUint32(8, 0x45564157) // "WAVE"

        setUint32(12, 0x20746d66) // "fmt " chunk
        setUint32(16, 16)
        setUint16(20, 1)
        setUint16(22, numOfChan)
        setUint32(24, sampleRate)
        setUint32(28, sampleRate * numOfChan * 2)
        setUint16(32, numOfChan * 2)
        setUint16(34, bitDepth)

        setUint32(36, 0x61746164) // "data" - chunk
        setUint32(40, length - 44)

        // Write interleaved audio
        let offset = 44
        for (let i = 0; i < numOfChan; i++) {
            channels.push(abuffer.getChannelData(i))
        }

        for (let i = 0; i < abuffer.length; i++) {
            for (let ch = 0; ch < numOfChan; ch++) {
                let sample = Math.max(-1, Math.min(1, channels[ch][i]))
                sample = sample < 0 ? sample * 0x8000 : sample * 0x7fff
                view.setInt16(offset, sample, true)
                offset += 2
            }
        }

        resolve(new Blob([buffer], { type: 'audio/wav' }))
    })
};

export default BufferToWaveBlob;
