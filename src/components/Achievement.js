import {Component} from "react";
import React from "react";

export default class Achievement extends Component {
    render() {
        const { achievement } = this.props;

        return (
            <tr>
                <td>{achievement.name}</td><td>{achievement.label}</td><td className={'text-centered'}>{achievement.points}</td>
            </tr>
        );
    }
};
