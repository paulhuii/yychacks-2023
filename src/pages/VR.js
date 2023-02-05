import snowboardVR from "../videos/snowboardVR.mp4"

const VR = () => {
    return (
        <div className="VR">
            <video src={snowboardVR} autoPlay loop muted/>
        </div>
    )
}

export default VR