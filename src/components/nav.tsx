export default function Nav() {
  return (
    <nav className='hidden w-full max-w-[750px] lg:flex justify-center p-6 bg-vintage-yellow border-2 border-neutral-900 rounded-full'>
      <ul className='flex items-center justify-center font-inter text-neutral-900 font-black uppercase text-xl gap-3 lg:gap-11'>
        <a href='#about'>
          <li className="cursor-pointer after:content-['•'] after:pl-3 lg:after:pl-11 hover:text-neutral-900/80 hover:after:text-neutral-900 transition-colors">
            Conheça
          </li>
        </a>
        <a href='#howitworks'>
          <li className="cursor-pointer after:content-['•'] after:pl-3 lg:after:pl-11 hover:text-neutral-900/80 hover:after:text-neutral-900 transition-colors">
            Como Funciona
          </li>
        </a>
        <a href='#contact'>
          <li className='cursor-pointer hover:text-neutral-900/80 transition-colors'>
            Contato
          </li>
        </a>
      </ul>
    </nav>
  )
}
