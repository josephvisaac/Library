
import Home from './Components/Home';
import Table from './Components/Table';
import './Components/testedcss.css'
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Drama from './Components/Drama'

import React, { Component } from 'react'
import Specific from './Components/Specific';

export default class App extends Component {

  state = {
    Books: []
  }



  componentDidMount() {
    axios.get(`http://openlibrary.org/subjects/drama.json?limit=50`, {
    
    
    }
    ).then(result => {
      console.log(result);
      this.setState({ Books: result.data })
    })
  }

  


  render() {




    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Table' component={Table} />
          <Route exact path='/drama' component={Drama} />
          <Route exact path='/:id' render={(props) => <Specific {...props}  />} />
         
        </Switch>


        

      </div>
    )
  }
}









