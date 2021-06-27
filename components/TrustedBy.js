export default function TrustedBy() {
    return (
        <div className="w-full bg-[#fafafa] h-24">
           <div className="grid grid-cols-10 place-items-center">
               <div className="col-span-1"/>
               <div className="col-span-1"/>
               <h1 className="col-span-1 text-[#c2c2c5] text-bold hidden md:-mt-5 md:flex">Trusted by :</h1>
               <img className="col-span-1 p-5 md:-mt-5" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.2eb3efa.png"/>
               <img className="col-span-1 p-5 md:-mt-5" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.b5c24c4.png" />
               <img className="col-span-1 p-5 md:-mt-5" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.02746a2.png" />
               <img className="col-span-1 p-5 md:-mt-5" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.259884d.png" />
               <img className="col-span-1 p-5 md:-mt-5 hidden md:flex" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.e48e2b0.png" />
               <div className="col-span-1"/>
               <div className="col-span-1"/>
           </div>
        </div>
    )
}
