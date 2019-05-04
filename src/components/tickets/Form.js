import React from 'react' 
import uuid from 'uuid'
import Select from 'react-select'

class TicketForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '',
            department: null,
            priority: null, 
            message: '',
        }
        this.department = [
            { value: 'Technical', label: 'Technical' },
            { value: 'Sales', label: 'Sales' },
            { value: 'Human Resource', label: 'Human Resource' }
        ]
        this.priority = [
            { value: 'Low', label: 'Low' },
            { value: 'Medium', label: 'Medium' },
            { value: 'High', label: 'High' }
        ]
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: uuid(), 
            name: this.state.name,
            department: this.state.department.value,
            priority: this.state.priority.value,
            message: this.state.message
        }
        this.props.handleSubmit(formData)
    } 

    handleDepartmentSelect = (option) => {
        this.setState(() => ({
            department: option
        }))
    }

    handlePrioritySelect = (option) => {
        this.setState(() => ({
            priority: option
        }))
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                
                    <label>Name</label>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleChange} className="form-control" />
                    
                    <label>Department</label>
                    <Select options={this.department} value={this.state.department} onChange={this.handleDepartmentSelect} />

                    <label>Priority</label>
                    <Select options={this.priority} value={this.state.priority} onChange={this.handlePrioritySelect} />

                    <label>Message</label>
                    <textarea value={this.state.message} onChange={this.handleChange} name="message" className="form-control"></textarea>

                    <input type="submit" value="Add Ticket" className="btn btn-dark" />

                </form>
            </div>
        )
    }
}

export default TicketForm