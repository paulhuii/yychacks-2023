import {useNavigate} from "react-router-dom";
import snowboard from "../images/snowboard.jpeg"

const Winsport = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/VR')
    }
    const handleClickTickets = () => {
        navigate('/cart')
    }
    return (
        <>
            <h1 className="winsport">SNOWBOARDING</h1>
            <div class="Winsport">


                <img src={snowboard}/>
                <p className="winsport">
                    Whether it's your first time snowboarding, you need a refresher, want to build confidence or just keep up with the kids, this is the program for you.

                    Adult snowboard programs are for snowboarders of all abilities who want to get out on the slopes and learn a new sport, or learn new skills for a sport they already love. You will gain confidence, connect with other adults, refine your technique and challenge yourself in a safe learning environment.

                    These lessons are two hours long and include hill access for your lesson time. If you wish to extend your hill access, this can be purchased separately through Guest Services at the end of your lesson.

                    Levels may be repeated to refine and consolidate skills.

                    Whether it's your first time snowboarding, you need a refresher, want to build confidence or just keep up with the kids, this is the program for you.

                    Adult snowboard programs are for snowboarders of all abilities who want to get out on the slopes and learn a new sport, or learn new skills for a sport they already love. You will gain confidence, connect with other adults, refine your technique and challenge yourself in a safe learning environment.

                    These lessons are two hours long and include hill access for your lesson time. If you wish to extend your hill access, this can be purchased separately through Guest Services at the end of your lesson.

                    Levels may be repeated to refine and consolidate skills.

                    <br></br>
                    Whether it's your first time snowboarding, you need a refresher, want to build confidence or just keep up with the kids, this is the program for you.

                    Adult snowboard programs are for snowboarders of all abilities who want to get out on the slopes and learn a new sport, or learn new skills for a sport they already love. You will gain confidence, connect with other adults, refine your technique and challenge yourself in a safe learning environment.

                    These lessons are two hours long and include hill access for your lesson time. If you wish to extend your hill access, this can be purchased separately through Guest Services at the end of your lesson.

                    Levels may be repeated to refine and consolidate skills. (TAKEN FROM WINSPORT)
                </p>
            </div>


            <br></br>



            <button class="sport" onClick={handleClick}>Video</button>


            <br></br>
            <br></br>

            <button class="sport" onClick={handleClickTickets}>Buy Ski Tickets</button>

        </>
    )
}

export default Winsport
