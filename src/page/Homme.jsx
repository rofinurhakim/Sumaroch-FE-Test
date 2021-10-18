import React from 'react'
import '../assets/style/style.scss'
import { useHistory } from 'react-router'

const Homme = () => {
    const history = useHistory()
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <img style={{width:'100%'}} src="https://wallpaperaccess.com/full/2897366.jpg" alt="" />
                    <div className="bg">
                  
                    </div>
                </div>
                <div className="col-md-3 btn">
                    <p>Welcome To Mobilku</p>
                    <button onClick={() => history.push ('/list')}>Click Here</button>

                </div>
            </div>
           
        </div>
    )
}



export default Homme 