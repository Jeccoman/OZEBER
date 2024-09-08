import Image from "next/image";

import Link from "next/link";

export default function OurImage(){

    return(
        <Link className="flex justify-between gap-2" href="/">
             { <Image src="/images.png" alt="Agro-sector" height={60} width={60} /> }
             <h4 className="font-bold text-2xl animate-pulse text-green-800 p-4 mt-1 hidden lg:block md:block">Agro-sector</h4>
        </Link>
    )
}