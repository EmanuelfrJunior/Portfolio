import { HeaderComponents } from "../components/Header";
import { SectionComponents } from "../components/Section";
import { SectionEmailComponents } from "../components/SectionEmail";

export function PageEmail(){

    return(
        <>
        <div className="bg-gray-900 w-full h-screen">
            <div><HeaderComponents/></div>
            <div><SectionEmailComponents/></div>
        </div>
        </>
    )
}