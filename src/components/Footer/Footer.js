
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="col-4-footer">
                    <h4>Popular Posts</h4>
                    <ul class="ul-posts">
                        <li class="reddish-bg">I love donut <span class="block">bonbon cakes</span></li>
                        <li class="reddish-bg">Candy fruitcake biscuit chupa chups</li>
                        <li class="reddish-bg">Candy fruitcake biscuit chupa chups</li>
                    </ul>
                </div> 
                <div class="col-4-footer">
                     <h4>Suits on Twitter</h4>
                     <div class="ul-tweets">
                         <li>SadLex <span class="block smallText">10 hours ago</span></li>
                         <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                         <li>Follow us</li>
                     </div>
                </div>    
                <div class="col-4-footer">
                     <h4>About</h4>
                     <p class="p-about">Cheesecake tiramisu dragée gummies donut cotton candy ice cream I love halvah. Gummies croissant I love gummies gummies. Marshmallow I love gummies sugar plum jelly-o pie.</p>
                </div>       
            </div>    
        </footer>
    )
}

export default Footer;

