import axios from 'axios'
import { getBaseUrl } from '../../Helpers'

const API_URL = '/api/users'

//Register user
const register = async (userData) => {
	const response = await axios.post(`${getBaseUrl()}${API_URL}`, userData)
	if (response) {
		localStorage.setItem('user', JSON.stringify(response.data))//local storage can only hold string
	}
	return response.data
}

//Login user
const login = async (userData) => {
	const response = await axios.post(`${getBaseUrl()}${API_URL}/login`, userData)
	if (response) {
		localStorage.setItem('user', JSON.stringify(response.data))//local storage can only hold string
	}
	return response.data
}

//Logout user
const logout = () => localStorage.removeItem('user')

const authService = { register, login, logout }
export default authService