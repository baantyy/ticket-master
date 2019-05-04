import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import TicketForm from './Form'

import { startAddTicket } from '../../actions/tickets'

const TicketNew = (props) => {

    const handleSubmit = (formData) => {
        console.log('new', formData) 
        props.dispatch(startAddTicket(formData))
        props.history.push('/tickets')
    }

    return (
        <div>
            <div className="row mb-2">
                <div className="col-md-8">
                    <h2> Add Ticket </h2>
                </div>
                <div className="col-md-4 text-right mb-2">
                    <Link to="/tickets" className="btn btn-dark custom"> Go Back </Link>
                </div>
                <div className="col-md-6">
                    <TicketForm handleSubmit={handleSubmit} />
                </div>
                <div className="col-md-6">
                    { props.previousTicket &&
                        <div className="viewBox">
                            <h4 className="mb-3"><b>Last Ticket</b></h4>
                            <ul>
                                <li><b>Name</b>: { props.previousTicket.name }</li>
                                <li><b>Ticket Id</b>: DCT-6dc6</li>
                                <li><b>Department</b>: HR</li>
                                <li><b>Priority</b>: Low</li>
                                <li><b>Message</b>: Unable to fetch candidate profile</li>
                            </ul>
                            <Link className="btn btn-dark custom" to={`/tickets/${props.previousTicket.ticket_code}`}>Show</Link>
                        </div>
                    }
                </div>
            </div>            
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        previousTicket: _.last(state.tickets)
    }
}   

export default connect(mapStateToProps)(TicketNew)