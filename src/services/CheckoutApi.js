import axios from 'axios'
import { ssoClient } from './SigninSetup'

export const addTokenHeader = async () => {
  const token = await ssoClient.getToken()
  return { headers: { Authorization: `Bearer ${token}` } }
}

const checkoutApi = axios.create({
  baseURL: process.env.REACT_APP_URL_API
})

export default checkoutApi
