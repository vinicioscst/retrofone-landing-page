'use client'
import { inter } from '@/app/layout'
import { createConsultSchema, TCreateConsultType } from '@/lib/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import LoadingIcon from '../../public/loading-icon.svg'
import Image from 'next/image'
import { formatBody, IBody } from '@/utils/formatBody'
import { toast } from 'sonner'
import { api } from '@/lib/axios'
import { AxiosError } from 'axios'

interface FormProps {}
export default function Form(props: FormProps) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<TCreateConsultType>({
    resolver: zodResolver(createConsultSchema)
  })

  async function submitForm(data: TCreateConsultType) {
    const { name, email, whatsapp, place, date } = data
    const body = formatBody(name, email, whatsapp, place, date) as IBody

    try {
      const responseStatus = await sendForm(body)
      if (responseStatus !== 201) {
        toast.error('Ocorreu um erro!', {
          description:
            'Não foi possível enviar sua consulta. Caso o erro persista, entre em contato conosco'
        })
      }
      if (responseStatus === 201) {
        reset()
        toast.success(`Consulta enviada com sucesso, ${name}!`, {
          description:
            'Em breve entraremos em contato através do seu email ou Whatsapp para confirmar a disponibilidade e fechar a sua reserva'
        })
      }
    } catch (error) {
      toast.error('Ocorreu um erro inesperado!')
    }
  }

  async function sendForm(body: IBody): Promise<number> {
    try {
      const response = await api.post('', body)
      return response.status
    } catch (error) {
      return (error as AxiosError).request.status
    }
  }

  return (
    <form
      className='flex flex-col gap-6'
      onSubmit={handleSubmit(submitForm)}
      noValidate
    >
      <fieldset className='flex flex-col gap-2'>
        <label
          htmlFor='form-name'
          className={`${inter.className} text-neutral-900 text-sm uppercase font-bold`}
        >
          Nome
        </label>
        <input
          className={`w-full bg-white border border-neutral-900 rounded-xl px-4 py-4 min-h-[55px] bg-transparent text-base text-neutral-900 placeholder:text-neutral-500`}
          type='text'
          placeholder='Insira seu nome'
          id='form-name'
          {...register('name')}
        />
        {errors.name && (
          <span
            className={`text-sm ${inter.className} text-red-500 tracking-wider`}
          >
            {errors.name.message}
          </span>
        )}
      </fieldset>
      <fieldset className='flex flex-col gap-2'>
        <label
          htmlFor='form-email'
          className={`${inter.className} text-neutral-900 text-sm uppercase font-bold`}
        >
          Email
        </label>
        <input
          className={`w-full bg-white border border-neutral-900 rounded-xl px-4 py-4 min-h-[55px] bg-transparent text-base text-neutral-900 placeholder:text-neutral-500`}
          type='email'
          placeholder='Insira seu email'
          id='form-email'
          {...register('email')}
        />
        {errors.email && (
          <span
            className={`text-sm ${inter.className} text-red-500 tracking-wider`}
          >
            {errors.email.message}
          </span>
        )}
      </fieldset>
      <fieldset className='flex flex-col gap-2'>
        <label
          htmlFor='form-whatsapp'
          className={`${inter.className} text-neutral-900 text-sm uppercase font-bold`}
        >
          Whatsapp
        </label>
        <input
          className={`w-full bg-white border border-neutral-900 rounded-xl px-4 py-4 min-h-[55px] bg-transparent text-base text-neutral-900 placeholder:text-neutral-500`}
          type='text'
          placeholder='Seu whatsapp'
          id='form-whatsapp'
          {...register('whatsapp')}
        />
        {errors.whatsapp && (
          <span
            className={`text-sm ${inter.className} text-red-500 tracking-wider`}
          >
            {errors.whatsapp.message}
          </span>
        )}
      </fieldset>
      <fieldset className='flex flex-col gap-2'>
        <label
          htmlFor='form-place'
          className={`${inter.className} text-neutral-900 text-sm uppercase font-bold`}
        >
          Local do evento
        </label>
        <input
          className={`w-full bg-white border border-neutral-900 rounded-xl px-4 py-4 min-h-[55px] bg-transparent text-base text-neutral-900 placeholder:text-neutral-500`}
          type='text'
          placeholder='Local do evento'
          id='form-place'
          {...register('place')}
        />
        {errors.place && (
          <span
            className={`text-sm ${inter.className} text-red-500 tracking-wider`}
          >
            {errors.place.message}
          </span>
        )}
      </fieldset>
      <fieldset className='flex flex-col gap-2'>
        <label
          htmlFor='form-date'
          className={`${inter.className} text-neutral-900 text-sm uppercase font-bold`}
        >
          Data e hora do evento
        </label>
        <input
          className={`w-full bg-white border border-neutral-900 rounded-xl px-4 py-4 min-h-[55px] bg-transparent text-base text-neutral-900 placeholder:text-neutral-500 appearance-none`}
          type='datetime-local'
          placeholder='Data e hora do evento'
          id='form-date'
          {...register('date')}
        />
        {errors.date && (
          <span
            className={`text-sm ${inter.className} text-red-500 tracking-wider`}
          >
            {errors.date.message}
          </span>
        )}
      </fieldset>
      <button
        type='submit'
        className={`${inter.className} text-white text-xl font-black uppercase bg-vintage-green px-8 py-4  rounded-full border border-neutral-900 hover:text-white/80 transition-colors`}
      >
        {isSubmitting ? (
          <Image
            src={LoadingIcon}
            alt='Carregando'
            className='animate-spin mx-auto'
          />
        ) : (
          'Enviar'
        )}
      </button>
    </form>
  )
}
