import React, {Component} from "react";
import './Player.css';
import Apiservice from "../util/apiservice";

export default class PlayerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player: {},
            transientAchievements: [],
            personalActivities: [],
            personalAchievements: [],
            personalActions: [],
            personalActionsUnique: []
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

        Apiservice.getPersonalActions(username).then(response => {
            let tmp = [];
            let personalActionsUnique = response.data
                .filter((personalAction) => {
                    if (tmp.indexOf(personalAction.name) < 0) {
                        tmp.push(personalAction.name);
                        return true;
                    }
                    return false;
                }).map((personalActionUnique) => {
                    return {
                        ...personalActionUnique,
                        count: response.data.filter((personalAction) => {
                            return personalActionUnique.name === personalAction.name;
                        }).length
                    };
                });

            this.setState({
                personalActions: response.data,
                personalActionsUnique
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
                            {this.state.transientAchievements.map(function(transientAchievement){
                                return (
                                    <li>
                                        <div className="player__transient-achievement">
                                            <img src={transientAchievement.image_url} className={'right'} alt="" height={'48'} width={'48'}/>
                                            <b>{transientAchievement.label}</b>
                                            <p>{ transientAchievement.description }</p>
                                            <div className={'progress-bar'}>
                                                <div className={'progress-bar__bar'} style={{ width: `${transientAchievement.progress}%` }}>
                                                    {transientAchievement.progress}%
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
                                        <img src={personalAchievement.image_url} className={'right'} alt="" height={'48'} width={'48'}/>
                                        <b>{ personalAchievement.label }</b>
                                        <p>{ personalAchievement.description }</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    }

                    {this.state.personalActionsUnique.length > 0 &&
                    <div className={'container with-title player__personal-achievements'}>
                        <p className="title">Actions</p>
                        <ul>
                            {this.state.personalActionsUnique.map(function (personalAction) {
                                return (
                                    <li className="player__personal-achievement">
                                        <img src={personalAction.image_url} className={'right'} alt="" height={'48'} width={'48'}/>
                                        <b>{ personalAction.label }</b> ({ personalAction.count }x)
                                        <p>{ personalAction.description }</p>
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
