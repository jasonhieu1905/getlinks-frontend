import React from 'react';
import './Articles.css';
import imgSrc1 from '../../img/col-1-img.png';
import imgSrc2 from '../../img/col-2-img.png';
import imgSrc3 from '../../img/col-3-img.png';
import { Link, Route } from 'react-router-dom';

class Articles extends React.Component {

    state = {
        articles: [
            {
                imgSrc: imgSrc1,
                title: 'Scalable',
                description: 'Egestas, blandit luctus lacinia himenaeos non!'
            },
            {
                imgSrc: imgSrc2,
                title: 'Instant',
                description: 'Ipsum cum sagittis ullamcorper dapibus dolor vitae?'
            },
            {
                imgSrc: imgSrc3,
                title: 'Something',
                description: 'Croissant ice cream macaroon cake.'
            },
            {
                imgSrc: imgSrc2,
                title: 'Scalable',
                description: 'Egestas, blandit luctus lacinia himenaeos non!'
            },
            {
                imgSrc: imgSrc3,
                title: 'Instance',
                description: 'Croissant ice cream macaroon cake.'
            },
            {
                imgSrc: imgSrc1,
                title: 'Something',
                description: 'Ipsum cum sagittis ullamcorper dapibus dolor vitae?'
            }
        ]
    };

    getArticleContent = (item, index) => {
        return (<div class="col-4-app wow fadeInRight">
        <Link style={{ textDecoration: 'none' }} to={`articles/${index}`}>
            <img src={item.imgSrc} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </Link></div>)
    }

    render() {
        let articles = [];
        for(let i = 0; i < this.state.articles.length; i = i+3) {
            if(i % 3 == 0) {
                const article1 = this.getArticleContent(this.state.articles[i], i+1);
                const article2 = this.getArticleContent(this.state.articles[i+1], i+2);
                const article3 = this.getArticleContent(this.state.articles[i+2], i+3);
                articles.push(<div class="row">
                    {article1}
                    {article2}
                    {article3}
                </div>) 
            }
        }
       
        return (
            <section id="app-articles">
                <div class="container">
                    <h2 class="app-articles">Articles List</h2>
                    <p class="p-features">Donut sesame snaps donut pie dessert chupa chups wafer dragée. Gummies fruitcake chupa chups cookie liquorice. Chocolate pudding dessert jelly fruitcake tart jelly wafer. Sweet roll carrot cake croissant.</p>
                    {articles}
                </div>
            </section>
        )
    }
}

export default Articles;