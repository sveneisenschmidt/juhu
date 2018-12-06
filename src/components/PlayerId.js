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
            <section className={'player container with-title'}>
                <h2 className={'title player__name'}>{this.state.player.name}</h2>
                <div className="message -left">
                    <i className="bcrikko"></i>
                    <div className="balloon from-left">
                        <p>Hello {this.state.player.name}, you have
                            <span className="player__score">{this.state.player.score}</span> points, well done!
                        </p>
                    </div>
                </div>
                <img src={this.state.player.image_url} className={'player__image'} alt="" height={'64'} width={'64'}/>

            </section>
        );
    }
};
