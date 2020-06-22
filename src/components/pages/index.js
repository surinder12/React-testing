import React from 'react';


export const Home = () => {
    return (

        <div className="Mainco-ntainer">
           
        <div className="container">
        
        
        <h1 className="text-center display-4 py-5 text-uppercase"> Welcome to my Project</h1>
        <p className="text-center">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </p>

        <div  className="about-us-session padding-top-100 padding-bottom-100">
              <div className="container">
                <div className="swin-sc swin-sc-title">
                  <p className="top-title"><span>About us</span></p>
                  <h3 className="title">We are Fooday </h3>
                </div>
                <div className="row">
                  <div className="col-md-6 colsm-12"><img src="../components/about.jpg" alt="" className="img img-responsive wow zoomIn"/></div>
                  <div className="col-md-6 col-sm-12">
                    <p className="des font-bold">WE HAVE THE GLORY BEGINING IN RESTAURANT BUSINESS WITH SOME UNIQUE FEATURED.</p>
                    <p className="des swin-margin-bottom-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ullam laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="swin-sc swin-sc-iconbox">
                      <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          <div className="item icon-box-01">
                            <div className="wrapper-icon"><i className="swin-icon-menu-1"></i></div>
                            <h4 className="icon-heading">FRESH MENU</h4>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          <div className="item icon-box-01">
                            <div className="wrapper-icon"><i className="swin-icon-noodles"></i></div>
                            <h4 className="icon-heading">EXCLUSIVE DISHES</h4>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          <div className="item icon-box-01">
                            <div className="wrapper-icon"><i className="swin-icon-wine"></i></div>
                            <h4 className="icon-heading">VARIOUS DRINK</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div> 
        
    );
}

export default Home;