import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Overview from "./components/Overview";
import Leaderboard from "./components/Leaderboard";
import Achievements from "./components/Achievements";
import './App.css';

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
                    <header>
                        <Link to={ROUTES.OVERVIEW} className="overview btn">
                            Overview
                        </Link>
                        <Link to={ROUTES.PLAYERS} className="players btn">
                            Players
                        </Link>
                        <Link to={ROUTES.LEADERBOARD} className="leaderboard btn">
                            Leaderboard
                        </Link>
                        <Link to={ROUTES.ACHIEVEMENTS} className="achievements btn">
                            Achievements
                        </Link>
                    </header>
                    <hr/>
                    <Route exact path={ROUTES.OVERVIEW} component={Overview}/>
                    <Route path={ROUTES.LEADERBOARD} component={Leaderboard}/>
                    <Route path={ROUTES.ACHIEVEMENTS} component={Achievements}/>
                </div>
            </Router>
        );
    }
}

export default App;