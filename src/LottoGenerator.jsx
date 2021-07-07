import React from "react";
import "./LottoGenerator.css";

class LottoGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Lotto 6 / 49",
            message: "Generating lucky numbers",
            objKey: [],
            specialNum: null,
        };
    }

    reset = () => {
        this.setState({ objKey: [], specialNum: null });
    };

    generate = () => {
        const emptyArrayOfSix = Array(6);
        const randomNumOfSix = emptyArrayOfSix
            .fill()
            .map(() => Math.floor(Math.random() * 50) + 1);

        const lastChild = Math.floor(Math.random() * 10) + 1;
        const randomNumOfSeven = [...randomNumOfSix, lastChild];

        this.setState(this.setState({ objKey: randomNumOfSeven }));
    };

    render() {
        return (
            <div className="lotto">
                <h1>{this.state.title}</h1>
                <p>{this.state.message}</p>
                <div className="big-box">
                    {this.state.objKey.map((n) => (
                        <span className="box">{n}</span>
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
