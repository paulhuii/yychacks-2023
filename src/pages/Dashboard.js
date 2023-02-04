import {
    Badge,
    Box,
    Stack,
    Image,
    Divider,
    CardFooter,
    Text,
    Button,
    ButtonGroup,
    Card,
    CardBody, Heading, CardHeader, StackDivider
} from '@chakra-ui/react'
import React from 'react'
import {Navigate, useNavigate} from "react-router-dom"
import {MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow} from "mdb-react-ui-kit";


const category = {
    imageUrl: 'https://storage.googleapis.com/twg-content/original_images/1301-June-Trends-Thumbnail.jpg',
    title: 'Top Trending',

}

const Dashboard = () => {
    const navigate = useNavigate()

    const handleClickTop = () => {
        navigate('/trending')
    }
    const handleClickSports = () => {
        navigate('/sports')
    }

    const handleClickHome = () => {
        navigate('/dashboard')
    }

    const handleClickReel = () => {
        navigate('/reels')
    }



    return (
        <div class="wrapper">
            <div id="search-container">
            <input
            type="search"
            id="search-input"
            placeholder="search"
            />
            <button id="search">Search</button>
        </div>
            <div id="buttons">
                <button className="button-value">All Ages</button>
                <button className="button-value">$$$</button>
                <button className="button-value">Pet-Friendly</button>
                <button className="button-value">Dates</button>

            </div>

            <Stack direction='table' m={50}>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://i.pinimg.com/564x/ec/8c/4d/ec8c4d909750bed8c17d784183028054.jpg'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Top Trending</Heading>
                        <Text>
                            The top trending activities in Calgary!
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue' onClick={handleClickTop}>
                            Click for More!
                        </Button>

                    </ButtonGroup>
                </CardFooter>
            </Card>

            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://i.pinimg.com/564x/53/24/a6/5324a6747b19071e08c531384616a6ce.jpg'
                        alt='Sports & Recreation'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Sports & Recreation</Heading>
                        <Text>
                            Sports & Recreation within Calgary
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue' onClick={handleClickSports}>
                           Click for More!
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://i.pinimg.com/564x/7e/39/b3/7e39b3b342bca192731fdfac8e7787ec.jpg'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Art</Heading>
                        <Text>
                            Art and related in Calgary
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Click for More!
                        </Button>

                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://i.pinimg.com/736x/70/33/2d/70332dcd73b4905d77e9c5756feb99f4.jpg'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Pet Friendly</Heading>
                        <Text>
                            Pet Friendly Activities in Calgary
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue' >
                            Click for More!
                        </Button>

                    </ButtonGroup>
                </CardFooter>
            </Card>

        </Stack>

                <div id="buttons">
                    <button className="home-button" onClick={handleClickHome}>Home</button>
                    <button className="reel-button" onClick={handleClickReel}>Reel</button>
                    <button className="user-button" >User</button>
                </div>




        </div>
    )
}

export default Dashboard