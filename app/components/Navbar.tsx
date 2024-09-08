"use client"

import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"


export default function Navbar(){


    return(
        <div className="bg-bl flex justify-evenly gap-2">


            <div className="flex flex-row bg-green-800 rounded-3xl">
            <Input className=" lg:w-[40vw]"/>
            <Button className=" bg-green-800 p-2 rounded-3xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </Button>
            </div>
        </div>
    )}