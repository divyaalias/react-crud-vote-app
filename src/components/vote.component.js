import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import NavBar from "./nav-bar.component";

class VoteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: []
        }
    }

    /*count increment*/
    updateCount(id, count) {
        const subjects = this.state.subjects;
        subjects.map(item => {
            if (item.id === id) {
                item.count = item.count + 1;
            }
        })
        this.setState({ subjects: subjects });
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
        {/* localStorage.removeItem("languages"); 
        */ }
        localStorage.setItem('subjects', JSON.stringify(this.state.subjects));
    }

    render() {
        return (
            <div>
                <div class="container">
                    <NavBar />
                    <table class="fixed" >
                        <thead>
                            <tr>
                                <th className="col-2" >Language</th>
                                <th className="col-2">Count</th>
                                <th className="col-5">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.subjects.filter(x => x.status === "active").map((item, index) => (
                                <tr className="noBorder" key={index}>
                                    <td className="col-2">{item.title}</td>
                                    <td className="col-2">{item.count}</td>
                                    <td className="col-5">
                                        <button className="voteBtn" onClick={() => { this.updateCount(item.id, item.count) }}>Click here to vote</button></td>
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