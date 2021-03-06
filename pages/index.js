import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/HeroSection";
import AboutPage from "../components/About";
import MyProjects from "../components/MyProjects/MyProjects";
import FavouriteTech from "../components/FavoueriteTech/FavouriteTech";

// SVG
import WaveFavTech from "../assets/svg/WaveFavTech.svg";
import Footer from "../components/Footer/Footer";
import MyVideos from "../components/MyVideos/MyVideos";
import MyBlogs from "../components/MyBlogs/MyBlogs";

export default function Home() {
  const ytApiKey = "AIzaSyCMn2_4ex4vzeoCDDtOfK82-xUqbUT0bDs";

  // console.log("result is ", ytApiKey);

  return (
    <div>
      <Head>
        <title>Rayan Abid</title>
        <meta
          name="description"
          content="Hi! I'm Rayan Abid. I'm a software developer. I have ample expirience in texhnologies such as React js, React Native, Node js, Solidity, and many more."
        />
        <meta property="og:url" content="https://www.rayanabid.com/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb app id" />
        <meta property="og:title" content="Rayan Abid - Software developer" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="I'm a software developer from Lahore, Pakistan. I have 2 years experience. I've worked for multiple clients and companies and have helped them building awesome solutions to there problems."
        />
        <meta
          property="og:image"
          content={
            "https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1651419688150%2FTfY9g7ygS.jpg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=640&q=75"
          }
        />
        <meta
          name="keywords"
          content="Reactjs, React Js, React, Node js, React native, Solidity, Software engineer, Software developer, Nordstone, Flux (pvt), linkedin, rayanabid, rayan abid, github rayanabid, rayan abid software engineer, rayan abid software developer, rayan abid react"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="google-site-verification"
          content="NlCmj9T2EobwjHW2Gdvn8HCmRssQsPMjRNxKPX30G5I"
        />
        <link
          rel="icon"
          href="https://rayanabid.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1651419054991%2FouOwX2HBa.png%3Fw%3D1000%26h%3D250%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1080&q=75"
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
      {/* <AboutPage /> */}

      <MyVideos />

      <FavouriteTech />

      <MyProjects />

      <MyBlogs />

      {/* <MyVideos />

      <MyProjects /> */}

      <Footer />
    </div>
  );
}
