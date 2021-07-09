import { useSession } from 'next-auth/client';

function HeaderOption({optionId, optionName, optionImage, isSelected, isVisible}) {
    //next auth session
    const [session] = useSession();
    return (
        <div className={`${(!session || !session.user || !isVisible) && "hidden"}`}>
            <div className={`hover:border-b-4 hover:pb-1 hover:border-[#29b2fe] lg:hidden cursor-pointer ${isSelected && "border-b-4 pb-1 border-[#29b2fe]"}`}>
                <img className={`h-7 w-7`} src={optionImage}/>
            </div>
            <h1 className={`cursor-pointer hover:text-[#29b2fe] hidden lg:flex font-semibold ${isSelected && "text-[#29b2fe]"}`}>
                {optionName}
            </h1>
        </div>
    )
}

export default HeaderOption
