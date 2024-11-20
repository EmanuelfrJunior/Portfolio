import { useNavigate } from "react-router-dom";

export function HeaderComponents(){
    const navigate = useNavigate();

    function NavegarProject(){
        navigate(`/Projetos`)
    }
    function NavegarAll(){
        navigate(`/`)
    }
    function NavegarEmail(){
        navigate(`/Email`)
    }
    return(
        <>
        <div className=" text-gray-900">.</div>
       <div id="CorGold" className="bg-gray-900 mr-4 ml-4 mt-2 font-black justify-between flex">
       
       <div className="ml-5 text-4xl">
        <span>ᒪᑌᑎᗩ</span>
       </div>

        <div className="flex gap-4 font-blank text-2xl">
            <div><a onClick={NavegarAll} href="">Geral</a></div>
            <div><a onClick={NavegarProject} href="">Projetos</a></div>
            <div><a onClick={NavegarEmail} href=""><img className="w-8 h-8" src="src/assets/Email.png" alt="Email" /></a></div>
            <div><a href="https://github.com/EmanuelfrJunior" target="_blank" rel="noopener noreferrer"><img className="w-8 h-8" src="src/assets/GitHub.png" alt="GitHub" /></a></div>
        </div>
       </div>
        </>
    )

    
}