import {Component} from "react";
import React from "react";

export default class Achievement extends Component {
    render() {
        const { achievement } = this.props;

        return (
            <li>
                <strong>{achievement.name} {achievement.label} {achievement.points}</strong>
            </li>
        );
    }
};
