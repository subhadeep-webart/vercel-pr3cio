import React, { useEffect, useState } from "react";
import { Slider, Button } from "@heroui/react";
import { FiVolumeX, FiVolume1 } from "react-icons/fi";
import styles from './media-controls.module.scss';
import { playerService } from "@/services/player-service";

export default function VolumeControl() {
  const initialVolume = (playerService.getAudioElement() && playerService.getAudioElement().volume) || 0.5;
  const initialMuted = playerService.getAudioElement() ? playerService.getAudioElement().muted : false;

  const [volume, setVolume] = useState(initialVolume * 100);
  const [isMuted, setIsMuted] = useState(initialMuted);

  useEffect(() => {
    // You can add event listeners here if you want to sync state with external volume changes
  }, []);

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    playerService.mute(); // toggles mute internally
  };

  const handleVolumeChange = (val) => {
    setVolume(val);
    playerService.setVolume(val / 100);

    const muted = val === 0;
    setIsMuted(muted);
    if (playerService.getAudioElement()) {
      playerService.getAudioElement().muted = muted;
    }
  };

  return (
    <div className="flex flex-col gap-2 items-start justify-center text-white">
      <div className="relative group">
        {/* Volume Button */}
        <Button
          isIconOnly
          radius="full"
          variant="light"
          onPress={toggleMute}
          className="z-10"
        >
          {isMuted ? (
            <FiVolumeX className="text-xl text-white" />
          ) : (
            <FiVolume1 className="text-xl text-white" />
          )}
        </Button>

        {/* Slider (hidden until hover) */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden group-hover:block transition-all duration-300">
          <Slider
            aria-label="Volume"
            className={styles.volumeControl}
            value={volume}
            onChange={handleVolumeChange}
            color="default"
            hideThumb={true}
            showTooltip={true}
            classNames={{
              base: "w-full",
              track: "bg-white w-[103px] h-[4px] border-none",
              filler: "bg-[#ff2663]",
            }}
          />
        </div>
      </div>
    </div>

  );
}
