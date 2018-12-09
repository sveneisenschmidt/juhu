import React, {Component} from "react";
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
            this.setState({
                achievements: response.data
            });
        })
    }

    render() {
        return (
            <section className="container with-title">
                <h2 className={'title'}>Achievements</h2>
                <table className={'table is-bordered is-centered'}>
                    <tbody>
                    <tr>
                        <th>Label</th>
                        <th>Points</th>
                    </tr>
                    {this.state.achievements.map((achievement, i) =>
                        <Achievement key={i.toString()} achievement={achievement}/>)}
                    </tbody>
                </table>
            </section>
        );
    }
};
