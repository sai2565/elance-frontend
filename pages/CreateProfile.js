import Head from 'next/head'
import {useSession} from 'next-auth/client';
import { useRouter } from 'next/router';

function CreateProfile() {
    const [session] = useSession();
    const router = useRouter();
    const username = session && session.user ? session.user.name : "";
    var f_name, l_name;
    if(username.includes(" ")){
        var names = username.split(" ");;
        f_name = names[0];
        l_name = names[1];
    }
    else{
        f_name = username;
        l_name = "";
    }
    return (
        <div>
            <Head>
                <title>Elance | Create Profile</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            {/* header */}
            <div className="border-b border-gray-200">
               
                <div className="lg:mx-32 mx-5 my-3">
                    <div className="flex cursor-pointer items-center">
                        <img
                            className="w-12 h-12"
                            src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"/>
                        <h1 className="italic text-xl font-extrabold -ml-3 text-[#0e1724]">elance</h1>
                    </div>
                </div>
                
            </div>
            {/* header */}
            <div>
                <div className="w-full flex items-center my-10">
                    <div className="flex justify-center w-full items-center">
                        <div className="px-3 lg:px-10 py-5 rounded-lg space-y-5 border border-[#c4c4c4]">
                            <div className="space-y-2"> 
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="text-2xl font-bold ">Complete your free account setup</h1>
                                </div>
                                <div className="flex cursor-pointer items-center justify-center">
                                    <h1 className="text-xl">pesto.elance@gmail.com</h1>
                                </div>
                            </div>
                            <div className="space-y-5 lg:flex lg:space-x-3 lg:space-y-0">
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-glyphs/90/666666/user--v1.png"/>
                                    <input
                                        type="text"
                                        defaultValue={f_name}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="First Name"/>    
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/ios-glyphs/90/666666/user--v1.png"/>
                                    <input
                                        type="text"
                                        defaultValue={l_name}
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Last Name"/>    
                                </div>
                            </div>   
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-glyphs/90/666666/email.png"/>
                                <input
                                    type="text"
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Set a user name"/>    
                            </div>
                            <div className="space-y-5 hidden lg:space-x-3 lg:space-y-0">
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/metro/104/666666/password.png"/>
                                    <input
                                        type="password"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Set a password"/>    
                                </div>
                                <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-3">
                                    <img className="w-6 h-6" src="https://img.icons8.com/metro/104/666666/password.png"/>
                                    <input
                                        type="password"
                                        className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                        placeholder="Re-enter your password"/>    
                                </div>
                            </div>
                            <div className="flex border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1 items-center space-x-5">
                                <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/666666/world.png"/>
                                {/* To-Do replace with country select list <select></select> */}
                                <input
                                    type="text"
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Type your country name"/>    
                            </div>
                            <div className="flex cursor-pointer items-center justify-center">
                                <h1 className="font-extrabold -ml-3 text-[#0e1724]">I want to </h1>
                            </div>

                            <div className="space-y-5 lg:flex lg:space-y-0 ">
                                <div  className="hover:bg-[#29b2fe] hover:border-[#29b2fe]  hover:font-semibold px-8 py-2 border-2 border-gray-400 rounded-md lg:rounded-l-md lg:rounded-r-none flex items-center space-x-5 w-full cursor-pointer text-[#666666] hover:text-white">
                                    <h1>Hire for a project</h1>
                                </div>
                                <div className="hover:bg-[#29b2fe] hover:border-[#29b2fe] hover:font-semibold border-2 border-gray-400 px-8 py-2 rounded-md lg:rounded-r-md lg:rounded-l-none flex items-center space-x-5 w-full cursor-pointer text-[#666666] hover:text-white">
                                    <h1>Work as a freelancer</h1>
                                </div>
                            </div>  
                            <div className="flex cursor-pointer items-center justify-center">
                                <button onClick={() => router.push('/HomePage')} type="submit" className="px-6 py-3 text-white bg-[#29b2fe] hover:bg-[#41a8e0] rounded-md place-self-center focus:outline-none text-sm font-semibold">Create My Account</button>
                            </div>                            
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    )
}

export default CreateProfile
