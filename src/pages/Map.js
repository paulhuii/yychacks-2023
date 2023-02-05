import React from "react"
import { useState } from "react"
import { Button, Heading, Stack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { AspectRatio , Flex} from '@chakra-ui/react'
export default function Map (){

    const [search, setSearch] = useState('')
    return(
        <div>
            <div className="header">
                <Heading className="title">
                    SPORT & RECREATION
                </Heading>




                <input type="text" onChange={(e) => setSearch(e.target.value)} value = {search} className="search"/>
                <Stack direction='row' spacing={4}>
                    <Button color='white' m={'10px'} bg='black' variant='solid'>
                        Search
                    </Button>
                </Stack>
            </div>


            <Stack direction='column' m={70}>
                <Image
                    boxSize='500px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    mb={'20px'}
                />
                <Image
                    boxSize='500px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    mx={'20px'}
                />
                <Image
                    boxSize='500px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    py={'20px'}
                />
            </Stack>

            <AspectRatio ratio={16 / 9}>
                <iframe
                    src="https://www.google.com/maps/d/embed?mid=1XremeVzV2c4ruq0uBIBT5_M0G3Mvxro&ehbc=2E312F&amp;ll=51.0447,-114.0719&amp;z=12" width="640" height="480"
                />
            </AspectRatio>


        </div>
    );
}