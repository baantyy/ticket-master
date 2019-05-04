const ticketsInitialState = [] 
const ticketsReducer = (state = ticketsInitialState, action) => {
    switch(action.type) {
        case 'SHOW_TICKETS' : 
            return [...action.payload]
        case 'ADD_TICKET' : 
            return [...state, action.payload]
        case 'REMOVE_TICKET' : 
            return state.filter(ticket => ticket.ticket_code != action.payload)
        default: 
            return [...state]
    }
}

export default ticketsReducer