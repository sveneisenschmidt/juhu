import React, {Component} from "react";
import {Link} from "react-router-dom";
import './Player.css';

export default class PlayerList extends Component {
    render() {
        let {player} = this.props;

        return (
            <tr className={'player'}>
                <td>
                    <Link to={`/players/${player.username}`}>
                        <img src={player.image_url} className={'player__image'} alt="" height={'64'} width={'64'}/>
                        <span className="player__name">{player.name}</span>
                    </Link>
                </td>
                <td className="player__score text-centered">
                    {player.score}
                </td>
            </tr>
        );
    }
};
