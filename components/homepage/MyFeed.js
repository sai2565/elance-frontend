import {useSession} from 'next-auth/client'
import FreelancerFeedItem from "../datarepresentation/FreelancerFeedItem";

function MyFeed() {
    const [session] = useSession();
    const profilepic = (session && session.user && session.user.image) ? session.user.image : "https://img.icons8.com/office/80/000000/user.png" ;
    return (
        <div className="space-y-10">
            <h1 className="text-xl text-black font-bold">My Feed</h1>
            <div className="h-full border border-[#c4c4c4] rounded-md divide-y divide-[#c4c4c4]">
                <FreelancerFeedItem profilepic={profilepic}/>
                <FreelancerFeedItem profilepic={profilepic}/>
                <FreelancerFeedItem profilepic={profilepic}/>
                <FreelancerFeedItem profilepic={profilepic}/>
                <FreelancerFeedItem profilepic={profilepic}/>
            </div>
        </div>
    )
}

export default MyFeed
