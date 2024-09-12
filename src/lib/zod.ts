import { z } from 'zod'

export const createConsultSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Seu nome precisa conter, pelo menos, 2 caracteres' }),
  email: z.string().email({ message: 'Digite um email válido' }),
  whatsapp: z.string().min(11, {
    message:
      'Seu número precisa conter pelo menos 11 caracteres. Exemplo: 83900000000'
  }),
  place: z.string().min(2, {
    message: 'Sua localização precisa conter, pelo menos, 2 caracteres'
  }),
  date: z.string().min(1, { message: 'Selecione uma data' })
})

export type TCreateConsultType = z.infer<typeof createConsultSchema>
