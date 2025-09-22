import { useEffect, useState } from "react";
import GalleryImageCard from "./GalleryImageCard";

const ProductGallery = ({ imageUrl }) => {
    const [selectedImage, setSelectedImage] = useState();
    const [preloadImage, setPreloadImage] = useState(false);
    const handleClick = (image) => {
        setSelectedImage(image)
    }

    useEffect(() => {
        if (imageUrl) {
            setSelectedImage(imageUrl[0])
        }

    }, [imageUrl])

    const handleLoad = () => {
        setTimeout(()=>{
            setPreloadImage(true);
        },1000)
        console.log("Calling")
    }
    return (
        <div className="slideermain">
            <div
                className="bg-[#282828] border-1 border-[#676767] border-solid rounded-[0.75rem] flex justify-center items-center p-8 mb-5">
                <img
                    src={selectedImage}
                    alt={"product-image"}
                    loading="lazy"
                    className={`rounded-full h-[24.31rem] object-cover transition-opacity duration-800 ${preloadImage ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={handleLoad}
                />
            </div>
            <div className=" w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 lg:grid-cols-4 gap-5">
                {
                    imageUrl?.map((image, index) => (<GalleryImageCard image={image} key={`gallery-image-${index + 1}`} handleClick={handleClick} selectedImage={selectedImage} />))
                }
            </div>
        </div>
    )
}

export default ProductGallery;