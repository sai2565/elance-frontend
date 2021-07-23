import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FreelancersSearch from '../components/search/FreelancersSearch';
import ProjectsSearch from '../components/search/ProjectsSearch';

function Search() {
    const [searchType, setSearchType] = useState('F');
    return (
        <div className="">
            <Head>
                <title>Elance | Search</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <Header page={"search"}/>
             <div className="bg-black space-x-16 flex lg:px-32 px-5 text-white font-semibold pt-3">
                <h1 onClick={() => setSearchType('F')} className={`cursor-pointer pb-2 px-2 ${searchType === "F" && "border-b-2 border-white"}`}>Freelancers</h1>
                <h1 onClick={() => setSearchType('P')} className={`cursor-pointer pb-2 px-2 ${searchType === "P" && "border-b-2 border-white"}`}>Projects</h1>
            </div>
            <div className={`mx-5 lg:mx-16 mb-10 ${searchType === "P" && "hidden"}`}>
                <FreelancersSearch/>
            </div>
            <div className={`mx-5 lg:mx-16 mb-10 ${searchType === "F" && "hidden"}`}>
                <ProjectsSearch />
            </div>
            <Footer />
        </div>
    )
}

export default Search
