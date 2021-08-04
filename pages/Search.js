import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FreelancersSearch from '../components/search/FreelancersSearch';
import ProjectsSearch from '../components/search/ProjectsSearch';
import { useSession, getSession, session} from 'next-auth/client';

function Search({projects, freelancers, currentUserProfile, category}) {
    const [searchType, setSearchType] = useState(category);
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
            <div className={`mx-5 lg:mx-16 mb-10 ${searchType === "P" && "hidden"}`}>
                {/* <FreelancersSearch freelancers={freelancers}  /> */}
            </div>
            <div className={`mx-5 lg:mx-16 mb-10 ${searchType === "F" && "hidden"}`}>
                {/* <ProjectsSearch projects={projects}/> */}
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    const category = context.query.category;
    const query = context.query.query;
    const nextAuthSession = await getSession(context);
    // if(nextAuthSession && nextAuthSession.user && nextAuthSession.user.email){
        const email = nextAuthSession.user.email;
        const profile = await fetch("https://elance-be.herokuapp.com/api/v1/users/getUserByEmail",{
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "email": email
                            })
                        });
        const profile_json = await profile.json();
    // }
    const projects = await fetch("https://elance-be.herokuapp.com/api/v1/projects/getAllProjects?page=1&size=9", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        },
                    body: JSON.stringify({ })
                    });
                    //console.log(JSON.stringify(projects));
    const projects_json = await projects.json();
    const freelancers = await fetch("https://elance-be.herokuapp.com/api/v1/users/getAllUsers?page=1&size=9", {
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
            freelancers: freelancers_json.users,
            currentUserProfile : profile_json,
            category: category,
            query: query
        }
    }
}

export default Search
