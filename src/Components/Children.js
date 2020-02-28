import React, { Component } from 'react'
import axios from 'axios'
import Specific from './Specific'
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
export default class Children extends Component {

    state = {
        childrenBooks: []
    }



    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/http://openlibrary.org/subjects/children.json?limit=50`,
        ).then(result => {
              console.log(result);
            this.setState({ childrenBooks: result.data.works })
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
            <img alt='lovepic' className = 'moveright img_music history_adown ' src = 'https://lh3.googleusercontent.com/proxy/84a2WNkJ4mECN-0bvph86m1lmKq7vuCYJC-4Pyk-Sc2yzcPYCwduYnhoUJrg6M3YGRLzccH2da0_0Na-TdoWL4FB1Naa1a7pvgvX' />    
            
            <div className="carousel-inner">
                <div className="col-md-7 col-12 order-md-1 order-2 downwards-text">
                    <h4 className='green title-genre'>Children
                                            </h4>
                    <p className='darker-color'>     
                    
                      {this.state.childrenBooks.map(book => {
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
