import React from 'react'
import {Link} from 'react-router-dom'
function Table() {
    return (
        <div className = 'religionback'>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


            <link href="https://raw.githubusercontent.com/daneden/animate.css/master/animate.css" rel="stylesheet" />
            <Link to = '/' className='back ' >Back</Link> 
            <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="mask flex-center">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-7 col-12 order-md-1 order-2 downwards-text">
                                    
                                        <h4 className = 'slightly-up'>
                                            Filter</h4>
                                        <p className='darker-color'>by:</p>
                                        <div className = 'flex'>
                                        <Link to = '/drama' className='darker-color' >Drama </Link> 
                                        <Link to = '/history' className='darker-color' > Historic Docs</Link>   
                                        <Link to = '/religion' className='darker-color' > Religion</Link>   
                                        <Link to = '/love' className='darker-color' > Love </Link>   
                                        <Link to = '/music' className='darker-color' > Music </Link>  

                                        </div>
                                        <br/>
                                        <div className = 'flex'>
                                        <Link to = '/fantasy' className='darker-color' > Fantasy </Link>   
                                        <Link to = '/medicine' className='darker-color' > Medicine </Link>   
                                        <Link to = '/children' className='darker-color' > Children </Link>   
                                        <Link to = '/romance' className='darker-color' > Romance </Link>   
                                        <Link to = '/science' className='darker-color' > Science </Link>   
                                        </div>

                                       

                                        
                                        
                                       
                                        
                                        
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

export default Table
