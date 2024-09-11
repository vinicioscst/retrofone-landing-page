import Image from 'next/image'
import BottomDecoration from '../../public/bottom-decoration.svg'
import Instagram from '../../public/instagram.svg'
import { spicyRice } from '@/app/layout'
import Container from './container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='relative bg-vintage-yellow border-t-2 border-neutral-900'>
      <Container>
        <div className='flex justify-between items-center py-11'>
          <p
            className={`${spicyRice.className} text-[2rem] text-neutral-900 uppercase select-none`}
          >
            Retrofone
          </p>
          <div className='flex gap-2'>
            <Link href='https://www.instagram.com/retrofone_oficial/'>
              <Image
                src={Instagram}
                alt='Instagram'
                className='w-8'
              />
            </Link>
          </div>
        </div>
      </Container>
      <Image
        src={BottomDecoration}
        alt=''
        className='hidden lg:block absolute bottom-[130px] left-0 pointer-events-none -z-50'
      />
    </footer>
  )
}
