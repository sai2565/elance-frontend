import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FreelancersSearch from '../components/search/FreelancersSearch';
import ProjectsSearch from '../components/search/ProjectsSearch';
import { useSession, getSession, session} from 'next-auth/client';

function Search({data, query, category, subcategory}) {
    const [searchType, setSearchType] = useState("freelancers");
    console.log(data.users);
    return (
        <div className="">
            <Head>
                <title>Elance | Search</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <Header page={"search"}/>
             <div className="bg-black space-x-16 flex lg:px-32 px-5 text-white font-semibold pt-3">
                <h1 onClick={() => setSearchType('freelancers')} className={`cursor-pointer pb-2 px-2 ${searchType === "freelancers" && "border-b-2 border-white"}`}>Freelancers</h1>
                <h1 onClick={() => setSearchType('projects')} className={`cursor-pointer pb-2 px-2 ${searchType === "projects" && "border-b-2 border-white"}`}>Projects</h1>
            </div>
            <div className={`mx-5 lg:mx-16 mb-10 ${searchType === "projects" && "hidden"}`}>
                <FreelancersSearch freelancers={data.users} pages={data.totalUserPages} />
            </div>
            <div className={`mx-5 lg:mx-16 mb-10 ${searchType === "freelancers" && "hidden"}`}>
                <ProjectsSearch projects={data.projects} pages={data.totalProjectPages}/>
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    const query = context.query.query;
    const category = context.query.category;
    const subcategory = context.query.subcategory;
    // if(!query)
    // var searchString = category ? category : "";
    // searchString = query ? searchString + " " + query : searchString;
    // searchString = subcategory ? searchString + " " + subcategory : searchString;
    // if(searchString.length > 1){
        const skill = [
            "React",
            "Next",
            "Mongo",
            "Firebase",
            "GraphQL",
            "Redux",
            "UI/UX",
            "Figma",
            "NextJs",
            "NodeJS",
            "MongoDB",
            "Java",
            "Microservices ",
            "REST API",
            "Cloud-Native",
            "Kubernetes",
            "container management",
            "REST APIs",
            "SQL database",
            "Relational database",
            "TypeScript",
            "HTML",
            "CSS",
            "Capacitor",
            "NPM",
            "Git",
            "GitHub",
            "Node.js",
            "Express",
            "React Native",
            "Capacitor plugins.",
            "Cross platform - Flutter 2.0",
            "KMM CICD - KTLINT",
            "Code Generator",
            "Building Design System",
            "Hello Project by Rajeshwar",
            "React",
            "Next",
            "MongoDB",
            "NodeJs",
            "Mangoose",
            "Figma",
            " Nodejs",
            "Redux",
            "NextJs",
            "tailwind css",
            "Firebase authentication",
            "GCP",
            "Stripe API",
            "fddsgdrs",
            "risk",
            "analysis"
        ].join(" ");
        const res = await fetch("https://elance-be.herokuapp.com/api/v1/search", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "searchString" : query || (category && subcategory && category+" "+subcategory) || category || skill
                        })
            });
        const res_json = await res.json();
        return {
            props: {
                data: res_json
                // query: query,
                // category: category,
                // subcategory: subcategory
            }
        } 
    // }
    // return {
    //     props: {
    //         query: query,
    //         category: category,
    //         subcategory: subcategory
    //     }
    // }
}

export default Search
