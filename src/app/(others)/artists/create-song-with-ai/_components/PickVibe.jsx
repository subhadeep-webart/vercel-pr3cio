import { useState } from "react";
import ChooseYourVoice from "./ChooseYourVoice";
import PickYourVibe from "./PickYourVibe";
import YourMusicLibrary from "./YourMusicLibrary";

const PickVibe = ({selected,setSelected}) => {
    // const [selected, setSelected] = useState([])
    return (
        <>
            {/* <div> */}
            <PickYourVibe selected={selected} setSelected={setSelected} />

            <div className="grid grid-cols-12 md:px-6 pr-6">
                <div className="col-span-8">
                    <ChooseYourVoice />
                </div>
                <div className="col-span-4">
                    <YourMusicLibrary />
                </div>
            </div>
            {/* </div> */}
        </>
    )
};

export default PickVibe;