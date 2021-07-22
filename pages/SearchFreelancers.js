import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FreelancersSearch from '../components/search/FreelancersSearch';

function SearchFreelancers() {
    return (
        <div className="">
            <Head>
                <title>Elance | Search Freelancers</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <Header page={"searchfreelancers"}/>
            {/* <div className="bg-black space-x-16 flex lg:px-32 px-5 text-white font-semibold pt-3">
                <h1 className={`hover:border-b-2 hover:border-white cursor-pointer pb-2 px-2 ${userType === "F" && "border-b-2 border-white"}`}>Projects</h1>
                <h1 className={`hover:border-b-2 cursor-pointer hover:border-white pb-2 px-2 ${userType === "C" && "border-b-2 border-white"}`}>Freelancers</h1>
            </div> */}
            <div className={`mx-5 lg:mx-32 mb-10`}>
                <FreelancersSearch />
            </div>
            <Footer />
        </div>

    )
}

export default SearchFreelancers
