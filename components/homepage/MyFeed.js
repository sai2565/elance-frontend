import {useSession} from 'next-auth/client'
import FreelancerFeedItem from "../datarepresentation/FreelancerFeedItem";

function MyFeed({profile, slider_data}) {
    const [session] = useSession();
    const userType = profile.user[0].userType;
    const applications = profile.user[0].applications;
    const postings = slider_data.projects;
    console.log(applications);
    console.log(postings);
    const profilepic = (session && session.user && session.user.image) ? session.user.image : "https://img.icons8.com/office/80/000000/user.png" ;
    return (
        <div className="space-y-10">
            <h1 className="text-xl text-black font-bold">My Feed</h1>
            <div className="h-full border border-[#c4c4c4] rounded-md divide-y divide-[#c4c4c4]">
                
                {/* <FreelancerFeedItem profilepic={profilepic}/>
                <FreelancerFeedItem profilepic={profilepic}/>
                <FreelancerFeedItem profilepic={profilepic}/>
                <FreelancerFeedItem profilepic={profilepic}/>
                <FreelancerFeedItem profilepic={profilepic}/> */}
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const feed = await fetch("http://elance-be.herokuapp.com/api/users/getUserByEmail",{
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "email": email
                            })
                        });
}

export default MyFeed
