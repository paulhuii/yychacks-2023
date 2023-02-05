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
import {useState} from 'react'

import {Navigate, useNavigate} from "react-router-dom"


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

    const handleClickArt = () => {
        navigate('/art')
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
                <button className="button-value">
                <input type="date"
                       name="Date"
                       id="date"/>
                </button>

            </div>

            <Stack direction='table' m={50}>
            <Card maxW='sm'>
                <CardBody>
                    <Image w={2200}
                        src='https://beta.ctvnews.ca/content/dam/ctvnews/images/2023/1/16/1_6228473.jpg?cache_timestamp=1673874296285'
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
                    <Image  w={2200}
                        src='https://goskialberta.com/wp-content/uploads/2020/10/Canada-Olympic-Park2.jpg'
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
                    <Image w={2200}
                        src='https://scontent.fyyc1-1.fna.fbcdn.net/v/t39.30808-6/325792881_730713705059823_3534354746596138627_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=xLTTMLv-XfsAX_IWsnE&_nc_ht=scontent.fyyc1-1.fna&oh=00_AfBEb7peQTOYeStJZ2CCYjNKWbhnaOkOaNtYMV0YBABaQw&oe=63E4BBE4'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Art & Culture</Heading>
                        <Text>
                            Arts and culture in Calgary
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue' onClick={handleClickArt}>
                            Click for More!
                        </Button>

                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Card maxW='sm'>
                <CardBody>
                    <Image w={2200}
                        src='https://offloadmedia.feverup.com/secretvancouver.co/wp-content/uploads/2020/12/22045504/Dog-Sledding-Winter-Sport-Canada-scaled.jpg'
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