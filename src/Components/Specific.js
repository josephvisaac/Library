import React, { useState } from 'react'
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'
// import React from 'react'

function Specific(props) {
    console.log(props.location.pathname)
    
    return (
        <div>
    {/* <a href= {`https://openlibrary.org/works${props.location.pathname}`} rel="link">YESSSSSSS</> */}
         {/* <Redirect to = {`../https://openlibrary.org/works${props.location.pathname}`} /> */}
         { window.location.href = `https://openlibrary.org/works${props.location.pathname }`}
        </div>
    )
}

export default Specific

// class Specific extends React.Component {
    // state = {
    //     drama: [this.props]
    // }
   
    // componentDidMount() {
    //     axios({ method: 'GET', url: `http://openlibrary.org/works/OL362695W`}).then(res => {
    //         this.setState({ drama: res.data.works })
    //     })
    //     console.log(drama)
    // }



//     render() {
//         // let code = ''
//         console.log('here are the props: ',this.props)
//         return (
//             <div>

//             </div>
//         )
//     }
// }

// export default Specific
