export default function TrustedBy() {
    return (
        <div className="w-full bg-[#fafafa] h-24 flex items-center mt-5 lg:mt-20">
            <div className="flex justify-center w-full items-center space-x-10">
                <h1 className="col-span-1 text-[#c2c2c5] font-bold hidden md:flex">Trusted by :</h1>
                <img className="h-10 w-10" src="https://img.icons8.com/ios-glyphs/50/000000/facebook-new.png"/>
                <img className="h-10 w-10" src="https://img.icons8.com/ios-glyphs/50/000000/google-logo.png"/>
                <img className="h-10 w-10 hidden md:flex" src="https://img.icons8.com/ios-filled/50/000000/oracle-logo.png"/>
                <img className="h-10 w-10" src="https://img.icons8.com/ios-filled/50/000000/sap.png"/>
            </div>
           {/* <div className="grid grid-cols-10 content-center">
               <div className="col-span-1"/>
               <div className="col-span-1"/>
               
               <img className="col-span-1" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.2eb3efa.png"/>
               <img className="col-span-1" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.b5c24c4.png" />
               <img className="col-span-1" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.02746a2.png" />
               <img className="col-span-1" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.259884d.png" />
               <img className="col-span-1 hidden md:flex" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.e48e2b0.png" />
               <div className="col-span-1"/>
               <div className="col-span-1"/>
           </div> */}
        </div>
    )
}
