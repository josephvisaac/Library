import React, { Component } from 'react'
import axios from 'axios'
import Specific from './Specific'
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
export default class Religion extends Component {

    state = {
        religionBooks: []
    }



    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/http://openlibrary.org/subjects/religion.json?limit=50`,
        ).then(result => {
            console.log(result);
            this.setState({ religionBooks: result.data.works })
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
                <Link to='/table' className='back ' >Back</Link>
                <img alt='history ' className = 'moveright img_music' src = 'https://skete.com/wp-content/uploads/CS1289lg.jpg' />    
                <img alt='history ' className = 'movemoreright small img_music' src = 'https://www.monasteryicons.com/images/popup/st-augustine-of-hippo-icon-703.jpg' />    

                <div className="carousel-inner">
                    <div className="col-md-7 col-12 order-md-1 order-2 downwards-text">
                        <h4 className='yellow'>Religion
                                            </h4>
                        <p className='darker-color'>

                            {this.state.religionBooks.map(book => {
                                return (

                                    <p key={book.cover_edition_key} >
                                        <a className='link-color' href={`https://openlibrary.org/works/${book.cover_edition_key}`}> {book.title}</a> <br />
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
