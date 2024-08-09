
function Home(){
    return(

        <>
       
            <h1>Music World</h1>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." height={600} />
                    </div>
                    <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." height={600}/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." height={600}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        <div className="row" style={{marginTop:"15px"}}>
            <div className="col-md-4 mb-4" >
                <div className="card" style={{backgroundImage:'url(" https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600")', color:"white"}}>
                <audio controls className="w-100">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                </audio>
                <div className="card-body">
                    <h5 className="card-title">In the Lonely Hour</h5>
                    <p className="card-text">Artist: Sam Smith</p>
                    <p className="card-text">Release Date:  2014-05-26</p>                      
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            View Details
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Ismart</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://cdn.123telugu.com/photos/wp-content/uploads/2019/07/ismart-1.jpg" alt="" height={"500px"} width={"465px"}/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card" style={{backgroundImage:'url(" https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600")', color:"white"}}>
                <audio controls className="w-100">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                </audio>
                <div className="card-body">
                    <h5 className="card-title">In the Lonely Hour</h5>
                    <p className="card-text">Artist: Sam Smith</p>
                    <p className="card-text">Release Date:  2014-05-26</p>                      
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            View Details
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Ismart</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://cdn.123telugu.com/photos/wp-content/uploads/2019/07/ismart-1.jpg" alt="" height={"500px"} width={"465px"}/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card" style={{backgroundImage:'url(" https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600")', color:"white"}}>
                <audio controls className="w-100">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                </audio>
                <div className="card-body">
                    <h5 className="card-title">In the Lonely Hour</h5>
                    <p className="card-text">Artist: Sam Smith</p>
                    <p className="card-text">Release Date:  2014-05-26</p>                      
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            View Details
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Ismart</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://cdn.123telugu.com/photos/wp-content/uploads/2019/07/ismart-1.jpg" alt="" height={"500px"} width={"465px"}/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>

        <div className="row" >
            <div className="col-md-4 mb-4">
                <div className="card" style={{backgroundImage:'url(" https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600")', color:"white"}}>
                <audio controls className="w-100">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                </audio>
                <div className="card-body">
                    <h5 className="card-title">In the Lonely Hour</h5>
                    <p className="card-text">Artist: Sam Smith</p>
                    <p className="card-text">Release Date:  2014-05-26</p>                      
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            View Details
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Ismart</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://cdn.123telugu.com/photos/wp-content/uploads/2019/07/ismart-1.jpg" alt="" height={"500px"} width={"465px"}/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card" style={{backgroundImage:'url(" https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600")', color:"white"}}>
                <audio controls className="w-100">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                </audio>
                <div className="card-body">
                    <h5 className="card-title">In the Lonely Hour</h5>
                    <p className="card-text">Artist: Sam Smith</p>
                    <p className="card-text">Release Date:  2014-05-26</p>                      
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            View Details
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Ismart</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://cdn.123telugu.com/photos/wp-content/uploads/2019/07/ismart-1.jpg" alt="" height={"500px"} width={"465px"}/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card" style={{backgroundImage:'url(" https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600")', color:"white"}}>
                <audio controls className="w-100">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                </audio>
                <div className="card-body">
                    <h5 className="card-title">In the Lonely Hour</h5>
                    <p className="card-text">Artist: Sam Smith</p>
                    <p className="card-text">Release Date:  2014-05-26</p>                      
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            View Details
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Ismart</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://cdn.123telugu.com/photos/wp-content/uploads/2019/07/ismart-1.jpg" alt="" height={"500px"} width={"465px"}/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>


        <div className="row" >
            <div className="col-md-4 mb-4">
                <div className="card" style={{backgroundImage:'url(" https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600")', color:"white"}}>
                <audio controls className="w-100">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                </audio>
                <div className="card-body">
                    <h5 className="card-title">In the Lonely Hour</h5>
                    <p className="card-text">Artist: Sam Smith</p>
                    <p className="card-text">Release Date:  2014-05-26</p>                      
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            View Details
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Ismart</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://cdn.123telugu.com/photos/wp-content/uploads/2019/07/ismart-1.jpg" alt="" height={"500px"} width={"465px"}/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card" style={{backgroundImage:'url(" https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600")', color:"white"}}>
                <audio controls className="w-100">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                </audio>
                <div className="card-body">
                    <h5 className="card-title">In the Lonely Hour</h5>
                    <p className="card-text">Artist: Sam Smith</p>
                    <p className="card-text">Release Date:  2014-05-26</p>                      
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            View Details
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Ismart</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://cdn.123telugu.com/photos/wp-content/uploads/2019/07/ismart-1.jpg" alt="" height={"500px"} width={"465px"}/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card" style={{backgroundImage:'url(" https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600")', color:"white"}}>
                <audio controls className="w-100">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                </audio>
                <div className="card-body">
                    <h5 className="card-title">In the Lonely Hour</h5>
                    <p className="card-text">Artist: Sam Smith</p>
                    <p className="card-text">Release Date:  2014-05-26</p>                      
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            View Details
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Ismart</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://cdn.123telugu.com/photos/wp-content/uploads/2019/07/ismart-1.jpg" alt="" height={"500px"} width={"465px"}/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>


        <div className="row" >
            <div className="col-md-4 mb-4">
                <div className="card" style={{backgroundImage:'url(" https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600")', color:"white"}}>
                <audio controls className="w-100">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                </audio>
                <div className="card-body">
                    <h5 className="card-title">In the Lonely Hour</h5>
                    <p className="card-text">Artist: Sam Smith</p>
                    <p className="card-text">Release Date:  2014-05-26</p>                      
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            View Details
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Ismart</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://cdn.123telugu.com/photos/wp-content/uploads/2019/07/ismart-1.jpg" alt="" height={"500px"} width={"465px"}/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card" style={{backgroundImage:'url(" https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600")', color:"white"}}>
                <audio controls className="w-100">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                </audio>
                <div className="card-body">
                    <h5 className="card-title">In the Lonely Hour</h5>
                    <p className="card-text">Artist: Sam Smith</p>
                    <p className="card-text">Release Date:  2014-05-26</p>                      
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            View Details
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Ismart</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://cdn.123telugu.com/photos/wp-content/uploads/2019/07/ismart-1.jpg" alt="" height={"500px"} width={"465px"}/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card" style={{backgroundImage:'url(" https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600")', color:"white"}}>
                <audio controls className="w-100">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                </audio>
                <div className="card-body">
                    <h5 className="card-title">In the Lonely Hour</h5>
                    <p className="card-text">Artist: Sam Smith</p>
                    <p className="card-text">Release Date:  2014-05-26</p>                      
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            View Details
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Ismart</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="https://cdn.123telugu.com/photos/wp-content/uploads/2019/07/ismart-1.jpg" alt="" height={"500px"} width={"465px"}/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>


        
        
      
      


        </>
    )
 }

 export default Home;