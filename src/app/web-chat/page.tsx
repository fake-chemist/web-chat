'use client'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useChat } from "ai/react"
import { useRef, useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'

const WebChatPage = () => {

    const [web_url, setWebUrl] = useState('');

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: 'api/webchat',
        body: { web_url: web_url },
        onError: (e) => {
            console.log(e)
        }
    })
    
    const chatParent = useRef<HTMLUListElement>(null)

    useEffect(() => {
        const domNode = chatParent.current
        if (domNode) {
            domNode.scrollTop = domNode.scrollHeight
        }
    })
      React.useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
      messageContainer.scrollTo({
        top: messageContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

    return (
        <main className="w-screen min-h-screen bg-gradient-to-r from-slate-50 to-emerald-50">

            <header className="flex flex-col justify-center items-center p-4 pt-15 w-full max-w-3xl mx-auto">
                <Link href="/"> 
                    <h1 className="text-4xl font-bold"> Help Devs </h1>
                </Link>
                <p className="text-sm text-center pt-3">Paste a link to documentation here</p>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <form className='items-center w-full pt-5 pb-2'>
                        <Input type="url" placeholder="WebsiteUrl" value={web_url} onChange={e => setWebUrl(e.target.value)} className= "border-2 border-color-black" />
                    </form>
                </div>
            </header>

            <section className="container px-0 pb-6 flex flex-col flex-grow gap-4 mx-auto max-w-3xl h-[75vh] ">
                <ul ref={chatParent} className="h-full p-4 rounded-lg overflow-y-auto flex flex-col gap-4">
                    {messages.map((m, index) => (
                        <div key={index} className="my-2">
                            {m.role === 'user' ? (
                                <li key={m.id} className="flex flex-row-reverse">
                                    <div className="rounded-xl p-4 bg-white shadow-md flex">
                                        <p className="text-black">{m.content}</p>
                                    </div>
                                </li>
                            ) : (
                                <li key={m.id} className="flex flex-row">
                                    <div className="rounded-xl p-4 bg-gray-200 shadow-md flex w-3/4">
                                        <p className="text-black">{m.content}</p>
                                    </div>
                                </li>
                            )}
                        </div>
                    ))}
                </ul>
            </section>
            
            <section className="p-4">
                <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mx-auto items-center">
                
                    <Input className="flex-1 min-h-[50px] #fffffe" placeholder="Type your question here..." type="text" value={input} onChange={handleInputChange} />
                    <Button className="ml-2" type="submit">
                        Submit
                    </Button>
                </form>
            </section>
        </main>
    )}

export default WebChatPage;