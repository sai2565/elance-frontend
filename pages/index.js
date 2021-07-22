import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuoteSection from '../components/landingpage/QuoteSection'
import LandingBody from '../components/landingpage/LandingBody'
import PopularServicesSlider from '../components/landingpage/PopularServicesSlider'
import TrustedBy from '../components/landingpage/TrustedBy'
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <Head>
        <title>Elance | Hire Freelancers & Find Freelance Jobs Online</title>
        <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
      </Head>
      <div>
        <Header page={"landing"}/>
        <QuoteSection/>
        <TrustedBy/>
        <PopularServicesSlider/>
        <LandingBody/>
        <Footer />
      </div>
    </div>
  )
}