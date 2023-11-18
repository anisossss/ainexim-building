import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import VoxelDogLoader from '../building-loader'

const LazyVoxelDog = dynamic(() => import('../building'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>AINEXIM BUILDING</title>
      </Head>

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />
        {children}
      </Container>
    </Box>
  )
}

export default Main
