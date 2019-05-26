import React, {Component} from 'react';
import './App.css';
import Main from './components/page/Main';
import MyAppBar from "./components/MyAppBar";
import MyFooter from "./components/Myfooter";

class App extends Component {
    render() {
        return (
            <div>
                <MyAppBar/>
                <Main/>
                <MyFooter/>
            </div>
        )
    }
}

export default App;
