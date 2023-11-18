import Layout from '../components/layouts/main'
import Chakra from '../components/chakra'

function Website({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  )
}

export default Website
