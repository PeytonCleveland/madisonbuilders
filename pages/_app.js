import "../styles/globals.css";
import { Layout } from "../components";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Madison Builders</title>
        <meta type="og:title" content="Madison Builders" />
        <meta
          type="og:description"
          content="Madison Builders is Alabama's premier custom home builder, focused on utilizing the latest in building science to construct high-performing, energy-efficient homes."
        />
        <meta type="og:author" content="Peyton Cleveland" />
        <meta type="og:url" content="https://madisonbuilders.com" />
        <meta
          type="og:image"
          content="https://madisonbuilders.com/madison-builders.png"
        />
        <meta type="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@madisonbuilders" />
        <meta name="twitter:creator" content="@madisonbuilders" />
        <meta name="twitter:title" content="Madison Builders" />
        <meta
          name="twitter:description"
          content="Madison Builders is Alabama's premier custom home builder, focused on utilizing the latest in building science to construct high-performing, energy-efficient homes."
        />
        <meta
          name="twitter:image"
          content="https://madisonbuilders.com/madison-builders.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
