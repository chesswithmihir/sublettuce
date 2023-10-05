import React from 'react';

const About = () => {
  return (
    <div id="page-wrapper">

      {/* Header */}
      <div id="header-wrapper">
        <header id="header" className="container">
          {/* Your header content goes here */}
          {/* ... */}
        </header>
      </div>

      {/* Main */}
      <div id="main-wrapper">
        <div className="container">
          <div className="row gtr-200">
            <div className="col-4 col-12-medium">
              <div id="sidebar">

                {/* Sidebar */}
                <section>
                  <h3>About Us</h3>
                  <p>Subleasing college apartments is a headache. We are here to let you feel relaxed, 
                    confident, and successful in the subleasing process. We want to make subleasing 
                    easier than your college’s housing portal process. We want SubLettuce to be a 
                    social platform and gameify the rental process. Out values: accessibility, 
                    efficiency, the highest standards, integrity, community, and fun. 
                  </p>
                  <footer>
                    <a href="#" className="button icon solid fa-info-circle">Find places near me.</a>
                  </footer>
                </section>

                {/* <section>
                  <h3>Subheading</h3>
                  <ul className="style2">
                    <li><a href="#">Amet turpis, feugiat et sit amet</a></li>
                    <li><a href="#">Ornare in hendrerit in lectus</a></li>
                    <li><a href="#">Semper mod quis eget mi dolore</a></li>
                    <li><a href="#">Quam turpis feugiat sit dolor</a></li>
                    <li><a href="#">Amet ornare in hendrerit in lectus</a></li>
                    <li><a href="#">Semper mod quisturpis nisi</a></li>
                  </ul>
                </section> */}

              </div>
            </div>
            <div className="col-8 col-12-medium imp-medium">
              <div id="content">

                {/* Content */}
                <article>

                  <h2>Left Sidebar</h2>

                  <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus.
                    Praesent semper mod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat.
                    Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis nisi
                    consequat etiam lorem ipsum dolor sit amet nullam.</p>

                  <h3>More intriguing information</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus
                    justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem. Pellentesque lorem felis,
                    ultricies a bibendum id, bibendum sit amet nisl. Mauris et lorem quam. Maecenas rutrum imperdiet
                    vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor.
                    Etiam a lacus a lacus pharetra porttitor quis accumsan odio. Sed vel euismod nisi. Etiam convallis
                    rhoncus dui quis euismod. Maecenas lorem tellus, congue et condimentum ac, ullamcorper non sapien.
                    Donec sagittis massa et leo semper a scelerisque metus faucibus. Morbi congue mattis mi.
                    Phasellus sed nisl vitae risus tristique volutpat. Cras rutrum commodo luctus.</p>

                  <p>Phasellus odio risus, faucibus et viverra vitae, eleifend ac purus. Praesent mattis, enim
                    quis hendrerit porttitor, sapien tortor viverra magna, sit amet rhoncus nisl lacus nec arcu.
                    Suspendisse laoreet metus ut metus imperdiet interdum aliquam justo tincidunt. Mauris dolor urna,
                    fringilla vel malesuada ac, dignissim eu mi. Praesent mollis massa ac nulla pretium pretium.
                    Maecenas tortor mauris, consectetur pellentesque dapibus eget, tincidunt vitae arcu.
                    Vestibulum purus augue, tincidunt sit amet iaculis id, porta eu purus.</p>

                </article>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="footer-wrapper">
        <footer id="footer" className="container">
          <div className="row">
            <div className="col-3 col-6-medium col-12-small">

              {/* Links */}
              <section className="widget links">
                <h3>Random Stuff</h3>
                <ul className="style2">
                  <li><a href="#">Etiam feugiat condimentum</a></li>
                  <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
                  <li><a href="#">Sed porttitor cras in erat nec</a></li>
                  <li><a href="#">Felis varius pellentesque potenti</a></li>
                  <li><a href="#">Nullam scelerisque blandit leo</a></li>
                </ul>
              </section>

            </div>
            <div className="col-3 col-6-medium col-12-small">

              {/* Links */}
              <section className="widget links">
                <h3>Random Stuff</h3>
                <ul className="style2">
                  <li><a href="#">Etiam feugiat condimentum</a></li>
                  <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
                  <li><a href="#">Sed porttitor cras in erat nec</a></li>
                  <li><a href="#">Felis varius pellentesque potenti</a></li>
                  <li><a href="#">Nullam scelerisque blandit leo</a></li>
                </ul>
              </section>

            </div>
            <div className="col-3 col-6-medium col-12-small">

              {/* Links */}
              <section className="widget links">
                <h3>Random Stuff</h3>
                <ul className="style2">
                  <li><a href="#">Etiam feugiat condimentum</a></li>
                  <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
                  <li><a href="#">Sed porttitor cras in erat nec</a></li>
                  <li><a href="#">Felis varius pellentesque potenti</a></li>
                  <li><a href="#">Nullam scelerisque blandit leo</a></li>
                </ul>
              </section>
            </div>
           </div>
          </footer>
         </div>
    </div>
  );
};

export default About;

