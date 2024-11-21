import React, { useState, useEffect } from 'react';
import axios from 'axios';

    
    interface Repo {
    
    id: number;
    
    name: string;
    
    html_url: string;
    
    }

export function SectionAPIComponents(){


    const [repos, setRepos] = useState<Repo[]>([]);

    const name:string = 'EmanuelfrJunior'

    useEffect(() => {

    const fetchRepos = async () => {

    try {

    const response = await axios.get<Repo[]>(`https://api.github.com/users/${name}/repos`);

    setRepos(response.data);

    } catch (error) {

    console.error('Erro ao buscar repositórios:', error);

    }

    };

    fetchRepos();

    }, []);

    return(
        <>
        <div className='flex mx-auto items-center mt-10 justify-center'>

        <div >
            <div className='font-black mx-auto mt-10 text-5xl ml-10'><span id='CorGold'>Projetos</span></div>
        </div>

        <div className='w-[350px]'></div>

        <div className='bg-yellow-600  w-[40%] h-[500px] p-2'>
            <div className='bg-white w-full h-[480px] p-4'>
                <div>
                <h2 id='CorGold' className=" flex mx-auto items-center justify-center mb-10 text-2xl font-bold mb-4">Repositórios:</h2>
                <ul className="space-y-2">
                {repos.map((repo) => (
                    <li key={repo.id} className="bg-yellow-600 p-3 rounded shadow">

                    <a
                    
                    href={repo.html_url}
                    
                    target="_blank"
                    
                    rel="noopener noreferrer"
                    
                    className="flex text-white font-semiblack mx-auto items-center justify-center hover:underline"
                    
                    >
                    
                    {repo.name}
                    
                    </a>
                    
                    </li>
                    
                    ))}
                    
                    </ul>
                
                
                </div>
            </div>
        </div>
        </div>
        
        </>
    )
}