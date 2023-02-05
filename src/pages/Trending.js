import React from 'react'
import {useState} from 'react'
import {Navigate, useNavigate} from "react-router-dom"
import Modal from '../components/Modal'
import {AspectRatio, Box, Button, Grid, GridItem, Heading, Image, Stack} from "@chakra-ui/react";
import reels from "../videos/reels.mp4";

const Trending = () => {

    const navigate_spin = useNavigate()
    const handleClickSpin = () => {
        navigate_spin('/wheel')
    }
    const [openModal, setOpenModal] = useState(false)
    const [search, setSeach] = useState('')

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/chinook')
    }


    return (
        <div>
            <div className="header">
            <Heading className="title" >
                TOP TRENDING
            </Heading>
            <Stack direction='row' spacing={0}>
                <button className='spin-button' onClick={() => {setOpenModal(true);
                }}>
                    Spin the wheel
                </button>
                {openModal && <Modal closeModal={setOpenModal} />}
            </Stack>
            </div>

            <Grid
                templateAreas={`"header reel"`}
                gridTemplateRows={'700px  70px 1fr'}
                gridTemplateColumns={'700px 1fr '}
                gap='1'
                h='500px'


            >

                <GridItem pl='2'  area={'header'}  className="scrollPic">
                    <Stack direction='column' m={70}>

                        <Image
                            boxSize='500px'
                            objectFit='cover'
                            src='https://livewirecalgary.com/wp-content/uploads/2021/12/rr3178-0653_FLT-large.jpg'
                            alt='chinookblast'
                            mx={'20px'}
                            className="border"
                            onClick={handleClick}
                        />
                        <Image
                            boxSize='500px'
                            objectFit='cover'
                            src='https://images.dailyhive.com/20210212110437/ciss.jpg'
                            alt='chinatown'
                            mx={'20px'}
                            className="border"
                        />
                        <Image
                            boxSize='500px'
                            objectFit='cover'
                            src='https://media.discordapp.net/attachments/1065348629239435351/1071469499028607036/TubePark_1200x1000_1.jpeg?width=514&height=428'
                            alt='pic3'
                            py={'20px'}
                            className="border"
                        />

                    </Stack>
                </GridItem>

                <GridItem pl='2'  area={'reel'}>
                    <div className="reels">
                        <video  className="reel" width="400" src={reels} autoPlay loop muted/>

                    </div>
                </GridItem>



            </Grid>











        </div>

    )
}
export default Trending