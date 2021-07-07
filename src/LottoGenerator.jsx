import React from "react";
import "./LottoGenerator.css";

class LottoGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Lotto 6 / 49",
            message: "Generating lucky numbers",
            myKey: [],
            specialNum: null,
        };
    }

    reset = () => {
        this.setState({ myKey: [], specialNum: null });
    };

    generate = () => {
        const emptyArrayOfSix = Array(6);
        const randomNumOfSix = emptyArrayOfSix
            .fill()
            .map(() => Math.floor(Math.random() * 50) + 1);
        this.setState(
            this.setState({ myKey: randomNumOfSix})
        );
    };

    render() {
        return (
            <div className="lotto">
                <h1>{this.state.title}</h1>
                <p>{this.state.message}</p>
                <div>
                    {this.state.myKey.map((x) => (
                        <span className="box">{x}</span>
                    ))}
                </div>

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
