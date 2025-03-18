import Head from "next/head";
import AboutUs from "../components/AboutUs/Index";
import Committee from "../components/Committee/Index";
import Conference from "../components/Conference/Index";
import ContactUs from "../components/ContactUs/Index";
import Footer from "../components/Footer/Index";
import Hero from "../components/Hero/Index";
import Schedule from "../components/Schedule/Index";
import NeonGlowEffect from "../components/helpers/NeonGlowEffect";

export default function Home() {
  return (
    <>
      <NeonGlowEffect />

      <Head>
        <title>ECMI 2025 - International Conference on Smart Electronics, Communication & AI</title>
        <meta
          name="description"
          content="Join ECMI 2025 at AIT Chikmagalur, an international conference on emerging research in smart electronics  and machine informatics
        <meta name="keywords" content="ECMI 2025, AIT Conference, Smart Electronics, AI, Machine Intelligence, IoT, 5G, Chikmagalur, India" />
        <meta name="author" content="ECMI 2025 - AIT Chikmagalur" />

        <meta property="og:title" content="ECMI 2025 - International Conference on Smart Electronics, Communication & AI" />
        <meta property="og:description" content="ECMI 2025 brings together experts in AI, IoT, 5G, and more for interdisciplinary discussions and groundbreaking research." />
        <meta property="og:url" content="https://aitecmi.com/" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://aitecmi.com/" />

        <meta name="robots" content="index, follow" />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className="font-IBM-Plex">
        <Hero />
        <AboutUs />
        <Committee />
        <Conference />
        <Schedule />
        <ContactUs />
      </main>

      <Footer />
    </>
  );
}
