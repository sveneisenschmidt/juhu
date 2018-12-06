import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Overview from "./components/Overview";
import Leaderboard from "./components/Leaderboard";
import Achievements from "./components/Achievements";
import './App.css';
import LinkButton from "./components/LinkButton";
import PlayerId from "./components/PlayerId";

const ROUTES = {
    OVERVIEW: "/",
    PLAYERS: "/players",
    LEADERBOARD: "/leaderboard",
    ACHIEVEMENTS: "/achievements"
};

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <section className={'container with-title'}>
                        <h2 className={'title'}>Menu</h2>
                        <div>
                            <LinkButton to={ROUTES.OVERVIEW} className="overview btn">
                                Overview
                            </LinkButton>
                            <LinkButton to={ROUTES.LEADERBOARD} className="leaderboard btn is-success">
                                Leaderboard
                            </LinkButton>
                            <LinkButton to={ROUTES.ACHIEVEMENTS} className="achievements btn is-warning">
                                Achievements
                            </LinkButton>
                        </div>
                    </section>
                    <Route exact path={ROUTES.OVERVIEW} component={Overview}/>
                    <Route path={ROUTES.LEADERBOARD} component={Leaderboard}/>
                    <Route path={ROUTES.ACHIEVEMENTS} component={Achievements}/>
                    <Route path={`${ROUTES.PLAYERS}/:playerId`} component={PlayerId}/>
                </div>
            </Router>
        );
    }
}

export default App;
