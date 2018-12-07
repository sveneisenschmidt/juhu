import React, {Component} from "react";
import './Player.css';
import Apiservice from "../util/apiservice";
import LinkButton from "./LinkButton";

export default class PlayerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player: {},
            transientAchievements: [],
            personalActivities: [],
            personalAchievements: []
        };
    }

    componentDidMount() {
        let username = this.props.match.params.playerId;

        Apiservice.getPlayer(username).then(response => {
            this.setState({
                player: response.data
            });
        });

        Apiservice.getTransientAchievements(username).then(response => {
            this.setState({
                transientAchievements: response.data
            });
        });

        Apiservice.getPersonalActivities(username).then(response => {
            this.setState({
                personalActivities: response.data
            });
        });

        Apiservice.getPersonalAchievements(username).then(response => {
            this.setState({
                personalAchievements: response.data
            });
        });
    }

    render() {
        return (
            <section className={'player container with-title'}>
                <h2 className={'title'}>Player</h2>

                <div className="containers">
                    <div className={'container with-title'}>
                        <p className="title">{this.state.player.name}</p>
                        <img src={this.state.player.image_url} className={'player__image right'} alt="" height={'64'} width={'64'}/>
                        <ul className={''}>
                            <li>EXP: { this.state.player.score }</li>
                            <li>Level: { this.state.player.level }</li>
                        </ul>
                    </div>

                    {this.state.transientAchievements.length > 0 &&
                    <div className={'container with-title player__transient-achievements'}>
                        <p className="title">Progress</p>
                        <ul>
                            {this.state.transientAchievements.map(function(transientAchievements){
                                return (
                                    <li>
                                        <div className="player__transient-achievement">
                                            <p className="title">{transientAchievements.name}</p>
                                            <div className={'progress-bar'}>
                                                <div className={'progress-bar__bar'} style={{ width: `${transientAchievements.progress}%` }}>
                                                    {transientAchievements.progress}%
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    }

                    {this.state.personalAchievements.length > 0 &&
                    <div className={'container with-title player__personal-achievements'}>
                        <p className="title">Achievements</p>
                        <ul>
                            {this.state.personalAchievements.reverse().map(function (personalAchievement) {
                                return (
                                    <li className="player__personal-achievement">
                                        { personalAchievement.label }
                                        <p>{ personalAchievement.description }</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    }
                </div>

            </section>
        );
    }
};

/*               <div className="message from-left">
                    <i className="bcrikko"></i>
                    <div className="balloon from-left">
                        <p>Hello {this.state.player.name}, you have
                            <span className="player__score">{this.state.player.score}</span> points, well done!
                        </p>
                    </div>
                </div>
*/
