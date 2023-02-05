import { AspectRatio , Flex} from '@chakra-ui/react'

const Art = () => {
    return (
        <div>
            Art
            <AspectRatio ratio={16 / 9}>
            <iframe
                src="https://www.google.com/maps/d/embed?mid=10svwifr8vmNsn0iDNy9rUhqicSBzJmE&ehbc=2E312F&amp;ll=51.0447,-114.0719&amp;z=12" width="640" height="480"
            />
            </AspectRatio>
        </div>
        
    )
}
export default Art