import React, {Component} from 'react';
import Layout from './Layout';

import '../scss/App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Materialize from 'materialize-css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            layoutValue: 'l'
        };
    }

    componentDidMount() {
        // get a reference to the materialize after the component has mounted
        Materialize.AutoInit();
    }


    //Trigger when user changes the layout selector
    onChange(e) {
        this.setState({
            layoutValue: e.target.value
        })
    }


    render() {
        return (
            <div className="container app">
                <div className="selector-wrapper">
                    <div className="center" id="selector-title">
                        Please select you layout :
                    </div>
                    <div className="input-field" id="layout-selector">
                        <select value={this.state.value} onChange={this.onChange.bind(this)}>
                            <option value="select">Choose your layout</option>
                            <option value="xl">XL</option>
                            <option value="2xl">2XL</option>
                            <option value="4l">4L</option>
                            <option value="xl/2l">XL/2L</option>
                            <option value="xl/l/2sm">XL/L/2SM</option>
                            <option value="2xl/4l/3sm">2XL/4L/3SM</option>
                            <option value="xl/l/5sm">XL/L/5SM</option>
                        </select>
                    </div>
                </div>
                {/* send the layout that user select's to the Layout component via Props  */}
                <Layout layoutType={this.state.layoutValue}/>
            </div>
        )
    }
}

export default App;
