import { inter, spicyRice } from "@/app/layout";
import Form from "../Form";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-wrap justify-center lg:justify-between pt-4 gap-14 lg:gap-4 items-center">
      <div className="relative bg-formimg w-full max-w-[430px] aspect-[1/1.58] bg-cover bg-center rounded-full border-2 border-neutral-900 before:w-full before:max-w-[450px] before:aspect-[1/1.58] before:bg-vintage-yellow before:absolute before:top-4 before:-z-10 before:rounded-full before:border-2 before:border-neutral-900" />
      <div className="max-w-[540px] flex flex-col flex-wrap gap-16">
        <div className="w-full flex flex-col gap-6 justify-center">
          <h2
            className={`${spicyRice.className} text-6xl uppercase text-vintage-orange text-center`}
          >
            Consulte a Agenda
          </h2>
          <p className={`${inter.className} text-[1.313rem] leading-normal text-center lg:text-left text-neutral-900`}>
            Imagine a energia e a felicidade contagiante de seus convidados se
            revezando para gravar suas mensagens de uma forma divertida e
            nostálgica! <b>Uma coisa é certa</b>: O <b>Retrofone</b> será um sucesso no seu
            evento!
          </p>
        </div>

        <Form />
      </div>
    </section>
  );
}
