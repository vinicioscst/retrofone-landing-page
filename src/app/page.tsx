import Image from 'next/image'
import TopDecoration from '../../public/top-decoration.svg'
import Container from '@/components/container'
import Header from '@/components/header'
import Banner from '@/components/banner'
import About from '@/components/about'
import CardsContainer from '@/components/cards-container'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <div className='relative'>
        <Container>
          <div className='flex flex-col justify-center gap-32 pt-20 pb-32'>
            <Header />
            <Banner />
            <About />
            <CardsContainer />
            <Contact />
          </div>
        </Container>
        <Footer />
      </div>

      <Image
        src={TopDecoration}
        alt=''
        className='hidden lg:block absolute top-0 right-0 pointer-events-none -z-10'
      />
    </>
  )
}
