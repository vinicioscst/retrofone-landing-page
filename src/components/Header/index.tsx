import { spicyRice } from '@/app/layout'
import Nav from '../Nav'

export default function Header(){
    return(
        <header className='w-full flex justify-center lg:justify-between items-center gap-4'>
            <h3 className={`${spicyRice.className} text-5xl text-vintage-orange uppercase select-none`}>Retrofone</h3>
            <Nav />
        </header>
    )
}