interface FormProps {}
export default function Form(props: FormProps) {
  return (
    <form
      action="https://gmail.us21.list-manage.com/subscribe/post?u=f789f54d570d25546ca644022&amp;id=c6ac95525b&amp;f_id=000567e1f0"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_self"
    >
      <input type="text" name="FNAME" required />
      <input type="email" name="EMAIL" required />
      <input type="text" name="TELEFONE" required />
      <input type="text" name="EVENTDATE" required />
      <div className="absolute left-[-5000px]" aria-hidden="true">
        <input type="text" name="b_f789f54d570d25546ca644022_c6ac95525b" tabIndex={-1} value="" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
