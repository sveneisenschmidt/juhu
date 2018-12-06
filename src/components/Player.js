import {Component} from "react";
import {Link, Route} from "react-router-dom";
import React from "react";

export default class Player extends Component {
    render() {
        const player = this.props.player;

        return (
            <div>
                <Link to={`/players/${player.username}`}>
                    <img src={player.image_url} alt="" height={'32'} width={'32'}/>
                    {player.name}
                </Link>
            </div>
        );
    }
};
