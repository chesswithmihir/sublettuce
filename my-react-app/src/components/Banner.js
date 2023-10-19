import React from 'react';

const Banner = () => {
  return (
    <div id="banner-wrapper">


      {/* <div id="logo">
        <h1><a href="/">SubLettuce</a></h1>
      </div> */}


      {/* <div id = "banner"> */}
        {/* <p>SubLettuce</p> */}
      {/* </div> */}

      <div id="banner" className="box container">
        <div className="row">

          <div className="col-7 col-12-medium">
            <h2>Subleasing, made easy.</h2>
            {/* <p>Streamlined, centralized. Student-run, student-centered.</p> */}

            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}

            <input type="text" />
          </div>
          <div className="col-5 col-12-medium">
            <ul>
              <li><a href="#" className="button large icon solid fa-arrow-circle-right">Ok let's go</a></li>
              <li><a href="#" className="button alt large icon solid fa-question-circle">More info</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
