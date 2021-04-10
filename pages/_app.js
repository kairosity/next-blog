import Layout from '../components/Layout'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
