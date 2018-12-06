import {Component} from "react";
import React from "react";
import Apiservice from "../util/apiservice";
import Player from "./Player";

export default class Achievements extends Component {
    constructor(props) {
        super(props);

        this.state = {
            achievements: []
        }
    }

    componentDidMount() {

        Apiservice.getPlayers().then(response => {
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
                    {this.state.achievements.map((player, i) => <Player key={i.toString()} player={player}/>)}
                </ul>
            </div>
        );
    }
};
