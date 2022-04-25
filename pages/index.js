import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/HeroSection";
import AboutPage from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rayan Abid</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="google-site-verification"
          content="NlCmj9T2EobwjHW2Gdvn8HCmRssQsPMjRNxKPX30G5I"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <HeroSection />
      <AboutPage />
    </div>
  );
}
