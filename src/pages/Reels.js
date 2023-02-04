import React, {useEffect, useRef} from "react";
import reels from "../videos/reels.mp4"
const Reels = () => {
    return (
        <div className="reels">
            <video width="400" src={reels} autoPlay loop muted/>

        </div>

    )

}

export default Reels

