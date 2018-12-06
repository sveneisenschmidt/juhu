import React, {Component} from "react";
import {Link} from "react-router-dom";
import './Player.css';

export default class PlayerList extends Component {
    render() {
        let {player} = this.props;

        return (
            <li className={'player'}>
                <Link to={`/players/${player.username}`}>
                    <img src={player.image_url} className={'player__image'} alt="" height={'64'} width={'64'}/>
                    <span className="player__name">{player.name}</span>
                    <span className="player__score">
                        {player.score}
                    </span>
                </Link>
            </li>
        );
    }
};
