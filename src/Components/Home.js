
import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className = 'home'>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


            <link href="https://raw.githubusercontent.com/daneden/animate.css/master/animate.css" rel="stylesheet" />

            <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="mask flex-center">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-7 col-12 order-md-1 order-2 downwards-text">
                                        <h4>Book Encyclopedia 
                                            </h4>
                                        <p className='darker-color'>An expansive list of books is only a click away!</p>

                                        
                                        <Link to = '/table' className='darker-color' >Begin</Link> 
                                        
                                        
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Home
