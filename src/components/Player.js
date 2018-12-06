import React, {Component} from "react";
import {Link} from "react-router-dom";
import './Player.css';
import Apiservice from "../util/apiservice";

export default class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player: []
        };
    }

    componentDidMount() {
        let username = '';
        if (this.props.match && this.props.match.params.playerName) {
            username = this.props.match.params.playerName || '';
        }

        Apiservice.getPlayers(username).then(response => {
            console.log(response);
            this.setState({
                player: response.data
            });
        })
    }

    render() {
        let player = this.props.player || this.state.player;

        return (
            <li className={'player'}>
                {this.props.player ? (
                    <Link to={`/players/${player.username}`}>
                        <img src={player.image_url} className={'player__image'} alt="" height={'64'} width={'64'}/>
                        <span className="player__name">{player.name}</span>
                        <span className="player__score">
                            {player.score}
                        </span>
                    </Link>
                ) : (
                    <div>
                        <img src={player.image_url} className={'player__image'} alt="" height={'64'} width={'64'}/>
                        <span className="player__name">{player.name}</span>
                        <span className="player__score">
                            {player.score}
                        </span>
                    </div>
                )}
            </li>
        );
    }
};
