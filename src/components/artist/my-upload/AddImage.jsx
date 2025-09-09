import { LuDownload } from "react-icons/lu";

const AddImage = ({ openAddImage, setOpenAddImage }) => {
    if (!openAddImage) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#1F1F1F] rounded-2xl w-[22rem] p-6 shadow-lg relative">
            
                <button
                    onClick={() => setOpenAddImage(false)}
                    className="absolute top-3 right-4 text-white text-xl"
                >
                    &times;
                </button>

            
                <h2 className="text-white text-lg font-semibold text-center mb-4">Add Image</h2>

                <div className="border border-dashed border-[#404040] rounded-xl h-48 flex flex-col items-center justify-center text-center text-white text-sm space-y-2">
                    <LuDownload size={21}/>
                    <p>Upload Image</p>
                    <p className="text-[#9D9D9D] text-xs">
                        Drag & Drop or <span className="text-[#C6FF00] cursor-pointer underline">Browse</span>
                    </p>
                </div>

            
                <button className="mt-6 bg-[#C6FF00] text-black w-full py-2 rounded-full font-medium hover:opacity-90 transition">
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddImage;
