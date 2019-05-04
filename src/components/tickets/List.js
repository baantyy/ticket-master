import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { startRemoveTicket } from '../../actions/tickets'

const TicketList = (props) => {

    return (
        <React.Fragment>
            <div>
                <div className="row mb-2">
                    <div className="col-md-8">
                        <h2>Listing Tickets - { props.tickets.length}</h2>
                    </div>
                    <div className="col-md-4 text-right">
                        <Link to="/tickets/add" className="btn btn-dark custom"> Add Ticket </Link>
                    </div>
                </div>

                { props.tickets.length === 0 ? <p>No tickets found</p> :                
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover table-stripped">
                            <thead className="thead-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Priority</th>
                                    <th>Message</th>
                                    <th>Status</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { props.tickets.map(ticket => {
                                    return (
                                        <tr key={ ticket.ticket_code }>
                                            <td>{ ticket.ticket_code }</td>
                                            <td>{ ticket.name }</td>
                                            <td>{ ticket.department }</td>
                                            <td>{ ticket.priority }</td>
                                            <td>{ ticket.message }</td>
                                            <td className="text-center">
                                                <div className="custom-control custom-switch">
                                                    {/* <input id={ticket.id} className="custom-control-input" type="checkbox" checked={ ticket.status === 'completed' ? true : false } 
                                                    // onChange={() => props.handleChecked(ticket)} 
                                                    />
                                                    <label className="custom-control-label" htmlFor={ticket.id}></label> */}
                                                </div>                      
                                            </td>
                                            <td className="text-center">
                                                <Link className="btn view mr-2" title="Edit" to="">
                                                    <i className="fa fa-pen"></i>
                                                </Link>
                                                <Link className="btn view mr-2" title="View" to={`/tickets/${ ticket.ticket_code }`}>
                                                    <i className="fa fa-book"></i>
                                                </Link>
                                                <button className="btn delete" title="Delete"
                                                    onClick={() => {
                                                        if(window.confirm("Are you sure")){
                                                            props.dispatch(startRemoveTicket(ticket.ticket_code))
                                                        }
                                                    }}
                                                    ><i className="fas fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>    
                }
            </div> 
        </React.Fragment>
    )
}

// wrapped component - Higher Order Component (HOC) 
const mapStateToProps = (state) => {
    return {
        tickets: state.tickets,
        city: 'bangalore'
    }
}

export default connect(mapStateToProps)(TicketList)