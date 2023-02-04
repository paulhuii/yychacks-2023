import React from "react"
import { useState } from "react"
import { Button, Heading, Stack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { AspectRatio , Flex} from '@chakra-ui/react'
export default function Map (){

    const [search, setSeach] = useState('')
    return( 
<div>
        <div className="header">
            <Heading className="title">
                SORT & RECREATION 
            </Heading>
            
  
  

            <input type="text" onChange={(e) => setSeach(e.target.value)} value = {search} className="search"/>
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
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
  />
</AspectRatio>

        
        </div>
    );
}
