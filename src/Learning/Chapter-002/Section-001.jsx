import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mileage: 26.75 };
    }
    changeFuleState = (e) => {
        this.setState({ mileage: e.target.value });
    };
    render() {
        return (
            <>
                <p>Car </p>
                <p>Wheel {this.props.wheel} </p>
                <p>Color {this.props.color}</p>
                <p>No Plate {this.props.plate}</p>
                <p>
                    Mileage {this.state.mileage} <small>[24 - 34]</small>
                </p>
                <input
                    accessKey="m"
                    type="range"
                    name="milage"
                    id=""
                    min={24}
                    max={34}
                    value={this.state.mileage}
                    onChange={this.changeFuleState}
                    step={0.25}
                    // disabled={true}
                />
                <br />
                {this.props.children}
                <br />
            </>
        );
    }
}

export default Car;
