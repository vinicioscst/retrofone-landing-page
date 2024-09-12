import Nav from './nav'

export default function Header() {
  return (
    <header className='w-full flex justify-center lg:justify-between items-center gap-4'>
      <h3 className='font-spicy text-5xl text-vintage-orange uppercase select-none'>
        Retrofone
      </h3>
      <Nav />
    </header>
  )
}
