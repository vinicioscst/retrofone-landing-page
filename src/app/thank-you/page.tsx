import Link from "next/link";
import { inter, spicyRice } from "../layout";

export default function ThankYou() {
  return (
    <div className="h-screen w-full flex flex-col gap-10 items-center justify-center px-10 py-10">
      <div className="flex flex-col gap-4 items-center">
        <h2
          className={`${spicyRice.className} text-center text-5xl text-vintage-green uppercase`}
        >
          Consulta enviada com sucesso!
        </h2>
        <p
          className={`${inter.className} text-center font-normal text-xl text-neutral-900`}
        >
          Em breve entraremos em contato através do seu email ou Whatsapp para
          confirmar a disponibilidade e fechar a sua reserva.
        </p>
      </div>
      
      <Link href="/"><button className={`${inter.className} text-neutral-900 text-l font-black uppercase bg-vintage-yellow px-6 py-3  rounded-full border border-neutral-900 hover:text-neutral-900/80 transition-colors`}>Voltar à página principal</button></Link>
    </div>
  );
}
