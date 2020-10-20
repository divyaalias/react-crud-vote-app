import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import NavBar from "./nav-bar.component";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';

class SubjectsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: []
        }
    }
    
    /* change status active and inactive */
    statusUpdate(id, status) {
        const subjects = this.state.subjects
        subjects.map(item => {
            if (item.id === id) {
                status == "inactive" ? item.status = "active" : item.status = "inactive"
            }
        })
        this.setState({ subjects: subjects });
    }

    /* local storage get items */
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

    /* local storage set items */
    componentDidUpdate() {
        {/* localStorage.removeItem("subjects"); 
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
                                <th className="col-1" >Subject
                                    <FontAwesomeIcon icon={faSort} onClick={this.sortMyObjArray} s />
                                </th>
                                <th className="col-2">Description</th>
                                <th className="col-3">Status</th>
                                <th className="col-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.subjects.map((item, index) => (
                                <tr className="noBorder" key={index}>
                                    <td className="col-1">{item.title}</td>
                                    <td className="col-2" title={item.description}>{item.description}</td>
                                    <td className="col-3">
                                        <button className={item.status} onClick={() => { this.statusUpdate(item.id, item.status) }}>{item.status}</button></td>
                                    <td className="col-4">
                                        <a href="#" class="view" title="View" data-toggle="tooltip"><VisibilityIcon className="materialIcon" />
                                        </a>
                                        <a href="#" class="edit" title="Edit" data-toggle="tooltip"><EditIcon className="materialIcon" /></a>
                                        <a href="#" class="delete" title="Delete" data-toggle="tooltip"><DeleteIcon className="materialIcon" /></a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default SubjectsList;