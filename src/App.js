
import Home from './Components/Home';
import Table from './Components/Table';
import './Components/testedcss.css'
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Drama from './Components/Drama'
import History from './Components/History'
import React, { Component } from 'react'
import Specific from './Components/Specific';
import Religion from './Components/Religion';
import Love from './Components/Love';
import Music from './Components/Music';
import Fantasy from './Components/Fantasy';
import Medicine from './Components/Medicine';
import Children from './Components/Children'
import Romance from './Components/Romance'
import Science from './Components/Science'
export default class App extends Component {

  // state = {
  //   Books: []
  // }



  // componentDidMount() {
  //   axios.get(`http://openlibrary.org/subjects/drama.json?limit=50`, {
    
    
  //   }
  //   ).then(result => {
  //     console.log(result);
  //     this.setState({ Books: result.data })
  //   })
  // }

  


  render() {




    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Table' component={Table} />
          <Route exact path='/drama' component={Drama} />
          <Route exact path='/history' component={History} />
          <Route exact path='/religion' component={Religion} />
          <Route exact path='/love' component={Love} />
          <Route exact path='/music' component={Music} />
          <Route exact path='/fantasy' component={Fantasy} />
          <Route exact path='/medicine' component={Medicine} />
          <Route exact path='/children' component={Children} />
          <Route exact path='/romance' component={Romance} />
          <Route exact path='/science' component={Science} />
          <Route exact path='/:id' render={(props) => <Specific {...props}  />} />
         
        </Switch>


        

      </div>
    )
  }
}









