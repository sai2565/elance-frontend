import Head from 'next/head'
import Header from '../components/Header'
import QuoteSection from '../components/QuoteSection'
import LandingBody from '../components/LandingBody'
import PopularServicesSlider from '../components/PopularServicesSlider'
import TrustedBy from '../components/TrustedBy'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Elance | Hire Freelancers & Find Freelance Jobs Online</title>
        <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
      </Head>
      <div> 
        <Header/>
        <QuoteSection/>
        <TrustedBy/>
        <PopularServicesSlider/>
        <LandingBody/>
      </div>
    </div>
  )
}
