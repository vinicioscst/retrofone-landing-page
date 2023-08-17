import { inter } from "@/app/layout";
import Link from "next/link";

export default function Nav(){
    return(
        <nav className="hidden w-full max-w-[800px] md:flex justify-center p-6 bg-vintage-yellow border-2 border-neutral-900 rounded-full">
            <ul className={`flex items-center justify-center ${inter.className} text-neutral-900 font-black uppercase text-xl gap-3 lg:gap-11`}>
                <Link href="#about"><li className="cursor-pointer after:content-['•'] after:pl-3 lg:after:pl-11 hover:text-neutral-900/80 hover:after:text-neutral-900 transition-colors">Conheça</li></Link>
                <Link href="#howitworks"><li className="cursor-pointer after:content-['•'] after:pl-3 lg:after:pl-11 hover:text-neutral-900/80 hover:after:text-neutral-900 transition-colors">Como Funciona</li></Link>
                <Link href="#contact"><li className="cursor-pointer hover:text-neutral-900/80 transition-colors">Contato</li></Link>
            </ul>
        </nav>
    )
}