function ApplicationItem() {
    var rating = 4;
    return (
        <div className="p-3 flex justify-between">
            <div className="space-y-2">
                <h1 className="font-semibold text-[#29b2fe] underline cursor-pointer hover:text-[#239ada]">
                    Sai Sharan Beepeta | @sharan2565 
                </h1>
                <div className="space-x-0.5 flex">
                    <img className={`h-4 w-4 ${rating < 1 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                    <img className={`h-4 w-4 ${rating < 2 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                    <img className={`h-4 w-4 ${rating < 3 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                    <img className={`h-4 w-4 ${rating < 4 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                    <img className={`h-4 w-4 ${rating < 5 && "hidden"}`} src="https://img.icons8.com/fluent/120/000000/star.png"/>
                    <h1 className="text-xs">
                        ( 20 ratings and 10 reviews )
                    </h1>
                </div>
                <div className="space-y-3">
                    <h1>
                        This is my bid message I would love to work omn your project and my experienc esuites weel for your requirements.
                        This is my bid message I would love to work omn your project and my experienc esuites weel for your requirements.
                    </h1>
                    <div className="flex space-x-5">
                        <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/150/F1C40F/money--v1.png"/>
                        <h1>
                        ₹ 700 per Hour | ₹ 1,25, 000 for complete project
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationItem
