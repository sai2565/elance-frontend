import Head from 'next/head'
import Header from '../components/Header'
import QuoteSection from '../components/QuoteSection'
import LandingBody from '../components/LandingBody'
import PopularServicesSlider from '../components/PopularServicesSlider'
import TrustedBy from '../components/TrustedBy'
import Footer from '../components/Footer'

import getCountries from "../graphql/queries/getCountries"

export default function Home({countries}) {
  return (
    <div className="">
    <pre>{JSON.stringify(countries, null, 2)}</pre>
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
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticProps() {

    const  countries = await getCountries()

    return {
      props: {
        countries: countries?.slice(0, 4),
      },
   };
}
