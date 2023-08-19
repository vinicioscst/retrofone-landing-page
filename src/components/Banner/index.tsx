import { inter, spicyRice } from '@/app/layout'
import Image from 'next/image'
import BannerImg from "../../../public/banner-img.jpg"
import BannerFlower from "../../../public/flower.svg"
import Link from 'next/link'
export default function Banner(){
    return(
        <section className='w-full flex flex-wrap-reverse lg:flex-nowrap justify-center lg:justify-between items-center gap-8'>
            <div className='flex flex-col gap-6 max-w-[550px] items-start'>
                <Image src={BannerFlower} alt='' />
                <h1 className={`${spicyRice.className} text-7xl text-vintage-green max-w-[400px] uppercase`}>Eternize a voz de quem você ama</h1>
                <p className={`${inter.className} text-2xl text-neutral-900`}>A forma simples e autêntica de guardar as mensagens de seus convidados.</p>
                <Link href="#contact"><button><p className={`${inter.className} text-neutral-900 text-xl font-black uppercase bg-vintage-yellow px-8 py-6  rounded-full border border-neutral-900 hover:text-neutral-900/80 transition-colors`}>Consulte agenda</p></button></Link>
            </div>
            <div className='relative bg-bannerimg w-full max-w-[450px] aspect-[0.857/1] bg-cover bg-center rounded-t-[255px] rounded-b-[25px] border-2 border-neutral-900 before:w-full before:max-w-[450px] before:aspect-[0.857/1] before:bg-vintage-orange before:absolute before:top-4 before:right-4 before:-z-10 before:rounded-t-[255px] before:rounded-b-[25px] before:border-2 before:border-neutral-900' />
        </section>
    )
}