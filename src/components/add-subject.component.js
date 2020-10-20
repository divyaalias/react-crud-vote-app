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

    /* get the title value onchnage  */
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    /* get the description value onchnage */
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    /* Add new subject to subjects array and save in localstorage*/
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

    /* local storage get items */
    componentDidMount() {
        let itemsList = localStorage.getItem('subjects')
        if (itemsList) {
            this.setState({
                subjects: JSON.parse(localStorage.getItem('subjects'))
            })
        }
    }

    /* local storage set items */
    componentDidUpdate() {
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
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
             </div>
        )
    }
}

export default AddSubject;