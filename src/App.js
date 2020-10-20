import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import AddSubject from "./components/add-subject.component";
import Vote from "./components/vote.component";
import SubjectsList from "./components/subjects-list.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <Link to={"/subjects"} className="nav-link">
                                Subjects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/votes"} className="nav-link">
                                Voting
                            </Link>
                        </li>
                    </div>
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/subjects"]} component={SubjectsList} />
                        <Route exact path="/add" component={AddSubject} />
                        <Route exact path="/votes" component={Vote} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;

