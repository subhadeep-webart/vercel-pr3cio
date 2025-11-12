'use client';
import useApp from '@/hooks/useApp';
import styles from '../createsong.module.scss'

const ChooseYourVoice = () => {
    const { isCreateSongAISidebarOpen, setSongAIContext, songAIContext } = useApp();
    const { vocalGender } = songAIContext

    const handleVoiceGenderChange = (voiceType) => {
        console.log("Voice Type======>", voiceType);
        const actionPayload = { type: "vocalGender", typeState: voiceType === "woman" ? "f" : "m" }
        setSongAIContext(actionPayload);
    }
    return (
        <>
            <div className={`transition-all duration-300 origin-top ${isCreateSongAISidebarOpen ? 'scale-90 text-sm' : 'scale-90 text-sm md:scale-100 md:text-base'
                }`}>
                <h3 className='mb-2 text-lg text-white'>Choose Your Voice</h3>

                <div className='relative mx-auto h-[100px] w-full max-w-[300px]'>
                    <button className={`absolute left-0 top-[50px] -translate-y-1/2 rounded-full bg-[#2C2E36] p-3 z-10 ${vocalGender === "f" ? styles.choose_your_voice : ''}`} onClick={() => handleVoiceGenderChange("woman")}>
                        <img
                            src='/images/woman_voice.png'
                            alt='Woman'
                            className='w-18 h-18 object-contain'
                        />
                    </button>

                    <div className='absolute left-[117px] top-[50px] -translate-x-1/2 -translate-y-1/2 -z-10'>
                        <img
                            src='/images/choose-voice-gap.png'
                            alt='Gap'
                            className='w-18 h-18 object-contain'
                        />
                    </div>

                    <button
                        className={`absolute left-[138px] top-[50px] -translate-y-1/2 rounded-full bg-[#2C2E36] p-3 z-10 ${vocalGender === "m" ? styles.choose_your_voice : ''}`} onClick={() => handleVoiceGenderChange("man")}>
                        <img
                            src='/images/man_voice.png'
                            alt='Man'
                            className='w-18 h-18 object-contain'
                        />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ChooseYourVoice
