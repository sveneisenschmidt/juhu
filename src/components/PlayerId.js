import React, {Component} from "react";
import './Player.css';
import Apiservice from "../util/apiservice";

export default class PlayerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player: []
        };
    }

    componentDidMount() {
        let username = this.props.match.params.playerId;

        Apiservice.getPlayers(username).then(response => {
            this.setState({
                player: response.data
            });
        })
    }

    render() {
        return (
            <li className={'player'}>
                <img src={this.state.player.image_url} className={'player__image'} alt="" height={'64'} width={'64'}/>
                <span className="player__name">{this.state.player.name}</span>
                <span className="player__score">
                    {this.state.player.score}
                </span>
            </li>
        );
    }
};
