import { HeaderComponents } from "../components/Header";
import { SectionAPIComponents } from "../components/SectionApiProject";

export function PageProject(){

    return(
        <>
        <div className="bg-gray-900 w-full h-screen">
            <div><HeaderComponents/></div>
            <div><SectionAPIComponents/></div>
        </div>
        </>
    )
}