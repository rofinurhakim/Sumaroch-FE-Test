import React from "react";
import '../assets/style/search.scss'



const Search = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5-d-flex input">
                    <input type="text" placeholder="Cari mobil..." />
                    <button>Seacrh</button>
                </div>
            </div>
        </div>
    )
} 




export default Search