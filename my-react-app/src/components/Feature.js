import React from 'react';
import '../css/Carousel.css';


const Feature = ( content ) => {
  return (
   
      // {console.log(content)}
      // <div className="col-9 col-4-medium">

          <section className="box feature getBig">    

            <div className="content">
              <a href="#" className="image featureImg">
                <img src={content.content.pic} alt="" />
              </a>

              <div className="featureText">
                  {/* <header> */}
                    <h2> {content.content.address} </h2>
                    <p>{content.content.price}</p>
                  {/* </header> */}
                <p>{content.content.description}</p>
                </div>
              </div>

          </section>
      // </div>
  );
};

export default Feature;
