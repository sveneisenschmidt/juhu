import {Component} from "react";
import React from "react";
import './CustomAchievements.css';

export default class CustomAchievements extends Component {

    render() {
        return (
                <section className="container with-title custom-achievements">
                    <h2 className="title">Custom Achievements</h2>
                    {/*<section className="container with-title">*/}
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
                        <form autoComplete="on">
                            <div className="field">
                                <label htmlFor="name_field" className="formTitle">Achievement unlocked:
                                    <input type="text" id="name_field" className="input" autoFocus/>
                                </label>
                            </div>
                            <input type="submit" value="Unlock" className="btn is-primary"/>
                        </form>
                    {/*</section>*/}
                </section>

        );
    }
};
