// "use client"
// import React, { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { useMutation } from '@tanstack/react-query'
// import axios from 'axios'

// export function WebUrlLoader() {
//     const [web_url, setWebUrl] = useState('');
//     const {mutate} = useMutation({
//         mutationFn: async ({
//             web_url
//         }:{
//             web_url:string
//         }) => {
//             const response = await axios.post('/api/webchat', 
//             {web_url});
//             return response.data;
//         },
//         });
    
//         const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
//             e.preventDefault();
//             const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

//             if (urlRegex.test(web_url)) {
//                 mutate({ web_url: web_url }, {
//                     onSuccess: (data) => {
//                         console.log(data);
//                     },
//                     onError: (error) => {
//                         console.log(error);
//                     }
//                 });
//             } else {
//                 console.log("Invalid URL");
//             }
//         }


//     return (
//     <div className="flex w-full max-w-sm items-center space-x-2">
//         <form onSubmit={handleSubmit} className='flex w-full items-center space-x-2'>
//             <Input type="url" placeholder="WebsiteUrl" value={web_url} onChange={e => setWebUrl(e.target.value)} />
//             <Button type="submit"> Ask </Button>
//         </form>
//     </div>
//   )
// }


import React from 'react';

import { Input } from "@/components/ui/input";

interface WebUrlLoaderProps {

  value: string;

  onInputChange: (value: string) => void;

}

const WebUrlLoader: React.FC<WebUrlLoaderProps> = ({ value, onInputChange }) => {

  return (

    <Input type="url" placeholder="Website URL" value={value} onChange={(e) => onInputChange(e.target.value)} />

  );
};


export default WebUrlLoader