import { AspectRatio , Flex} from '@chakra-ui/react'

const Sports = () => {
    return (
        <div>
            Sports
            <AspectRatio ratio={16 / 9}>
            <iframe
                src="https://www.google.com/maps/d/embed?mid=1XremeVzV2c4ruq0uBIBT5_M0G3Mvxro&ehbc=2E312F&amp;ll=51.0447,-114.0719&amp;z=12" width="640" height="480"
            />
            </AspectRatio>
        </div>
    )
}
export default Sports