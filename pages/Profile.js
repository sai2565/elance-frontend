import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
    var favourite = true;
    return (
        <div>
            <Head>
                <title>Elance | Profile</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <Header page={"projectdetails"}/>
            <div className="h-60 bg-[#666666]">
                <h1 className="text-white font-bold text-2xl text-center pt-10">Sai Sharan Beepeta | @sharan2565</h1>
            </div>
            <div className={`mx-8 lg:mx-60 mb-10 -mt-32 space-y-5`}>
                <div className="justify-center bg-white border border-[#c4c4c4] rounded-md">
                <div className="justify-between border-b border-[#c4c4c4] flex items-center p-5">
                        <h1 className="text-black font-bold text-lg">
                            Profile
                        </h1>
                        <img className="w-6 h-6 cursor-pointer transition duration-150 transform hover:scale-110" src={`${favourite ? "https://img.icons8.com/ios-filled/50/29b2fe/like--v1.png" : "https://img.icons8.com/ios/150/29b2fe/like--v1.png"}`} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
