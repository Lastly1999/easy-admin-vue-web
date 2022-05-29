import axios from "axios"

const axiosInstance = axios.create({
	timeout: process.env.VUE_APP_API_TIME_OUT,
	baseURL: process.env.VUE_APP_API_BASE_URL
})

axiosInstance.interceptors.request.use(config => {
	const userToken = localStorage.getItem("authorization")
	config.headers['Authorization '] = userToken || null
	return config
}, err => {
	console.error(`request error:${err}`)
})

axiosInstance.interceptors.response.use(resp => {
	// todo 未做请求序列处理
	return resp
}, err => {
	console.error(`response error:${err}`)
	throw new Error(err)
})

export default axiosInstance