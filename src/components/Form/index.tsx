import { inter } from "@/app/layout";

interface FormProps {}
export default function Form(props: FormProps) {
  return (
    <form
      action="https://gmail.us21.list-manage.com/subscribe/post?u=f789f54d570d25546ca644022&amp;id=c6ac95525b&amp;f_id=000567e1f0"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_self"
      className="flex flex-col gap-6"
    >
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="fname" className={`${inter.className} text-neutral-900 text-sm uppercase font-bold`}>Nome</label>
        <div className="w-full bg-white border border-neutral-900 rounded-xl">
          <input
            className={`w-full px-4 py-4 bg-transparent text-base text-neutral-900 placeholder:text-neutral-500`}
            type="text"
            name="FNAME"
            id="fname"
            required
            placeholder="Insira seu nome"
          />
        </div>
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="email" className={`${inter.className} text-neutral-900 text-sm uppercase font-bold`}>Email</label>
        <div className="w-full bg-white border border-neutral-900 rounded-xl">
          <input
            className={`w-full px-4 py-4 bg-transparent text-base text-neutral-900 placeholder:text-neutral-500`}
            type="email"
            name="EMAIL"
            id="email"
            required
            placeholder="Insira seu email"
          />
        </div>
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="telefone" className={`${inter.className} text-neutral-900 text-sm uppercase font-bold`}>Whatsapp</label>
        <div className="w-full bg-white border border-neutral-900 rounded-xl">
          <input
            className={`w-full px-4 py-4 bg-transparent text-base text-neutral-900 placeholder:text-neutral-500`}
            type="number"
            name="TELEFONE"
            id="telefone"
            required
            placeholder="Seu Whatsapp"
          />
        </div>
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="eventdate" className={`${inter.className} text-neutral-900 text-sm uppercase font-bold`}>Data do Evento</label>
        <div className="w-full bg-white border border-neutral-900 rounded-xl">
          <input
            className={`w-full px-4 py-4 bg-transparent text-base text-neutral-900 placeholder:text-neutral-500`}
            type="date"
            name="EVENTDATE"
            id="eventdate"
            required
            placeholder="Data do evento"
          />
        </div>
      </fieldset>
      <div className="absolute left-[-5000px]" aria-hidden="true">
        <input
          type="text"
          name="b_f789f54d570d25546ca644022_c6ac95525b"
          tabIndex={-1}
          value=""
        />
      </div>
      <button type="submit"><p className={`${inter.className} text-white text-xl font-black uppercase bg-vintage-green px-8 py-4  rounded-full border border-neutral-900 hover:text-white/80 transition-colors`}>Enviar</p></button>
    </form>
  );
}
