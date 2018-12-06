import React, {Component} from "react";
import Apiservice from '../util/apiservice';
import Player from "./Player";

export default class Players extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: []
        }
    }

    componentDidMount() {

        Apiservice.getPlayers().then(response => {
            console.log(response);
            this.setState({
                players: response.data
            });
        })
    }

    render() {
        return (
            <div>
                Players
                {this.state.players.map((player, i) => <Player key={i.toString()} player={player}/>)}


            </div>
        );
    }
};
