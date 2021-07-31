import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FreelancersSearch from '../components/search/FreelancersSearch';
import ProjectsSearch from '../components/search/ProjectsSearch';
import { useSession, getSession, session} from 'next-auth/client';

function Search({projects, freelancers}) {
    console.log("Projects " + JSON.stringify(projects.length));
    console.log("Users " + JSON.stringify(freelancers.length));
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
                <FreelancersSearch freelancers={freelancers}/>
            </div>
            <div className={`mx-5 lg:mx-16 mb-10 ${searchType === "F" && "hidden"}`}>
                <ProjectsSearch projects={projects}/>
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    const projects = await fetch("http://elance-be.herokuapp.com/api/projects/getAllProjects?page=1&size=9", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        },
                    body: JSON.stringify({ })
                    });
                    //console.log(JSON.stringify(projects));
    const projects_json = await projects.json();
    const freelancers = await fetch("http://elance-be.herokuapp.com/api/users/getAllUsers?page=1&size=9", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        },
                    body: JSON.stringify({
                        "userType":"freelancer"
                     })
                    });
                    //console.log(JSON.stringify(projects));
    const freelancers_json = await freelancers.json();     
    return {
        props: {
            projects: projects_json.projects,
            freelancers: freelancers_json.users
        }
    }
}

export default Search
