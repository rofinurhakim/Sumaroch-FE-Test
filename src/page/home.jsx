import React from "react";
import NAV from '../components/navbar'
import Search from "../components/search";
import { Carousel } from "react-bootstrap";
import '../assets/style/home.scss'
/*eslint-disable */


const HomePage = () => {
    
const dataMobil = [
    {
    "1d" : 1,
    "image": "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/gambar-toyota-alphardjpg.jpg",
    "title": "mobil1",
    "deksripsi":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
    },
    {
    "1d" : 1,
    "image": "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/gambar-toyota-alphardjpg.jpg",
    "title": "mobil2",
    "deksripsi":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
    },
    {
    "1d" : 1,
    "image": "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/gambar-toyota-alphardjpg.jpg",
    "title": "mobil3",
    "deksripsi":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
    },
    {
    "1d" : 1,
    "image": "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/gambar-toyota-alphardjpg.jpg",
    "title": "mobil4",
    "deksripsi":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
    },
    {
    "1d" : 1,
    "image": "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/gambar-toyota-alphardjpg.jpg",
    "title": "mobil5",
    "deksripsi":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
    },
    {
    "1d" : 1,
    "image": "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/gambar-toyota-alphardjpg.jpg",
    "title": "mobil6",
    "deksripsi":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
    }

]

  
 
    return(
        <div className="NAVbar">
                <NAV></NAV>
            <div className="container">
                <Search></Search>
            <div className="row content">
              <div className="col-md-7">

              <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn-2.tstatic.net/tribunnews/foto/bank/images/gambar-toyota-alphardjpg.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://tsoimageprod.azureedge.net/sys-master-hybrismedia/hf7/h91/8817879253022/4%20Alasan%20Memilih%20Mobil%20Hatchback.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>
              </div>
              <div className="col-md-3 contentRight">
                  <div className="card">
                      <div className="row">
                          <div className="col-md-6 choice">
                             <p>Beli</p>
                          </div>
                          <div className="col-md-6 choice">
                              <p>Jual</p>
                          </div>
                          <div className="col-md InputMob">
                              <p>Merek</p>
                              <input type="text" />
                          </div>
                          <div className="col-md InputMob">
                              <p>Model</p>
                              <input type="text" />
                          </div>
                          <div className="col-md InputMob">
                              <p>Tipe</p>
                              <input type="text" />
                          </div>
                          <div className="col-md InputMob">
                              <p>Tahun</p>
                              <input type="text" />
                          </div>
                          <div className="col-md InputMob">
                              <p>Transmisi</p>
                              <input type="text" />
                          </div>
                          <div className="col-md-btnsub">
                              <button>SUBMIT</button>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="listCard">
            <p>List Mobil</p>
        </div>
        <div className="featured">
            {dataMobil.map((value, index) => {
                return <div style={{width:'18rem'}} className='card' key={index}>
                <div  className="card-body">
                    <img style={{width:'98%'}} src={value.image} alt="mobil" />
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.deksripsi}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
            })}
        
        </div>
        
        </div>
        </div>
        
    )
}



export default HomePage