"use client"

import axios from "axios";
import { Cross, CrossIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'


import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

export default function GreenNav({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpe, setIsOpe] = React.useState(false);
    //  const {data , isLoading} = useSWR("/api/login",fetcher)
    const [logout,isLogout] =useState(false)
   
    const toggleDrawer = () => {
        setIsOpen(prevState => !prevState);
    };

    const router = useRouter()
    const Log=async()=>{
        isLogout(true)
        try{
        const response = await axios.post('/api/logout')
        if(response.data.message ==  "Logged Out!"){
            toast({
                title:"Successful",
                description:"Logged out Succesfully",
            })
            location.reload()
        }   
        
    }catch(error){
        toast({
            title:"Error",
           description: "Failed to log out",
        })
    }finally{
        isLogout(false)
    }
        }

        const Logi=async()=>{
            isLogout(true)
            try{
            const response = await axios.post('/api/logout')
            if(response.data.message ==  "Logged Out!"){
                toast({
                    title:"Successful",
                    description:"Logged out Succesfully",
                })
                location.reload()
            }   
            
        }catch(error){
            toast({
                title:"Error",
               description: "Failed to log out",
            })
        }finally{
            isLogout(false)
        }
            }
    const [activeSection, setActiveSection] = useState("");
    
    const pathname = usePathname()
    useEffect(() => {
      // Extract the current route from the pathname
      
      setActiveSection(pathname);
    }, [pathname]);
    const toggleDrawe = () => {
        setIsOpe(prevState => !prevState);
    };

    
  
  const searchParams = useSearchParams();


  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

    const handleCheckboxChange = (supplier: string) => (e:any) => {
 
        router.push(pathname + "?" + createQueryString("filter", supplier));
  
    };



    return (
        <div className="flex flex-col h-screen">

            <div className="bg-greenNav p-2 flex items-center justify-between">
                {/*<button onClick={toggleDrawer}>*/}
                {/*    <CiMenuFries className="text-white" />*/}
                {/*</button>*/}
                <div className="flex items-center gap-10">
                    <h4 className=" text-white text-[12px]">All Categories</h4>
                    <Link href="/order" className=" text-white text-[12px]">Order</Link>
                    
                    <h4 className=" text-white text-[12px]">Report</h4>
                
                    {/* <h4 className="font-bold text-white">Sell</h4> */}
                </div>
                <div className="flex items-center gap-2 ml-auto">
                    {/* <h4 className=" text-white text-[12px]">Driver</h4> */}
                    <Link href="/supplier" className=" text-white text-[12px]">Suppliers</Link>
                    {/* <h4 className=" text-white text-[12px]">Users</h4> */}
                </div>

            </div>


            <div className=" p-2 flex items-center justify-between">

                <div className="flex items-center gap-10">
                  {/* Categories */}
                   {/* {activeSection} */}
                   {
          activeSection === "/order" &&(
            <p>Orders</p>
          ) }

{
          activeSection === "/supplier" &&(
            <p>Suppliers</p>
          ) }

{
          activeSection === "/" &&(
            <p>Home</p>
          ) }
                </div>


            </div>


            <div className="flex flex-grow">

                <>
                    {data?.role === "ADMIN" && (
                        <div className="p-2 flex flex-col gap-2 hidden md:block lg:block md:w-1/4 lg:w-1/4 shadow-lg">
                            <section className="flex flex-col gap-2">
                                <Link className={`flex flex-1 flex-col items-center justify-center  ${
                                    activeSection === "/adupload" ? "bg-blue-500 rounded-full p-2" : ""}`}
                                      href="/adupload">

                                    Upload Products
                                </Link>

                                <Link className={`flex flex-1 flex-col items-center justify-center  ${
                                    activeSection === "/adcategory" ? "bg-blue-500 rounded-full p-2" : ""}`}
                                      href="/adcategory">

                                    Upload Category
                                </Link>

                                <button onClick={Log}>Logout</button>
                            </section>
                        </div>
                    )}

                    {data?.role === "USER" && (
                        <div className="p-2 flex flex-col gap-2 hidden md:block lg:block md:w-1/4 lg:w-1/4 shadow-lg">
                            <section className="flex flex-col gap-2">
                                <Link className={`flex flex-1 flex-col items-center justify-center  ${
                                    activeSection === "/" ? "bg-blue-500 rounded-full p-2" : ""}`} href="/">

                                    Home
                                </Link>
                                <button onClick={Logi}>Logout</button>

                            </section>
                        </div>
                    )}


                    {!data && (
                        <div
                            className="p-2 flex flex-col gap-2 hidden md:block lg:block md:w-0.5/4 lg:w-0.5/4 shadow-lg">
                            <div className="p-2 ">
                                <section className="flex flex-col gap-2">
                                    <h4 className="text-lg font-medium">Supplier</h4>
                                    {/* <AccordionContent> */}
                                    <div className="grid gap-2">
                                        {
                                            [
                                                "Green Valley Farms",
                                                "Eco Essentials",
                                                "Mountain Meadow",
                                                "Artisan Goods",
                                                "Pottery Collective",
                                                "Rustic Revival",
                                                "Sustainable Threads",
                                                "Artisan Collective",
                                            ].map((supplier: any) => (
                                                <Label key={supplier} className="flex items-center gap-2 font-normal">
                                                    <Checkbox
                                                        value={searchParams.get("filter") || ""}

                                                        checked={searchParams.get("filter") === supplier}
                                                        onCheckedChange={handleCheckboxChange(supplier)}

                                                    />
                                                    {supplier}
                                                </Label>
                                            ))}
                                    </div>
                                    <h4 className="text-lg font-medium">Category</h4>
                                    <div className="grid gap-2">

                                        {
                                            ["SMARTPHONES", "Kitchen", "Home", "Accessories", "Apparel"]
                                                // suppliers
                                                .map((category) => (
                                                    <Label key={category}
                                                           className="flex items-center gap-2 font-normal">
                                                        <Checkbox
                                                            value={searchParams.get("filter") || ""}

                                                            checked={searchParams.get("filter") === category}
                                                            onCheckedChange={handleCheckboxChange(category)}
                                                        />
                                                        {category}
                                                    </Label>
                                                ))}
                                    </div>


                                    <h4 className="text-lg font-medium">Location</h4>
                                    {/* <AccordionContent> */}
                                    <div className="grid gap-2">
                                        {
                                            [
                                                "Dar es Salaam",
                                                "Dodoma",
                                                "Tabora",
                                                "Tanga",
                                                "Mwanza",
                                                "Mtwara",
                                                "Arusha",
                                                "Kigoma",
                                            ].map(
                                                (supplier: any) => (
                                                    <Label key={supplier}
                                                           className="flex items-center gap-2 font-normal">
                                                        <Checkbox
                                                            value={searchParams.get("filter") || ""}

                                                            checked={searchParams.get("filter") === supplier}
                                                            onCheckedChange={handleCheckboxChange(supplier)}
                                                        />
                                                        {supplier}
                                                    </Label>
                                                ),
                                            )}
                                    </div>
                                </section>
                            </div>
                            {/* <section className="flex flex-col gap-2">
                        <Link className={`flex flex-1 flex-col items-center justify-center  ${
          activeSection === "/" ? "bg-blue-500 rounded-full p-2" : ""}`} href="/adupload">
                     
                        Home
                    </Link>
                    <Link className={`flex flex-1 flex-col items-center justify-center  ${
          activeSection === "/login" ? "bg-blue-500 rounded-full p-2" : ""}`} href="/login">Login</Link>
                    <Link className={`flex flex-1 flex-col items-center justify-center  ${
          activeSection === "/register" ? "bg-blue-500 rounded-full p-2" : ""}`} href="/register">Register</Link>

</section> */}
                        </div>
                    )}
                    {/* <div className="bg-white hidden md:block lg:block md:w-1/4 lg:w-1/4 shadow-lg">
                     
                        Sidebar
                    </div> */}
                </>

                <div className="lg:hidden md:hidden block">
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction='left'
                        className='bla bla bla block lg:hidden'
                    >
                        <button className="absolute right-0 m-2" onClick={toggleDrawer}>
                            <Cross/>
                        </button>
                        {data?.role === "ADMIN" && (
                            <div className="p-2 ">
                                <section className="flex flex-col gap-2">
                                    <Link className={`flex flex-1 flex-col items-center justify-center  ${
                                        activeSection === "/adupload" ? "bg-blue-500 rounded-full p-2" : ""}`}
                                          href="/adupload">

                                        Upload Products
                                    </Link>

                                    <Link className={`flex flex-1 flex-col items-center justify-center  ${
                                        activeSection === "/adcategory" ? "bg-blue-500 rounded-full p-2" : ""}`}
                                          href="/adcategory">

                                        Upload Category
                                    </Link>

                                    <button onClick={Log}>Logout</button>
                                </section>
                            </div>
                        )}

                        {data?.role === "USER" && (
                            <div className="p-2 ">
                                <section className="flex flex-col gap-2">
                                    <Link className={`flex flex-1 flex-col items-center justify-center  ${
                                        activeSection === "/" ? "bg-blue-500 rounded-full p-2" : ""}`} href="/">

                                        Home
                                    </Link>
                                    <button onClick={Logi}>Logout</button>

                                </section>
                            </div>
                        )}


                        {!data && (
                            <div className="p-2 ">
                                <section className="flex flex-col gap-2">
                                    <div className="grid gap-2">

                                        {
                                            ["SMARTPHONES", "Kitchen", "Home", "Accessories", "Apparel"]
                                                // suppliers
                                                .map((category) => (
                                                    <Label key={category}
                                                           className="flex items-center gap-2 font-normal">
                                                        <Checkbox
                                                            value={searchParams.get("filter") || ""}

                                                            checked={searchParams.get("filter") === category}
                                                            onCheckedChange={handleCheckboxChange(category)}
                                                        />
                                                        {category}
                                                    </Label>
                                                ))}
                                    </div>
                                    {/* <Link className={`flex flex-1 flex-col items-center justify-center  ${
          activeSection === "/" ? "bg-blue-500 rounded-full p-2" : ""}`} href="/adupload">
                     
                        Home
                    </Link>
                    <Link className={`flex flex-1 flex-col items-center justify-center  ${
          activeSection === "/login" ? "bg-blue-500 rounded-full p-2" : ""}`} href="/login">Login</Link>
                    <Link className={`flex flex-1 flex-col items-center justify-center  ${
          activeSection === "/register" ? "bg-blue-500 rounded-full p-2" : ""}`} href="/register">Register</Link> */}

                                </section>
                            </div>
                        )}
                    </Drawer>
                </div>
                <div className="flex-grow p-4">

                    {children}
                </div>
            </div>
        </div>
    );
}


