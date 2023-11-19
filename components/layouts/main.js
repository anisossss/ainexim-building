import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import VoxelDogLoader from '../building-loader'
import VoxelDogLoader2 from '../building-loader2'
import VoxelDogLoader3 from '../building-loader3'

const LazyVoxelDog = dynamic(() => import('../building'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})
const LazyVoxelDog2 = dynamic(() => import('../building2'), {
  ssr: false,
  loading: () => <VoxelDogLoader2 />
})

const Main = ({ children }) => {
  return (
    <Box>
      <Head>
        <title>AINEXIM BUILDING</title>
      </Head>

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog2 />
        {children}
      </Container>
      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />
        {children}
      </Container>
    </Box>
  )
}

export default Main
