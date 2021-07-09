import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeOptions from '../components/homepage/HomeOptions';
import Head from 'next/head';
import { useSession, getSession} from 'next-auth/client';
import { useRouter } from "next/router";

function HomePage() {
    const [session] = useSession();
    const usertype = "C";

    return (
        <div >
            <Head>
                <title>Elance | Home</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <Header page={"home"}/>
            <div className={`mx-5 lg:mx-32 p-5`}>
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    <div className="flex items-end space-x-3 col-span-1 lg:col-span-3">
                        <h1 className="text-lg font-bold text-[#4c4c4c]">{`Welcome, ${session && session.user ? session.user.name : "Guest User"}`}</h1>
                        <img className="animate-wave w-10 h-10" src="https://threejs-journey.xyz/assets/images/hand-emoji-100x100.png"></img>
                    </div>
                    <div className="lg:col-span-1 items-center place-items-center flex justify-center">
                        <h1 className={`bg-yellow-400 px-5 py-2 text-white font-bold rounded-md cursor-pointer text-center hover:bg-yellow-500  ${ usertype==="C" ? "hidden lg:flex" : "hidden"}`}>
                            Post a Project
                        </h1>
                    </div>
                </div>
                              
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        <div className="col-span-1 lg:col-span-3"> 

                        </div>
                        <div className="hidden lg:col-span-1 lg:flex">
                            <HomeOptions />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer className=""/> */}
        </div>
        
    )
}

export default HomePage