import React from 'react';
import ReactDOM from 'react-dom';
import Wheel from './wheel';


export default class SW extends React.Component {
    constructor() {
        super();
        this.places = ['Meet Paul!!!', 'Try Again :C', 'Meet Paul!!!', 'Try Again :C', 'Meet Paul!!!', 'Try Again :C '];
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
ReactDOM.render(<SW/>, rootElement);