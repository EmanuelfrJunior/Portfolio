import { useState } from "react"
import emailjs  from "@emailjs/browser";

export function SectionEmailComponents(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


        function senEmail(e){
            e.preventDefault();

            if (name === '' || email === '' || message ==='') {
                alert("Preencha todos os campos!");
                return;
            }
            const Key = "JZriN2qNrsQdN6-rj"
            const emailService = "service_2zj0s0e"
            const emailTemplates = "template_kz0p3uj"
            const templateParams = { from_name: name, message: message, email: email}

            emailjs.send(emailService, emailTemplates, templateParams, Key)
            .then((response) => {
                alert("Email Enviado")
                setName('')
                setEmail('')
                setMessage('')
            }, (error) => {
                console.log("Error", error)
            } )
        }

    return(
        <>
        <div className="bg-gray-900 w-full h-[100px] text-gray-900">a</div>
        <div>
            <div><span id="CorGold" className="flex mx-auto items-center justify-center font-black text-3xl">E-Mail</span></div>
            <div className="h-10"></div>
            <div>
            <form onSubmit={senEmail}>
                <div className="flex mx-auto items-center justify-center bg-yellow-600 w-[40%] h-[300px] p-2">
                    <div className="bg-white w-[100%] h-[100%] p-2">

                        <div className="flex w-full ">

                            <div className="w-[50%]">
                                
                                <input type="text" className="w-full border border-yellow-600 rounded-lg" name="" placeholder="Digite seu Nome" onChange={(e) => setName(e.target.value)} value={name} id="" />
                               
                            </div>
                                <div className="w-10 text-white">|</div>
                            <div className="w-[50%] h-[50px]">
                                
                                <input type="text" className="w-full border border-yellow-600 rounded-lg" name="" placeholder="Digite seu E-Mail" onChange={(e) => setEmail(e.target.value)} value={email} id="" />
                                
                            </div>
                        </div>

                        <div>
                            
                                <textarea className="w-full h-[220px] border border-yellow-600 rounded-lg" placeholder="Digite sua Mensagem" onChange={(e) => setMessage(e.target.value)} value={message} name="" id=""></textarea>
                            
                        </div>


                    </div>
                </div>
                <div className="h-5"></div>
                <div className="flex mx-auto items-center justify-center"><button className="bg-yellow-600 w-40 h-15 text-white rounded-lg" type="submit">Enviar</button></div>
                </form>
            </div>
            
        </div>
        </>
    )
}