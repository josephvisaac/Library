import React, { Component } from 'react'
import axios from 'axios'
import Specific from './Specific'
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
export default class Drama extends Component {

    state = {
        dramaBooks: []
    }



    componentDidMount() {
        axios.get(`http://openlibrary.org/subjects/drama.json?limit=50`,
        ).then(result => {
            //   console.log(result);
            this.setState({ dramaBooks: result.data.works })
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
            <img alt='lovepic' className = 'moveright hsize img_music historyone' src = 'https://upload.wikimedia.org/wikipedia/commons/8/82/Thespis_-_Illustrated_London_News_Jan_6_1872.png' />    
            <img alt='lovepic' className = 'moveright hsize movemoredown img_music' src = 'https://cdn.images.express.co.uk/img/dynamic/38/590x/hipermestra-808637.jpg' />    

                    <div>
                    <img alt='lovepic' className = 'moveright hsize  ' src = 'https://cdn.images.express.co.uk/img/dynamic/38/590x/hipermestra-808637.jpg' />    
            <img alt='lovepic' className = 'moveright hsize  ' src = 'https://cdn.images.express.co.uk/img/dynamic/38/590x/hipermestra-808637.jpg' />    
            <img alt='lovepic' className = 'moveright hsize ' src = 'https://cdn.images.express.co.uk/img/dynamic/38/590x/hipermestra-808637.jpg' />    
            <img alt='lovepic' className = 'moveright hsize  ' src = 'https://cdn.images.express.co.uk/img/dynamic/38/590x/hipermestra-808637.jpg' />    
            <img alt='lovepic' className = 'moveright hsize  ' src = 'https://cdn.images.express.co.uk/img/dynamic/38/590x/hipermestra-808637.jpg' />    
            <img alt='lovepic' className = 'moveright hsize  ' src = 'https://cdn.images.express.co.uk/img/dynamic/38/590x/hipermestra-808637.jpg' />    
            <img alt='lovepic' className = 'moveright hsize  ' src = 'https://cdn.images.express.co.uk/img/dynamic/38/590x/hipermestra-808637.jpg' />    
            <img alt='lovepic' className = 'moveright hsize  ' src = 'https://cdn.images.express.co.uk/img/dynamic/38/590x/hipermestra-808637.jpg' />    


                    </div>
            


            <div className="carousel-inner">
                <div className="col-md-7 col-12 order-md-1 order-2 downwards-text">
                    <h4 className='pink'>Drama
                                            </h4>
                    <p className='darker-color'>     
                    
                      {this.state.dramaBooks.map(book => {
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
