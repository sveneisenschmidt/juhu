import React, {Component} from "react";
import Apiservice from "../util/apiservice";
import PlayerList from "./PlayerList";

export default class Leaderboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: []
        }
    }

    componentDidMount() {
        Apiservice.getLeaderboard().then(response => {
            this.setState({
                players: response.data
            });
        })
    }

    render() {
        return (
            <section className={'container with-title is-centered'}>
                <h2 className={'title'}>Leaderboard</h2>
                <table className={'table is-bordered is-centered'}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Level</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.players.map((player, i) =>
                        <PlayerList key={i.toString()} player={player}/>)}
                    </tbody>
                </table>
            </section>
        );
    }
};
