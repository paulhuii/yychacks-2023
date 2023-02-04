import React from 'react';
import ReactDOM from 'react-dom';

import Wheel from './wheel';

import './SpinningWheel.css';

export class SW extends React.Component {
    constructor() {
        super();
        this.places = ['Free Coffee', 'Free Donut', 'Free House', 'Meet and Greet with Paul', 'Free Sushi ', 'Flames Tickets'];
    }

    render() {
        return (
            <div className="App">
                <h1>Spin to Win!!!</h1>
                <Wheel items={this.places} />
            </div>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<SW />, rootElement);

export default SW;
