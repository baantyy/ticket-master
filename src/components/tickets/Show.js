import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { startRemoveTicket } from '../../actions/tickets'

const TicketShow = (props) => {
    const { ticket_code, name, message, priority, department } = props.ticket 

    const handleRemove = () => {
        const confirm = window.confirm("Are you sure? ") 
        if(confirm) {
           props.dispatch(startRemoveTicket(ticket_code))
           props.history.push('/tickets')
        }
    }

    return (
        <div>
            <div className="viewBox">
                <ul>
                    <li><b>Name</b>: { name }</li>
                    <li><b>Ticket Id</b>: { ticket_code }</li>
                    <li><b>Department</b>: { department }</li>
                    <li><b>Priority</b>: { priority }</li>
                    <li><b>Message</b>: { message }</li>
                </ul>
                <button className="btn btn-danger custom ml-0" onClick={handleRemove}>Remove</button>
                <Link to="/tickets" className="btn btn-dark custom"> Go Back </Link>
            </div>            
        </div> 
    )
}

const mapStateToProps = (state, props) => { 
    const id = props.match.params.id 
    return {
        ticket: state.tickets.find(ticket => ticket.ticket_code === id)
    }
}

export default connect(mapStateToProps)(TicketShow)