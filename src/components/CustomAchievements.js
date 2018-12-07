import {Component} from "react";
import React from "react";
import './CustomAchievements.css';
import Apiservice from "../util/apiservice";

export default class CustomAchievements extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            action: '',
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {username, action} = this.state;
        console.log({username, action});

        Apiservice.sendAction(username, action);


    }

    render() {
        const {username, action} = this.state;
        return (
            <section className="container with-title balloon">
                <h2 className="title">Custom Achievements</h2>

                <div className="messages">
                    <div className="message -left">
                        <i className="bcrikko">
                        </i>
                        <div className="balloon from-left">
                            <p>Hello, would you like to reward someone? Please enter an achievement and submit
                                :)</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={this.onSubmit} autoComplete="on">
                    <div className="field">
                        <label htmlFor="name_field" className="formTitle">User Name:
                            <input type="text" id="name_field" name="username" value={username} onChange={this.onChange}
                                   className="input" autoFocus/>
                        </label>
                    </div>
                    <div className="field">
                        <label htmlFor="name_field" className="formTitle">Achievement
                            <input type="text" id="name_field" name="action" value={action} onChange={this.onChange}
                                   className="input"/>
                        </label>
                    </div>
                    <input type="submit" value="Submit Achievement" className="customachievementsbtn is-primary"/>
                </form>
            </section>
        );
    }
};
