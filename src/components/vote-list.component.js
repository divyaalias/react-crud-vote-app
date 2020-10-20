import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';

class VoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: []
        }
    }

    componentDidMount() {
        {/* localStorage.removeItem("subjects"); 
        */ }
        let itemsList = localStorage.getItem('subjects')
        if (itemsList) {
            this.setState({
                subjects: JSON.parse(localStorage.getItem('subjects'))
            })
        }
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div>
                        <div class="top-bar">
                            <form class="example">
                                <input type="text" placeholder="Search by subject" name="search" />
                                <button type="submit">Search</button>
                            </form>
                        </div>

                        <div class="top-bar add-sub">
                            <Link to={"/add"} className="nav-link">Add New</Link>
                        </div>
                    </div>
                    <table class="fixed">
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Count</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.subjects.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td><button className={item.status} >{item.status}</button></td>
                                    <td>actions</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default VoteList;