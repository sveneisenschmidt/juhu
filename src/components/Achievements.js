import {Component} from "react";
import React from "react";
import Apiservice from "../util/apiservice";
import Achievement from "./Achievement";

export default class Achievements extends Component {
    constructor(props) {
        super(props);

        this.state = {
            achievements: []
        }
    }

    componentDidMount() {

        Apiservice.getAchievements().then(response => {
            console.log(response);
            this.setState({
                achievements: response.data
            });
        })
    }

    render() {
        return (
            <div>
                Achievements
                <ul>
                    {this.state.achievements.map((achievement, i) =>
                        <Achievement key={i.toString()} achievement={achievement}/>)}
                </ul>
            </div>
        );
    }
};
