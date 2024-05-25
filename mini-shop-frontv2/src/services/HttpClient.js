import axios from "axios"
import Cookies from "js-cookie"

const env = {
  endpoint: "http://localhost:8080",
}

const HttpClient = axios.create({
  baseURL: env.endpoint,
  headers: { "Content-Type": "application/json" },
})

HttpClient.interceptors.request.use(
  (config) => {
    // config.headers["Authorization"] = `Bearer ${Cookies.get("USER")}`
    return config
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

HttpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)

export default HttpClient
