import "../styles/globals.css";
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      {/* <div className="mx-10"> */}
      <Component {...pageProps} />
      {/* </div> */}
    </>
  );
}

export default MyApp;
