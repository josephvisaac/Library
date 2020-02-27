import React, { Component } from 'react'
import axios from 'axios'
import Specific from './Specific'
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
export default class Romance extends Component {

    state = {
        romanceBooks: []
    }



    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/http://openlibrary.org/subjects/romance.json?limit=50`,
        ).then(result => {
              console.log(result);
            this.setState({ romanceBooks: result.data.works })
            //   console.log(this.state.Books[0])
        })
    }






    render() {


        // https://vignette.wikia.nocookie.net/powerlisting/images/c/c6/Fantasy_World.jpeg/revision/latest?cb=20160210204714

        return (
            <div  >
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                <link href="https://raw.githubusercontent.com/daneden/animate.css/master/animate.css" rel="stylesheet" />
            <Link to = '/table' className='back ' >Back</Link> 
            
            <div className="carousel-inner">
                <div className="col-md-7 col-12 order-md-1 order-2 downwards-text">
                    <h4 className='green title-genre'>Romance
                                            </h4>
                    <p className='darker-color'>     
                    
                      {this.state.romanceBooks.map(book => {
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
