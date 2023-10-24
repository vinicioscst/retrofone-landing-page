import { inter } from "@/app/layout";

interface FormProps {}
export default function Form(props: FormProps) {
  return (
    <form
      action="https://gmail.us17.list-manage.com/subscribe/post?u=dcf77a0465c0f98cb55f54751&amp;id=6df569d358&amp;f_id=005d69e0f0"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_self"
      className="flex flex-col gap-6"
    >
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="fname" className={`${inter.className} text-neutral-900 text-sm uppercase font-bold`}>Nome</label>
          <input
            className={`w-full bg-white border border-neutral-900 rounded-xl px-4 py-4 min-h-[55px] bg-transparent text-base text-neutral-900 placeholder:text-neutral-500`}
            type="text"
            name="FNAME"
            id="fname"
            required
            placeholder="Insira seu nome"
          />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="email" className={`${inter.className} text-neutral-900 text-sm uppercase font-bold`}>Email</label>
          <input
            className={`w-full bg-white border border-neutral-900 rounded-xl px-4 py-4 min-h-[55px] bg-transparent text-base text-neutral-900 placeholder:text-neutral-500`}
            type="email"
            name="EMAIL"
            id="email"
            required
            placeholder="Insira seu email"
          />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="telefone" className={`${inter.className} text-neutral-900 text-sm uppercase font-bold`}>Whatsapp</label>
        <input
            className={`w-full bg-white border border-neutral-900 rounded-xl px-4 py-4 min-h-[55px] bg-transparent text-base text-neutral-900 placeholder:text-neutral-500`}
            type="number"
            name="TELEFONE"
            id="telefone"
            required
            placeholder="Seu Whatsapp"
          />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="local" className={`${inter.className} text-neutral-900 text-sm uppercase font-bold`}>Local do evento</label>
          <input
            className={`w-full bg-white border border-neutral-900 rounded-xl px-4 py-4 min-h-[55px] bg-transparent text-base text-neutral-900 placeholder:text-neutral-500`}
            type="text"
            name="LOCAL"
            id="local"
            required
            placeholder="Local do evento"
          />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="eventdate" className={`${inter.className} text-neutral-900 text-sm uppercase font-bold`}>Data e hora do Evento</label>
        <input
          className={`w-full bg-white border border-neutral-900 rounded-xl px-4 py-4 min-h-[55px] bg-transparent text-base text-neutral-900 placeholder:text-neutral-500 appearance-none`}
          type="datetime-local"
          name="EVENTDATE"
          id="eventdate"
          required
          placeholder="Data e hora do evento"
        />
      </fieldset>
        <input className="absolute left-[-5000px]" aria-hidden="true"
          type="text"
          name="b_f789f54d570d25546ca644022_c6ac95525b"
          tabIndex={-1}
        />
      <button type="submit" className={`${inter.className} text-white text-xl font-black uppercase bg-vintage-green px-8 py-4  rounded-full border border-neutral-900 hover:text-white/80 transition-colors`}>Enviar</button>
    </form>
  );
}
