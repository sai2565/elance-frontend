import { getProviders, signIn, useSession } from 'next-auth/client'
import Head from 'next/head'
import { useRouter } from "next/router";

function Signup({ providers }) {
    const router = useRouter();
    const [session] = useSession();

    //redirect to home page
    if(session && session.user) router.push('/CreateProfile');
    
    return (
        <div>
            <Head>
                <title>Elance | Sign Up</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <div>
                <div className="w-full flex items-center mt-20">
                    <div className="flex justify-center w-full items-center">
                        <div className="p-10 rounded-lg space-y-5 border border-[#c4c4c4]">
                            <div className="flex cursor-pointer items-center justify-center">
                                <img
                                className="w-12 h-12"
                                src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"/>
                                <h1 className="italic text-2xl font-extrabold -ml-3 text-[#0e1724]">elance</h1>
                            </div>
                            <div onClick={() => signIn('facebook')} className="bg-[#3F51B5] px-8 py-2 rounded-md flex items-center space-x-5 w-full cursor-pointer">
                                <img loading="lazy" className="w-8 h-8" src="https://img.icons8.com/ios-filled/150/ffffff/facebook-new.png"/>
                                <h1 className="text-white font-semibold">Continue with Facebook</h1>
                            </div>
                            <div onClick={() => signIn('google')} className="bg-[#DE5246] px-8 py-2 rounded-md flex items-center space-x-5 w-full cursor-pointer">
                                <img loading="lazy" className="w-8 h-8" src="https://img.icons8.com/ios-filled/150/ffffff/gmail-new.png"/>
                                <h1 className="text-white font-semibold">Continue with Google</h1>
                            </div>
                            <div onClick={() => signIn('github')} className="bg-[#404040] px-8 py-2 rounded-md flex items-center space-x-5 w-full cursor-pointer">
                                <img loading="lazy" className="w-8 h-8" src="https://img.icons8.com/ios-filled/150/ffffff/github.png"/>
                                <h1 className="text-white font-semibold">Continue with GitHub</h1>
                            </div>
                            <div className="w-full flex items-center py-5">
                                <div className="bg-[#c4c4c4] h-0.5 w-full"/>
                                <h1 className="mx-5 text-[#666666] font-semibold">
                                    OR
                                </h1>
                                <div className="bg-[#c4c4c4] h-0.5 w-full"/>
                            </div>
                            <div className="border-2 border-gray-400 focus-within:border-[#0e1724] rounded-lg px-3 py-1">
                                <input 
                                    className="border-none focus:outline-none text-[#0e1724] text-s flex-grow flex-shrink w-full h-10"
                                    placeholder="Email"/>
                            </div>
                            <div className="flex cursor-pointer items-center justify-center">
                                <button type="submit" className="px-3 py-1 text-white bg-[#29b2fe] font-bold transition duration-150 transform hover:scale-105 rounded-full place-self-center focus:outline-none">Continue</button>
                            </div>
                            <div className="flex items-center justify-center">
                                Already a user want to 
                                <h1 onClick={() => router.push('/auth/signin')} className="mx-1 text-[#29b2fe] cursor-pointer hover:underline">Login</h1>
                                 instead?
                            </div>                               
                            {/* {Object.values(providers).map(provider => (
                                <div key={provider.name}>
                                    <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
                                </div>
                            ))} */}
                        </div>
                    </div>            
                </div>
                
            </div>
        </div>
    )
}

export default Signup
