import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';

class VoteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: []
        }
    }

   
    buttonClicked(id, count) {
        const subjects = this.state.subjects;
        subjects.map(item => {
            if (item.id === id) {
                item.count = item.count + 1;
            }
        })
        this.setState({ subjects: subjects });
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
    componentDidUpdate() {
        {/* localStorage.removeItem("languages"); 
        */ }
        localStorage.setItem('subjects', JSON.stringify(this.state.subjects));
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

                    <table class="fixed" >
                        <thead>
                            <tr>
                                <th className="col-2" >Language</th>
                                <th className="col-2">Count</th>
                                <th className="col-5">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.subjects.map((item, index) => (
                                <tr className="noBorder" key={index}>
                                    <td className="col-2">{item.title}</td>
                                    <td className="col-2">{item.count}</td>
                                    <td className="col-5">
                                        <button className="voteBtn" onClick={() => { this.buttonClicked(item.id, item.count) }}>Click here to vote</button></td>
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default VoteComponent;