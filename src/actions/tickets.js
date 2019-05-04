import axios from "axios"
import ApiKeys from '../config/Apikey'

export const showTickets = (tickets) => {
    return {
        type: 'SHOW_TICKETS',
        payload: tickets
    }
}

export const startShowTickets = () => {
    return (dispatch) => {
        axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=${ApiKeys.ticketApi}`)
            .then(response => {
                dispatch(showTickets(response.data))
            })
            
    }
}

export const addTicket = (ticket) => {
    return {
        type: 'ADD_TICKET',
        payload: ticket
    }
}

export const startAddTicket = (ticket) => {
    return (dispatch) => {
        axios.post(`http://dct-api-data.herokuapp.com/tickets?api_key=${ApiKeys.ticketApi}`, ticket)
            .then(response => {
                dispatch(addTicket(response.data))
            })
    }
}

export const removeTicket = (ticket_code) => {
    return {
        type: 'REMOVE_TICKET',
        payload: ticket_code 
    }
}

export const startRemoveTicket = (ticket_code) => {
    return (dispatch) => {
        axios.delete(`http://dct-api-data.herokuapp.com/tickets/${ticket_code}?api_key=${ApiKeys.ticketApi}`)
            .then(response => {
                dispatch(removeTicket(ticket_code))
            })
    }
}