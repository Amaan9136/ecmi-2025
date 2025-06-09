import Head from "next/head";
import AboutUs from "../components/AboutUs/Index";
import Committee from "../components/Committee/Index";
import Conference from "../components/Conference/Index";
import ContactUs from "../components/ContactUs/Index";
import Footer from "../components/Footer/Index";
import NeonGlowEffect from "../components/helpers/NeonGlowEffect";
import Hero from "../components/Hero/Index";
import Schedule from "../components/Schedule/Index";
import SubmissionGuidelines from "../components/SubmissionGuidelines/Index";

export default function Home() {
  return (
    <>
      <NeonGlowEffect />

      <Head>
        <title>ECMI 2026 - International Conference on Emerging Research in Smart Electronics and Machine Infomatics</title>
        <meta
          name="description"
          content="Join ECMI 2026 at AIT Chikmagalur, an International Conference on Emerging Research in Smart Electronics and Machine Infomatics"/>
        <meta name="keywords" content="ECMI 2026, AIT Conference, Smart Electronics, AI, Machine Intelligence, IoT, 5G, Chikmagalur, India" />
        <meta name="author" content="ECMI 2026 - AIT Chikmagalur" />

        <meta property="og:title" content="ECMI 2026 - International Conference on Emerging Research in Smart Electronics and Machine Infomatics" />
        <meta property="og:description" content="ECMI 2026 brings together experts in AI, IoT, 5G, and more for interdisciplinary discussions and groundbreaking research." />
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
        <SubmissionGuidelines />
        <Schedule />
        <ContactUs />
      </main>

      <Footer />
    </>
  );
}
