import {Component} from "react";
import React from "react";
import './CustomAchievements.css';
import Apiservice from "../util/apiservice";

export default class CustomAchievements extends Component {
    constructor() {
        super();
        this.state = {
            username: null,
            action: null
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(data);
        console.log(e.target.value);
        Apiservice.postAchievements(
            data
        );
    }

    render() {
        return (
            <section className="container with-title custom-achievements">
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
                <form autoComplete="on" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="name_field" className="formTitle">User Name:
                            <input type="text" id="name_field" name="username"
                                   className="input" autoFocus/>
                        </label>
                    </div>
                    <div className="field">
                        <label htmlFor="name_field" className="formTitle">Achievement
                            <input type="text" id="name_field" name="action"
                                   className="input" />
                        </label>
                    </div>
                    <input type="submit" value="Submit Achievement" className="btn is-primary"/>
                </form>
            </section>

        );
    }
};
