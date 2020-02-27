import React, { Component } from 'react'
import axios from 'axios'
import Specific from './Specific'
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
export default class History extends Component {

    state = {
        historyBooks: []
    }



    componentDidMount() {
        axios.get(`http://openlibrary.org/subjects/history.json?limit=50`,
        ).then(result => {
              console.log(result);
            this.setState({ historyBooks: result.data.works })
            //   console.log(this.state.Books[0])
        })
    }






    render() {




        return (
            <div  >
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                <link href="https://raw.githubusercontent.com/daneden/animate.css/master/animate.css" rel="stylesheet" />
            <Link to = '/table' className='back ' >Back</Link> 
            <img alt='history ' className = 'moveright hsize img_music history_adown' src = 'https://theteachersdigest.com/wp-content/uploads/2014/07/History.png' />    
            
            <div className="carousel-inner">
                <div className="col-md-7 col-12 order-md-1 order-2 downwards-text">
                    <h4 className='green'>Historic
                                            </h4>
                    <p className='darker-color'>     
                    
                      {this.state.historyBooks.map(book => {
                        return (

                            <p key={book.cover_edition_key} >
                            <a className = 'link-color' href={`https://openlibrary.org/works/${book.cover_edition_key}`}> { book.title}</a> <br/>
                                {/* <Link to={`/${book.cover_edition_key}`}> */}
                                {/* {book.title}  </Link> <br /> */}
                                Author: {book.authors[0].name} <br />
                               

                                Subject: <li>{book.subject[0]}</li>
                                <li>{book.subject[1]}</li>  <br />
                            </p>

                        )
                    })}</p>


</div>


                </div>






            </div>
        )
    }
}
