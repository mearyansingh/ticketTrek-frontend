import axios from 'axios'
import { getBaseUrl } from '../../Helpers'

const API_URL = '/api/tickets'

//Create new ticket
const createTicket = async (ticketData, token) => {

	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}

	const response = await axios.post(`${getBaseUrl()}${API_URL}`, ticketData, config)

	return response.data
}

//Get user tickets
const getTickets = async (token) => {

	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}

	const response = await axios.get(`${getBaseUrl()}${API_URL}`, config)

	return response.data
}

//Get user tickets
const getTicket = async (ticketId, token) => {

	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}

	const response = await axios.get(`${getBaseUrl()}${API_URL}/${ticketId}`, config)

	return response.data
}

//Close tickets
const closeTicket = async (ticketId, token) => {

	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}

	const response = await axios.put(`${getBaseUrl()}${API_URL}/${ticketId}`, { status: 'closed' }, config)

	return response.data
}


const ticketService = { createTicket, getTickets, getTicket, closeTicket }
export default ticketService