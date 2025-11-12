import useApp from "@/hooks/useApp";

const MyLibraryCartSkeleton = () => {
    const { songAIContext } = useApp();

    const { title, style } = songAIContext;

    return (
        <div className="my-6 relative">
            <div className="flex space-x-2">
                {/* Left Column (Image + Buttons) */}
                <div className="relative w-1/4 animate-pulse">
                    {/* Version Badge Skeleton */}
                    <div className="absolute h-4 w-10 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 top-[-8px] left-1/2 -translate-x-1/2" />

                    {/* Image Skeleton */}
                    <div className="w-full aspect-square bg-gray-800 rounded-2xl" />

                    {/* Play Button Skeleton */}
                    <div className="absolute h-7 w-7 rounded-full bg-gray-600 bottom-[-4px] left-1/2 -translate-x-1/2 z-10" />
                </div>

                {/* Right Column (Text + Actions) */}
                <div className="w-3/4 space-y-3">
                    {/* Title Skeleton */}
                    {/* <div className="h-4 bg-gray-700 rounded w-2/3" /> */}
                    <div className="mb-3">
                        <h3 className="text-sm line-clamp-1 text-white">{title}</h3>
                        <p className="text-xs text-[#9D9D9D] line-clamp-1">
                            An anthem of {style}
                        </p>
                        <p class="animate-pulse text-pink-500 font-medium text-xs">Crafting Your Melody...</p>
                    </div>
                    {/* Tag Skeleton */}
                    {/* <div className="h-3 bg-gray-700 rounded w-1/2" /> */}

                    {/* Buttons */}
                    <div className="flex items-center justify-between pr-2 mt-2">
                        {/* Download Button Skeleton */}
                        <div className="h-6 w-6 bg-gray-700 rounded-full" />

                        {/* Options Button Skeleton */}
                        <div className="h-5 w-5 bg-gray-700 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyLibraryCartSkeleton;
