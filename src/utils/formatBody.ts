export function formatBody(
  nameValue: string,
  emailValue: string,
  whatsappValue: string,
  placeValue: string,
  dateValue: string
) {
  return {
    csrf: 'qBtZsKe8tfBVjtKuu9SyBOUe9hv2Me.NyF3n1Ije92vEIPrCBJDUu',
    signature:
      'ee0mCxTFccBh538IIY1s6NcjI_AqYM7iadXDXiR7ZQVzSY7v7qXyuKQc7z8A8A4Z3BUjjZ5Xt_tVJbL45KqM7h0xQqlsZUEJ5fXcuDFFzC7Y8z3xIVuxKXjsh5nFdL4PKqlIRLDcLXs62oUkkPwh1nkHKbzjwKg_Wqv4RBE-SKi9TwH5qU5YoaxHTxRcd_i4bt0v6vRFQJrOtGEDtmvUqH9ciI1wKYbvsp799OO_hWaTMehoAXsvffFubu16LEFrsU6Rve3JgE28G2cepm4uIPVq7gYK6sJGQYx5kGDOXs8odYn18r12ZDlSrmxG8RqMpU-Gb4FlIDZJtiKzk37jgiraVSw0ObbSo06Nfiy6IQMteK334wZ4q4UVDZUtfQ-njN3hNCoRObJ3vXDzAho2Q4B4pBtlenoRisr809N9DKjGKnDrg9-wSABKqXQZ1-qe',
    contact: {
      sent_at: new Date().toISOString(),
      contact_fields: [
        {
          _id: '66e1def7076be400019965a7',
          kind: 'name',
          label: 'Nome',
          placeholder: 'Insira seu nome',
          required: true,
          default_value: '',
          select_options: [],
          settings: [],
          values: [nameValue]
        },
        {
          _id: '66e1def7076be400019965a8',
          kind: 'email',
          label: 'Email',
          placeholder: 'Insira seu email',
          required: true,
          default_value: '',
          select_options: [],
          settings: [],
          values: [emailValue]
        },
        {
          _id: '66e1def7076be400019965a9',
          kind: 'text',
          label: 'WhatsApp',
          placeholder: 'Seu whatsapp',
          required: true,
          default_value: '',
          select_options: [],
          settings: [],
          values: [whatsappValue]
        },
        {
          _id: '66e1def7076be400019965ab',
          kind: 'text',
          label: 'Local do evento',
          placeholder: 'Local do evento',
          required: true,
          default_value: '',
          select_options: [],
          settings: [],
          values: [placeValue]
        },
        {
          _id: '66e1def7076be400019965aa',
          kind: 'date',
          label: 'Data e hora do evento',
          placeholder: 'Data e hora do evento',
          required: true,
          default_value: '',
          select_options: [],
          settings: [],
          values: [dateValue]
        }
      ]
    }
  }
}

export interface IBody {
  csrf: string
  signature: string
  contact: Contact
}

interface Contact {
  sent_at: string
  contact_fields: ContactField[]
}

interface ContactField {
  _id: string
  kind: string
  label: string
  placeholder: string
  required?: boolean
  default_value?: string
  select_options: any[]
  settings: any[]
  values: string[]
}
