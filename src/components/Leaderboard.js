import {Component} from "react";
import React from "react";
import Apiservice from "../util/apiservice";
import Player from "./Player";

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
                        <Player key={i.toString()} player={player}/>)}
                </ul>
            </section>
        );
    }
};
