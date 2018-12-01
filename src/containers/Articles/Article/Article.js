import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Img1 from './../../../img/img1.jpg';
import Img2 from './../../../img/img2.jpg';
import Img3 from './../../../img/img3.jpg';
import './Article.css';
const Article = (match) => {
    let id = '';
    const date = new Date().toDateString();
    if (match) {
        id = match.match.params.id;
    }
    return (
        <div class="row">
            <div class="col-6-app">
                <h3>Product detail with id {id}</h3>
                <p>Ipsum cum sagittis ullamcorper dapibus dolor vitae?</p>
                <p>Published Date:  {date}</p>
            </div>
            <div class="col-6-app">
                <Carousel>
                    <div>
                        <img src={Img1} />
                        <p className="legend">Image 1</p>
                    </div>
                    <div>
                        <img src={Img2} />
                        <p className="legend">Image 2</p>
                    </div>
                    <div>
                        <img src={Img3} />
                        <p className="legend">Image 3</p>
                    </div>
                </Carousel>
            </div>
        </div>

    )
}

export default Article;