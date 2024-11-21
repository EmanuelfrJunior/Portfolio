export function SectionComponents(){

    return(
        <>
        <div className="bg-gray-900 w-full h-[100px] text-gray-900">a</div>

        <div className="flex justify-between pl-20 pr-20">
            <div>
            <div className=" text-white font-black">
                 <span className="text-2xl">Me Chamo</span> <br/>
                 <span id="CorGold" className="text-5xl">Emanuel Luna</span>
            </div>

            <div className=" mt-3 font-black text-gray-300">
                Desenvolvedor <span id="CorGold">Full-Stack</span>, com foco em <span id="CorGold">Back-End</span><br />
                utilizando as tecnologias <span id="CorGold">Java, Node.Js e MySQL</span>. <br />
                No <span id="CorGold">Front-End</span> tenho como tecnologias / prática a <br />
                liguagem <span id="CorGold">TypeScript, React.Js e Tailwind.Css</span>.
            </div>
            </div>

            <div className="bg-white w-[350px] h-[410px] p-1 rounded-lg">
            <div className="bg-yellow-500 w-70 h-[400px] rounded-lg pl-10  ">
                <img className="w-full h-[400px]" src="src/assets/iam.png" alt="" />
            </div>
            </div>
        </div>
        </>
    )
}