import Layout from "../components/Layout";
export default function App({ Component, pageProps }) {
  //   return
  // <Layout>
  //   <Component {...pageProps} />
  // </Layout>
  const geyLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return geyLayout(<Component {...pageProps} />);
}
