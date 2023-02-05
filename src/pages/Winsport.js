import {useNavigate} from "react-router-dom";
import snowboard from "../images/snowboard.jpeg"
import {Flex, Heading, Stack} from "@chakra-ui/react";
import Modal from "../components/Modal";

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
            <div className="header">
                <Heading className="title" >
                    SNOWBOARDING
                </Heading>
                <Stack direction='row' spacing={0}>

                </Stack>
            </div>            <div>

                <Flex direction="columns">
                <img src={snowboard}/>
                <p className="winsport">
                    Whether it's your first time snowboarding, you need a refresher, want to build confidence or just keep up with the kids, this is the program for you.





                </p>
                </Flex>
            </div>


            <br></br>


            <div className="sport-button-div">
            <button className="sport-button" onClick={handleClick}>Video</button>


            <button className="sport-button" onClick={handleClickTickets}>Buy Ski Tickets</button>
            </div>
        </>
    )
}

export default Winsport
