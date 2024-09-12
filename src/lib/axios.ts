import axios from 'axios'

export const api = axios.create({
  baseURL:
    'https://api.alboompro.com/form/v1/public/forms/66e1dee32d2c2c00011fe3ff/contacts',
  timeout: 10000
})
