
import useApp from '@/hooks/useApp';
import styles from '../createsong.module.scss'
import { addToast } from '@heroui/toast';
import { Tooltip } from '@heroui/react';

const UploadMusic = ({ image, title, description, onClickHandler, isPointer }) => {
  const { isCreateSongAISidebarOpen } = useApp();

  const handleClickHandler = () => {
    if (onClickHandler) {
      onClickHandler();
    }
  }

  return (

    <button className={`flex flex-col gap-3 items-center ${isPointer ? "cursor-not-allowed" : "cursor-pointer"}  ${styles.upload_music} ${isCreateSongAISidebarOpen ? 'px-2 py-3' : 'md:px-4 md:py-5 px-4 py-5'}`} onClick={handleClickHandler}
      disabled={isPointer}
    >
      <img src={image} alt='Music' className={` ${isCreateSongAISidebarOpen ? 'w-6 h-6' : 'md:w-8 md:h-8 w-6 h-6'}`} />
      <p className={` font-semibold text-center ${isCreateSongAISidebarOpen ? 'text-xs' : 'md:text-xs text-xs'}`}>{title}</p>
      <span className='text-xs text-center'>{description}</span>
    </button>

  )
};

export default UploadMusic;