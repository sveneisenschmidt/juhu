import {Component} from "react";
import React from "react";
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
            console.log(response);
            this.setState({
                players: response.data
            });
        })
    }

    render() {
        return (
            <section className={'container with-title'}>
                <h2 className={'title'}>Leaderboard</h2>
                <ul>
                    {this.state.players.map((player, i) =>
                        <PlayerList key={i.toString()} player={player}/>)}
                </ul>
            </section>
        );
    }
};
