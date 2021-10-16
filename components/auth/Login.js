import { getProviders, signIn, useSession } from 'next-auth/client'
import Head from 'next/head'
import { useRouter } from "next/router";
import { useState } from 'react';
import { Dialog } from '@material-ui/core';

function Login({ providers }) {
    const router = useRouter();
    const [session] = useSession();
    const [loading, setLoading] = useState(false);

    //redirect to home page
    if(session && session.user) router.push('/HomePage');

    function handleGoogleSIgnIn(){
        setLoading(true);
        signIn('google');
    }
    
    return (
        <div >
            <Head>
                <title>Elance | Log In</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            {
                !loading &&
            <div>
                <div className="w-full flex items-center my-10">
                    <div className="flex justify-center w-full items-center">
                        <div className="p-5 lg:p-10 rounded-lg space-y-5 border border-[#c4c4c4]">
                            <div className="flex cursor-pointer items-center justify-center">
                                <img
                                className="w-12 h-12"
                                src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"/>
                                <h1 className="italic text-2xl font-extrabold -ml-3 text-[#0e1724]">elance</h1>
                            </div>
                            <div onClick={() => signIn('facebook')} className="bg-[#3F51B5] px-8 py-2 rounded-md flex items-center space-x-5 w-full cursor-pointer">
                                <img loading="lazy" className="w-8 h-8" src="https://img.icons8.com/ios-filled/150/ffffff/facebook-new.png"/>
                                <h1 className="text-white text-sm lg:text-base font-semibold">Continue with Facebook</h1>
                            </div>
                            <div onClick={handleGoogleSIgnIn} className="bg-[#DE5246] px-8 py-2 rounded-md flex items-center space-x-5 w-full cursor-pointer">
                                <img loading="lazy" className="w-8 h-8" src="https://img.icons8.com/ios-filled/150/ffffff/gmail-new.png"/>
                                <h1 className="text-white text-sm lg:text-base font-semibold">Continue with Google</h1>
                            </div>
                            <div onClick={() => signIn('github')} className="bg-[#404040] px-8 py-2 rounded-md flex items-center space-x-5 w-full cursor-pointer">
                                <img loading="lazy" className="w-8 h-8" src="https://img.icons8.com/ios-filled/150/ffffff/github.png"/>
                                <h1 className="text-white text-sm lg:text-base font-semibold">Continue with GitHub</h1>
                            </div>
                            <div className="w-full flex items-center py-5">
                                <div className="bg-[#c4c4c4] h-0.5 w-full"/>
                                <h1 className="mx-5 text-[#666666] font-semibold">
                                    OR
                                </h1>
                                <div className="bg-[#c4c4c4] h-0.5 w-full"/>
                            </div>
                            <div className="flex cursor-pointer items-center justify-center">
                                <button 
                                    className="px-3 py-1 text-white font-bold bg-[#29b2fe] transition duration-150 transform hover:scale-105 rounded-full place-self-center focus:outline-none"
                                    onClick={() => signIn('testEmail', {
                                        email: "pestoelance@gmail.com"
                                    })}
                                >Test LogIn as Client</button>
                            </div>

                            <div className="flex cursor-pointer items-center justify-center">
                                <button 
                                    className="px-3 py-1 text-white font-bold bg-[#29b2fe] transition duration-150 transform hover:scale-105 rounded-full place-self-center focus:outline-none"
                                    onClick={() => signIn('testEmail', {
                                        email: "krr1028@gmail.com"
                                    })}
                                >Test LogIn as Freelancer</button>
                            </div>
                            {/*<div className="border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1">
                                <input
                                    type="email"
                                    className="border-none focus:outline-none text-[#0e1724] text-sm lg:text-base flex-grow flex-shrink w-full h-10"
                                    placeholder="Email"/>    
                            </div>
                            <div className="border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1">
                                <input
                                    type="password"
                                    className="border-none focus:outline-none text-[#0e1724] text-sm lg:text-base flex-grow flex-shrink w-full h-10"
                                    placeholder="Password"/>    
                            </div>
                            <div className="flex cursor-pointer items-center justify-center">
                                <button type="submit" className="px-3 py-1 text-white font-bold bg-[#29b2fe] transition duration-150 transform hover:scale-105 rounded-full place-self-center focus:outline-none">Continue</button>
                            </div> */}
                            <div className="flex items-center justify-center">
                                New user want to 
                                <h1 onClick={() => router.push('/auth/signup')} className="mx-1 text-[#29b2fe] cursor-pointer hover:underline">Signup</h1>
                                 instead?
                            </div>                               
                             {/* {Object.values(providers).map(provider => (
                                 //provider_ids.push(provider.id);
                                <div key={provider.name}>
                                     <button onClick={() => signIn(provider.id)}>Sign in with {provider.id}</button>
                                </div>
                            ))} */}
                        </div>
                    </div>            
                </div>
                
            </div>
            }
            {
            loading &&
            <Dialog
                open={loading}
                className={`${loading ? "" : "hidden"}`}
                >
                <div className="animate-pulse flex items-center justify-center p-5">
                    <img
                        className="w-12 h-12"
                        src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"/>
                    <h1 className="italic text-xl font-extrabold -ml-3 text-[#0e1724] hidden lg:flex">elance</h1>    
                </div>
            </Dialog>}
        </div>
    )
}

export default Login

