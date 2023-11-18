import { ChakraProvider } from '@chakra-ui/react'

export default function Chakra({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
