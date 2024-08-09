import React from 'react';

function About(){
    return(
        <>
        <div style={{backgroundImage:'url("https://images.pexels.com/photos/1101122/pexels-photo-1101122.jpeg?auto=compress&cs=tinysrgb&w=600")'}}>
        <div className="container" >
         <h2>About Us</h2>
            <div className="row" style={{paddingTop:"20px"}}>
                <div className="col-md-6"><img src=" https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." height={300}  />
               </div>
                <div className="col-md-6">
                   <strong><i>Welcome to MelodyHub, your ultimate destination for all things music!</i></strong> 
                    <p> At MelodyHub, we are passionate about bringing you the latest and greatest in the music world. Our mission is to provide music enthusiasts with comprehensive coverage of their favorite artists, albums, and genres. From exclusive interviews to in-depth reviews, we strive to offer content that resonates with music lovers of all kinds.</p></div>
            </div>

             <h2>Our Team</h2>
            <div className="row">
                <div className="col-md-6">
                    <p> Our team consists of dedicated music writers, critics, and enthusiasts who are committed to sharing their love of music with you. Each member brings their unique perspective and expertise to our content, ensuring a diverse range of articles and insights.</p></div>
                <div className="col-md-6"><img src=" https://images.pexels.com/photos/3569451/pexels-photo-3569451.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." height={300}/></div>
            </div>

            <h2>What We Offer</h2>
            <div className="row">
            <div className="col-md-6">
                <img src="https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." height={300}/></div>
            <div className="col-md-6"> <ul>
        <li>Curated playlists to suit every mood and occasion</li>
        <li>Exclusive artist interviews and behind-the-scenes content</li>
        <li>Comprehensive album reviews and music news</li>
        <li>Interactive features like live listening parties and music maps</li>
      </ul></div>
            </div>

            <h2>Get In Touch</h2>
            <div className="row">
                <div className="col-md-6"><p> We love hearing from our readers! Feel free to reach out to us through our contact page for any questions, feedback, or collaboration opportunities.</p></div>
                <div className="col-md-6"><img src="https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." height={300}/></div>
            </div>

        </div>
        </div>
        </>
)
}

export default About;
