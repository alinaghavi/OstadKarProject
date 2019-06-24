import React, {Component} from 'react';
import '../scss/App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Materialize from 'materialize-css';

class App extends Component {

    componentDidMount() {
        // get a reference to the materialize after the component has mounted
        Materialize.AutoInit();
    }

    render() {
        return (
            <div className="App">
            </div>
        )
    }
}

export default App;
