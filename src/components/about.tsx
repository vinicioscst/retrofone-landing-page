import { inter, spicyRice } from '@/app/layout'
import Image from 'next/image'
import BrowserBttns from '../../../public/browser-bttns.svg'

export function About() {
  return (
    <section
      id='about'
      className='w-full flex items-center flex-col gap-6'
    >
      <h2
        className={`${spicyRice.className} text-6xl uppercase text-vintage-orange text-center`}
      >
        Após o sinal, deixe sua mensagem!
      </h2>
      <div className='w-full'>
        <div className='w-full h-[50px] flex items-center justify-end bg-vintage-green px-8 rounded-t-3xl border-2 border-neutral-900'>
          <Image
            src={BrowserBttns}
            alt=''
            draggable='false'
          />
        </div>
        <div className='w-full flex flex-col gap-10 bg-white px-11 py-16 rounded-b-3xl border-b-2 border-x-2 border-neutral-900'>
          <p
            className={`${inter.className} text-xl text-neutral-900 text-center tracking-[1px]`}
          >
            De maneira descontraída e envolvente, proporcionamos aos seus
            convidados a oportunidade de gravar mensagens de áudio, relembrando
            a nostalgia das máquinas de gravação antigas.
          </p>
          <p
            className={`${inter.className} text-xl text-neutral-900 text-center tracking-[1px]`}
          >
            Das emoções da mãe ao sábio conselho do vovô, da alegria radiante da
            prima ao entusiasmo do padrinho bêbado, cada palavra capturada pode
            conter uma história memorável.
          </p>
          <p
            className={`${inter.className} text-xl text-neutral-900 text-center tracking-[1px]`}
          >
            À medida que o tempo passa, essas preciosas mensagens de áudio se
            assemelham a folhear um álbum de casamento, ganhando ainda mais
            valor e significado.
          </p>
        </div>
      </div>
    </section>
  )
}
