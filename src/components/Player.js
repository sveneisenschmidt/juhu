import {Component} from "react";
import {Link, Route} from "react-router-dom";
import React from "react";
import './Player.css';
import Leaderboard from "./Leaderboard";


export default class Player extends Component {
    render() {
        const { player } = this.props;


        return (
            <li className={'player'}>
                <Link to={`/players/${player.username}`}>
                    <img src={player.image_url} className={'player__image'} alt="" height={'64'} width={'64'}/>
                    <span className="player__name">{player.name}</span>
                    <span className="player__score">
                        {player.score}
                    </span>
                </Link>
                <Route path={`/players/:playerName`} component={Leaderboard}/>
            </li>
        );
    }
};
