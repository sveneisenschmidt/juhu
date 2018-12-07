import {Component} from "react";
import React from "react";
import Apiservice from "../util/apiservice";

export default class Overview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: {}
        };
    }

    componentDidMount() {
        Apiservice.getRandomQuote().then(response => {
            console.log(response);
            this.setState({
                quote: response.data
            });
        })
    }

    render() {
        return (
            <section className="container with-title">
                <h2 className={'title'}>Overview</h2>
                <p>
                    {this.state.quote.quote}<br />{this.state.quote.author}
                </p>
            </section>
        );
    }
};
