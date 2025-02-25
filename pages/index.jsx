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
        <title>ECMI - 2025</title>
        <meta name="description" content="AIT Chikmagalur ECMI 2025" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className="font-IBM-Plex">
      <Hero />
        <AboutUs />
        <Committee />
        <Conference />
        <Schedule />
        {/* <AboutJury /> */}
        {/* <AboutMentors /> */}
        {/* <AboutEvent /> */}
        {/* <TheyTrustedUs /> */}
        {/* <Places /> */}
        <ContactUs />
      </main>
      <Footer />
      {/* <h1 className="text-center text-4xl">Temporarily Disabled</h1>
      <p className="text-center text-lg">469 | May take time to resolve.</p> */}
    </>
  );
}
