
import DatePicker from "react-datepicker";


import React, { useEffect } from "react"
import { useState } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { Button, Grid, GridItem, Heading, Stack,Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { AspectRatio , Flex} from '@chakra-ui/react'
//import Fade from 'react-reveal/Fade'
export default function Map (){
useEffect(()=>{
//Aos.init({duration});
},[])
    const [search, setSeach] = useState('')
    return( 
<div>
        <div className="header" >
            <Heading className="title" >
                SPORT & RECREATION 
            </Heading>
            
  
  

            <input type="text" onChange={(e) => setSeach(e.target.value)} value = {search} className="search"/>
            <Stack direction='row' spacing={4}>
  <Button color='black'  bg='white' variant='solid' className="botton">
    Search
  </Button>
</Stack>
        </div>

        <Grid 
templateAreas={`"header map"`}
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
    src='https://cdn.discordapp.com/attachments/1065348629239435351/1071469481718718504/terrainpark-scaled.webp'
    alt='Pic1'
    mb={'20px'}
    className="border"
  />
  <Image
    boxSize='500px'
    objectFit='cover'
    src='https://cdn.discordapp.com/attachments/1065348629239435351/1071469459585384568/shutterstock_543952588.jpeg'
    alt='Pic2'
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
  <GridItem pl='2' area={'map'} m={'100px'}>
  <AspectRatio ratio={16 / 9}>
  <iframe
    src="https://www.google.com/maps/d/embed?mid=1XremeVzV2c4ruq0uBIBT5_M0G3Mvxro&ehbc=2E312F&amp;ll=51.0447,-114.0719&amp;z=12" width="640" height="480"
  />
</AspectRatio>
  </GridItem>
        
</Grid>
 
 <Box bg='black' w='100%'  color='white' h={'90px'} className={'footer'}>
  
</Box>
        
        </div>
    );
}


/*import React from "react"
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
                SPORT & RECREATION 
            </Heading>
            
  
  

            <input type="text" onChange={(e) => setSeach(e.target.value)} value = {search} className="search"/>
            <Stack direction='row' spacing={4}>
  <Button color='white' m={'10px'} bg='black' variant='solid'>
    Search
  </Button>
</Stack>
        </div>

  <AspectRatio ratio={16 / 9}>
  <iframe
    src="https://www.google.com/maps/d/embed?mid=1XremeVzV2c4ruq0uBIBT5_M0G3Mvxro&ehbc=2E312F&amp;ll=51.0447,-114.0719&amp;z=12" width="640" height="480"
  />
</AspectRatio>

        
        </div>
    );
}*/

