import { forwardRef } from 'react'
import { Box } from '@chakra-ui/react'

export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return <DogContainer></DogContainer>
}

export default Loader
