import React, {Component} from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch, Link} from "react-router-dom";


const HatsPage = (props) => {
   // console.log(props)
return (
    <div>
        <h1>HATS PAGE</h1>

        <button onClick={()=>props.history.push('/topics')}> topics</button>
    </div>
)
}


const TopicDetail = (props) => {
    console.log(props)
    return(
    <div>
        <Link to={`${props.match.url}/13`}>New link to topic 12</Link>
        <Link to={`${props.match.url}/15`}>New link to topic 15</Link>
        <Link to={`${props.match.url}/17`}>New link to topic 17</Link>

        <h1>TopicDetail PAGE {props.match.params.topicId} </h1>
    </div>
    )}

const TopicsList = () => (
    <div>
        <h1>TopicsList PAGE</h1>
    </div>
)

class App extends Component {


    render() {
        return (<>

                <Link to='/'>HomePage</Link> { }
                <Link to='/hats'>HatsPage</Link>{  }
                <Link to='/topics/44'>TopicDetail</Link>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route  path="/hats" component={HatsPage}/>
                    <Route path='/topics/:topicId' component={TopicDetail} />
                    <Route path='/topics' component={TopicsList} />

                </Switch>


            </>
        )
    }
}

export default App;
