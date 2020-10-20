import React, { Component } from 'react';

class AddSubject extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
        this.state = {
            result: "",
            subjects: [
                {
                    id: null,
                    title: "",
                    description: "",
                    status: "",
                    count: 0
                }
            ]
        }
    }
    

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const subject = {
            id: Date.now(),
            title: this.state.title,
            description: this.state.description,
            status: "inactive",
            count: 0
        };
        localStorage.setItem("subjects", JSON.stringify(this.state.subjects));
        this.setState({ subjects: this.state.subjects.concat(subject) });
        
    }

    componentDidMount() {
        let itemsList = localStorage.getItem('subjects')
        if (itemsList) {
            this.setState({
                subjects: JSON.parse(localStorage.getItem('subjects'))
            })
        }
    }

    componentDidUpdate() {
        {/* localStorage.removeItem("subjects"); 
        */ }
        localStorage.setItem('subjects', JSON.stringify(this.state.subjects));
    }

    render() {
        return (
            <div className="submit-form">
                <h4>Add new subject</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            required
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            name="title"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            required
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            name="description"
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Submit
                    </button>
                </form>
             </div>
        )
    }
   

}

export default AddSubject;