import React from "react";
import "./LottoGenerator.css";

class LottoGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Lotto 6 / 49",
            message: "Generating lucky numbers",
        };
    }

    reset = () => {
        this.setState(console.log("reset"));
    };

    generate = () => {
        this.setState(console.log("generate"));
    };

    render() {
        return (
            <div className="lotto">
                <h1>{this.state.title}</h1>
                <p>{this.state.message}</p>
                <ul className="numbers">
                    <li>#n</li>
                    <li>#n</li>
                    <li>#n</li>
                    <li>#n</li>
                    <li>#n</li>
                    <li>#n</li>
                    <li>#n</li>
                </ul>
                <button className="button one" onClick={this.reset}>
                    Reset
                </button>
                <button className="button two" onClick={this.generate}>
                    Show me lucky numbers
                </button>
            </div>
        );
    }
}

export default LottoGenerator;
