import "../styles/globals.css";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import Layout from "../components/Layout";
gsap.registerPlugin(CSSPlugin);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
