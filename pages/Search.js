import Head from 'next/head';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FreelancersSearch from '../components/search/FreelancersSearch';
import ProjectsSearch from '../components/search/ProjectsSearch';
import { useSession, getSession, session} from 'next-auth/client';
import { useRouter } from 'next/router';

function Search({data}) {
    const router = useRouter();
    const [searchType, setSearchType] = useState("freelancers");  
    function handleTabChange(tabname){
        if(router.query.category !== tabname){
            router.query.category = tabname;
            var queries = []   
            for (const [key, value] of Object.entries(router.query)) {
                console.log(`${key}=${value}`);
                queries.push(`${key}=${value}`);
            }
            router.push(`/Search?${queries.join('&')}`)
        }
        
    }
    return (
        <div className="">
            <Head>
                <title>Elance | Search</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <Header page={"search"}/>
             <div className="bg-black space-x-16 flex lg:px-32 px-5 text-white font-semibold pt-3">
                <h1 onClick={() => handleTabChange("freelancers")} className={`cursor-pointer pb-2 px-2 ${router.query.category !== "projects" && "border-b-2 border-white"}`}>Freelancers</h1>
                <h1 onClick={() => handleTabChange('projects')} className={`cursor-pointer pb-2 px-2 ${router.query.category === "projects" && "border-b-2 border-white"}`}>Projects</h1>
            </div>
            <div className={`mx-5 lg:mx-16 mb-10 ${router.query.category === "projects" && "hidden"}`}>
                <FreelancersSearch freelancers={data.users} totalpages={data.totalUserPages} currentpage={data.page} />
            </div>
            <div className={`mx-5 lg:mx-16 mb-10 ${router.query.category !== "projects" && "hidden"}`}>
                <ProjectsSearch projects={data.projects} totalpages={data.totalProjectPages} currentpage={data.page}/>
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    const query = context.query.query;
    const category = context.query.category;
    const subcategory = context.query.subcategory;
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
        const res = await fetch("https://elance-be.herokuapp.com/api/v1/search?page=1&size=9", {
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
            }
        } 
}

export default Search
