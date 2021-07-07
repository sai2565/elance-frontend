function Footer() {
    return (
        <div className="bg-black w-full">
            <div className="mx-5 mt-5 lg:mx-32 items-center grid grid-cols-3 py-5 place-items-center">
                <div className="flex cursor-pointer items-center">
                    <img
                    className="w-12 h-12"
                    src="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"/>
                    <h1 className="italic text-xl font-extrabold -ml-3 text-white">elance</h1>
                </div>
                <div className="flex items-center space-x-3">
                    <img className="w-8 h-8" src="https://img.icons8.com/ios/100/ffffff/globe.png"/>
                    <h1 className="text-white">Asia, India</h1>
                </div>
                <div className="flex items-center space-x-3">
                    <img className="w-8 h-8 cursor-pointer" src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"/>
                    <img className="w-8 h-8 cursor-pointer" src="https://img.icons8.com/ios-filled/50/ffffff/linkedin-circled--v1.png"/>
                    <img className="w-8 h-8 cursor-pointer" src="https://img.icons8.com/ios-filled/50/ffffff/github.png"/>
                </div>
            </div>
        </div>
    )
}

export default Footer
