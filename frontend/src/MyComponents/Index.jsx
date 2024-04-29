// react imports
import { useState } from 'react'
import { Link } from 'react-router-dom'

// css imports
import "../assets/css/main.css"
import "../assets/css/vendors/animate.css"
import "../assets/css/vendors/bootstrap.css"
import "../assets/css/vendors/magnific-popup.css"
import "../assets/css/vendors/splitting.css"
import "../assets/css/vendors/swiper.css"
import "../assets/fonts/font-awesome/css/font-awesome.css"


function Index() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [random, setRandom] = useState("")
  let [bg, setBg] = useState("red")
  let storeData = ()=>{
    console.log(fullName, email, message)
    fetch("http://127.0.0.1:3000/store", {
      method: "POST",
      crossDomain: true,
      headers: {
        'Content-type':'application/json',
        Accept: "application/json",
        "Access-Control-Allow-Origin":'*'
      },
      body: JSON.stringify([fullName, email, message])
    })
    setFullName("")
    setEmail("")
    setMessage("")
    alert("Thank you!")
  }
  return (
    <>
      <input type="text" name="random" id="random" value={random} onChange={(e)=>{setRandom(e.target.value)}} />
      <h1 style={{
        backgroundColor: bg
      }}>{(random>18)?bg = "green": bg="red"}</h1>
      <div className="container-page ">

        {/* <!-- Preloader --> */}
        <div className="preloader">
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="spinner-logo">
                <img src="images/ober_logo.png" alt="" />
                <div className="spinner-dot"></div>
                <div className="spinner spinner-line"></div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Header --> */}
        <header className="header">
          <div className="header__builder">
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                {/* <!-- logo --> */}
                <div className="logo">
                  <a href="index.html">
                    <img src="images/ober_logo.png" alt="" />
                  </a>
                </div>

              </div>
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 align-right">

                {/* <!-- switcher btn --> */}
                <a href="#" className="switcher-btn">
                  <span className="sw-before">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.22" height="22.313" viewBox="0 0 22.22 22.313">
                      <path fill="#fff" d="M1752.49,105.511a5.589,5.589,0,0,0-3.94-1.655,5.466,5.466,0,0,0-3.94,1.655,5.61,5.61,0,0,0,3.94,9.566,5.473,5.473,0,0,0,3.94-1.653,5.643,5.643,0,0,0,1.65-3.957A5.516,5.516,0,0,0,1752.49,105.511Zm-1.06,6.85a4.1,4.1,0,0,1-5.76,0,4.164,4.164,0,0,1,0-5.788A4.083,4.083,0,0,1,1751.43,112.361Zm7.47-3.662h-2.27a0.768,0.768,0,0,0,0,1.536h2.27A0.768,0.768,0,0,0,1758.9,108.7Zm-10.35,8.12a0.777,0.777,0,0,0-.76.769v2.274a0.777,0.777,0,0,0,.76.767,0.786,0.786,0,0,0,.77-0.767v-2.274A0.786,0.786,0,0,0,1748.55,116.819Zm7.85-.531-1.62-1.624a0.745,0.745,0,0,0-1.06,0,0.758,0.758,0,0,0,0,1.063l1.62,1.625a0.747,0.747,0,0,0,1.06,0A0.759,0.759,0,0,0,1756.4,116.288ZM1748.55,98.3a0.777,0.777,0,0,0-.76.768v2.273a0.778,0.778,0,0,0,.76.768,0.787,0.787,0,0,0,.77-0.768V99.073A0.786,0.786,0,0,0,1748.55,98.3Zm7.88,3.278a0.744,0.744,0,0,0-1.06,0l-1.62,1.624a0.758,0.758,0,0,0,0,1.063,0.745,0.745,0,0,0,1.06,0l1.62-1.624A0.758,0.758,0,0,0,1756.43,101.583Zm-15.96,7.116h-2.26a0.78,0.78,0,0,0-.77.768,0.76,0.76,0,0,0,.77.768h2.26A0.768,0.768,0,0,0,1740.47,108.7Zm2.88,5.965a0.745,0.745,0,0,0-1.06,0l-1.62,1.624a0.759,0.759,0,0,0,0,1.064,0.747,0.747,0,0,0,1.06,0l1.62-1.625A0.758,0.758,0,0,0,1743.35,114.664Zm0-11.457-1.62-1.624a0.744,0.744,0,0,0-1.06,0,0.758,0.758,0,0,0,0,1.063l1.62,1.624a0.745,0.745,0,0,0,1.06,0A0.758,0.758,0,0,0,1743.35,103.207Z" transform="translate(-1737.44 -98.313)" />
                    </svg>
                  </span>
                  <span className="sw-after">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
                      <path fill="#fff" d="M1759.46,111.076a0.819,0.819,0,0,0-.68.147,8.553,8.553,0,0,1-2.62,1.537,8.167,8.167,0,0,1-2.96.531,8.655,8.655,0,0,1-8.65-8.682,9.247,9.247,0,0,1,.47-2.864,8.038,8.038,0,0,1,1.42-2.54,0.764,0.764,0,0,0-.12-1.063,0.813,0.813,0,0,0-.68-0.148,11.856,11.856,0,0,0-6.23,4.193,11.724,11.724,0,0,0,1,15.387,11.63,11.63,0,0,0,19.55-5.553A0.707,0.707,0,0,0,1759.46,111.076Zm-4.5,6.172a10.137,10.137,0,0,1-14.29-14.145,10.245,10.245,0,0,1,3.38-2.836c-0.14.327-.29,0.651-0.41,1.006a9.908,9.908,0,0,0-.56,3.365,10.162,10.162,0,0,0,10.15,10.189,9.776,9.776,0,0,0,3.49-.62,11.659,11.659,0,0,0,1.12-.473A10.858,10.858,0,0,1,1754.96,117.248Z" transform="translate(-1737 -98)" />
                    </svg>
                  </span>
                </a>

                {/* <!-- menu btn --> */}
                <a href="#" className="menu-btn"><span></span></a>

              </div>
            </div>
          </div>

          {/* <!-- Menu Full Overlay --> */}
          <div className="menu-full-overlay">
            <div className="menu-full-container">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">

                    {/* <!-- menu full --> */}
                    <div className="menu-full">
                      <ul className="menu-full">
                        <li className="menu-item">
                          <a className="splitting-text-anim-2" data-splitting="chars" href="#about-section">About</a>
                        </li>
                        <li className="menu-item">
                          <Link className="splitting-text-anim-2" data-splitting="chars" href="#resume-section">Resume</Link>
                        </li>
                        <li className="menu-item">
                          <Link className="splitting-text-anim-2" data-splitting="chars" to={"/work"}>Works</Link>
                        </li>
                        <li className="menu-item">
                          <a className="splitting-text-anim-2" data-splitting="chars" href="#pricing-section">Pricing</a>
                        </li>
                        <li className="menu-item">
                          <a className="splitting-text-anim-2" data-splitting="chars" href="#blog-section">Blog</a>
                        </li>
                        <li className="menu-item">
                          <a className="splitting-text-anim-2" data-splitting="chars" href="#contact-section">Contact</a>
                        </li>
                        <li className="menu-item menu-item-has-children has-children">
                          <a className="splitting-text-anim-2" data-splitting="chars">Pages</a>
                          <ul className="sub-menu">
                            <li className="menu-item"><a className="splitting-text-anim-1" data-splitting="chars" href="works.html">Works (grid)</a></li>
                            <li className="menu-item"><a className="splitting-text-anim-1" data-splitting="chars" href="works-list.html">Works (list)</a></li>
                            <li className="menu-item"><a className="splitting-text-anim-1" data-splitting="chars" href="work-single.html">Work Single Page</a></li>
                            <li className="menu-item"><a className="splitting-text-anim-1" data-splitting="chars" href="blog.html">Blog Posts</a></li>
                            <li className="menu-item"><a className="splitting-text-anim-1" data-splitting="chars" href="blog-single.html">Blog Single Post</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* <!-- social --> */}
            <div className="menu-social-links">
              <a href="http://dribbble.com" target="blank" className="scrolla-element-anim-1" title="dribbble">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="http://twitter.com" target="blank" className="scrolla-element-anim-1" title="twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="http://behance.com" target="blank" className="scrolla-element-anim-1" title="behance">
                <i className="fab fa-behance"></i>
              </a>
            </div>

          </div>

        </header>

        {/* <!-- Wrapper --> */}
        <div className="wrapper">

          {/* <!-- Section --> */}
          <section className="section section-started">
            <div className="container">

              {/* <!-- Hero Started --> */}
              <div className="hero-started">
                <div className="slide scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <img src="images/profile.png" alt="" />
                  <span className="circle circle-1">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="749px" height="375px"><path fillRule="evenodd" fill="#ff8059" d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 " /></svg>
                  </span>
                  <span className="circle circle-2">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="416px" height="209px"><path fillRule="evenodd" fill="#3aafc9" d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 " /></svg>
                  </span>
                  <span className="circle circle-3">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="416px" height="209px"><path fillRule="evenodd" fill="#b9d1e4" d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 " /></svg>
                  </span>
                  <span className="circle circle-4">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="121px" height="241px"><path fillRule="evenodd" fill="#676cdb" d="M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 " /></svg>
                  </span>
                  <span className="circle circle-5">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="232px" height="117px"><path fillRule="evenodd" fill="rgb(255, 208, 65)" d="M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 " /></svg>
                  </span>
                </div>
                <div className="content">
                  <div className="titles">
                    <div className="subtitle splitting-text-anim-2 scroll-animate" data-splitting="chars" data-animate="active">
                      UI UX DESIGNER
                    </div>
                    <h2 className="title splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
                      Federico <br />Ober
                    </h2>
                  </div>
                  <div className="description scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <p>
                      I"m a UI/UX Designer based in NewYork and enjoy playing with colors. I love travelling, photography &amp; music.
                    </p>
                    <div className="social-links">
                      <a target="_blank" rel="nofollow" href="#">
                        <i aria-hidden="true" className="fab fa-twitter"></i>
                      </a>
                      <a target="_blank" rel="nofollow" href="#">
                        <i aria-hidden="true" className="fab fa-dribbble"></i>
                      </a>
                      <a target="_blank" rel="nofollow" href="#">
                        <i aria-hidden="true" className="fab fa-behance"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info-list">
                  <ul>
                    <li className="scrolla-element-anim-1 scroll-animate" data-animate="active">
                      Born in <strong>NewYork</strong>
                    </li>
                    <li className="scrolla-element-anim-1 scroll-animate" data-animate="active">
                      Experience <strong>7+ Years</strong>
                    </li>
                    <li className="scrolla-element-anim-1 scroll-animate" data-animate="active">
                      Date of Birth <strong>27 June 1992</strong>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          <section className="section section-bg section-parallax-1" id="about-section">
            <div className="container">

              {/* <!-- Section Heading --> */}
              <div className="m-titles">
                <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
                  About Me
                </h2>
              </div>

              <div className="row row-custom">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">

                  {/* <!-- Section numbers --> */}
                  <div className="numbers-items">
                    <div className="numbers-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                      <div className="icon">
                        <i aria-hidden="true" className="far fa-check-circle"></i>
                      </div>
                      <div className="num">124</div>
                      <div className="title">Completed <br />Project</div>
                    </div>
                    <div className="numbers-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                      <div className="icon">
                        <i aria-hidden="true" className="far fa-smile-beam"></i>
                      </div>
                      <div className="num">65</div>
                      <div className="title">Happy <br />Clients</div>
                    </div>
                    <div className="numbers-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                      <div className="icon">
                        <i aria-hidden="true" className="far fa-gem"></i>
                      </div>
                      <div className="num">18</div>
                      <div className="title">Awards <br />Won</div>
                    </div>
                  </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">

                  {/* <!-- Section Profile --> */}
                  <div className="profile-box">
                    <div className="text scrolla-element-anim-1 scroll-animate" data-animate="active">
                      <p>
                        My name is Federico Ober. I have been studying UI UX Design since October 2020. I like creating
                        a cool design project.</p><p>Donec imperdiet risus at tortor consequat maximus et eget magna.
                          Cras ornare sagittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel
                          bibendum ultrices, fringilla vel eros. Donec euismod leo lectus, et euismod metus euismod sed.
                          Quisque quis suscipit ipsum, at pellentesque velit. Duis a congue sem.
                      </p>
                      <p>
                        In sed dolor ut ligula malesuada sollicitudin. Morbi iaculis convallis arcu, nec maximus tellus
                        sodales in. Curabitur blandit enim at nisl lobortis, non pretium enim hendrer
                      </p>
                      <a href="#contact-section" className="btn scrolla-element-anim-1 scroll-animate" data-animate="active">Contact Me</a>
                      <div className="signature scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <img src="images/signature.png" alt="" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>

          <section className="section section-parallax-2" id="resume-section">
            <div className="container">

              {/* <!-- Section Heading --> */}
              <div className="m-titles">
                <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
                  My Resume
                </h2>
              </div>

              <div className="row row-custom">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                </div>
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">

                  {/* <!-- Description --> */}
                  <div className="text scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <p>
                      Talented UX designer with 7+ years of experience, seeking to elevate UI/UX at ABC, Inc.
                      As Lead UI/UX Head completed project before dead line. ittis augue, id sollicitudin justo
                      tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros. Donec euism
                      od leo um, at pellentesque velituis a congue sem.
                    </p>
                  </div>

                  {/* <!-- Skills --> */}
                  <div className="skills-items">
                    <div className="p-title scrolla-element-anim-1 scroll-animate" data-animate="active">SKILLS</div>
                    <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                      <div className="name">Photoshop</div>
                      <div className="dots dots-90">
                        <div className="dots-row">
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                      </div>
                      <div className="value"><span className="num">90%</span></div>
                    </div>
                    <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                      <div className="name">WordPress</div>
                      <div className="dots dots-60">
                        <div className="dots-row">
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                      </div>
                      <div className="value"><span className="num">60%</span></div>
                    </div>
                    <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                      <div className="name">HTML</div>
                      <div className="dots dots-80">
                        <div className="dots-row">
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                      </div>
                      <div className="value"><span className="num">80%</span></div>
                    </div>
                    <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                      <div className="name">Java</div>
                      <div className="dots dots-50">
                        <div className="dots-row">
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                      </div>
                      <div className="value"><span className="num">50%</span></div>
                    </div>
                    <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                      <div className="name">jQuery</div>
                      <div className="dots dots-70">
                        <div className="dots-row">
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                      </div>
                      <div className="value"><span className="num">70%</span></div>
                    </div>
                  </div>

                  {/* <!-- Services --> */}
                  <div className="p-title scrolla-element-anim-1 scroll-animate" data-animate="active">SERVICES</div>
                  <div className="services-items">
                    <div className="services-col">
                      <div className="services-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div className="icon">
                          <i aria-hidden="true" className="fab fa-chrome"></i>
                        </div>
                        <div className="title">Web development</div>
                        <div className="text">
                          <p>Modern and mobile-ready website that will help you reach all of your marketing.</p>
                        </div>
                        <a href="#contact-section" className="lnk">order now</a>
                      </div>
                    </div>
                    <div className="services-col">
                      <div className="services-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div className="icon">
                          <i aria-hidden="true" className="fab fa-soundcloud"></i>
                        </div>
                        <div className="title">Music writing</div>
                        <div className="text">
                          <p>Music copying, writing, creating, transcription and composition services.</p>
                        </div>
                        <a href="#contact-section" className="lnk">order now</a>
                      </div>
                    </div>
                    <div className="services-col">
                      <div className="services-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div className="icon">
                          <i aria-hidden="true" className="fab fa-adversal"></i>
                        </div>
                        <div className="title">Advetising</div>
                        <div className="text">
                          <p>Advertising services include television, radio, print, mail, and web apps.</p>
                        </div>
                        <a href="#contact-section" className="lnk">order now</a>
                      </div>
                    </div>
                    <div className="services-col">
                      <div className="services-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div className="icon">
                          <i aria-hidden="true" className="fas fa-gamepad"></i>
                        </div>
                        <div className="title">Game Development</div>
                        <div className="text">
                          <p>Developing memorable and unique mobile android, ios and video games.</p>
                        </div>
                        <a href="#contact-section" className="lnk">order now</a>
                      </div>
                    </div>
                  </div>

                  {/* <!-- History --> */}
                  <div className="history-left">

                    <div className="history-items">
                      <div className="p-title scrolla-element-anim-1 scroll-animate" data-animate="active">EDUCATION</div>
                      <div className="history-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div className="date">2010 - 2012</div>
                        <div className="name">Master in Graphic</div>
                        <div className="subname">New York University</div>
                      </div>
                      <div className="history-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div className="date">2006 - 2009</div>
                        <div className="name">Bachelors of FineArt</div>
                        <div className="subname">New York University</div>
                      </div>
                    </div>

                    <div className="history-items">
                      <div className="p-title scrolla-element-anim-1 scroll-animate" data-animate="active">AWARDS</div>
                      <div className="history-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div className="date">2016 - awwwards</div>
                        <div className="name">Site of the Day</div>
                        <div className="text">
                          <p>Euismod vel bibendum ultrices, fringilla vel eros, donec euismod leo lectus.</p>
                        </div>
                      </div>
                      <div className="history-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div className="date">2015 - designnominees</div>
                        <div className="name">Site of the Week</div>
                        <div className="text">
                          <p>Euismod vel bibendum ultrices, fringilla vel eros, donec euismod leo lectus.</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="history-right">

                    <div className="history-items">
                      <div className="p-title scrolla-element-anim-1 scroll-animate" data-animate="active">EXPERIENCE</div>
                      <div className="history-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div className="date">2014 - Present</div>
                        <div className="name">Soft Tech Inc.</div>
                        <div className="subname">UI Head &amp; Manager</div>
                        <div className="text">
                          <p>Euismod vel bibendum ultrices, fringilla vel eros, donec euismod leo lectus.</p>
                        </div>
                      </div>
                      <div className="history-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div className="date">2010 - 2014</div>
                        <div className="name">Kana Design Studio</div>
                        <div className="subname">UI / UX Specialist</div>
                        <div className="text">
                          <p>Euismod vel bibendum ultrices, fringilla vel eros, donec euismod leo lectus.</p>
                        </div>
                      </div>
                      <div className="history-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div className="date">2009 - 2010</div>
                        <div className="name">Paperart</div>
                        <div className="subname">Graphic Designer</div>
                        <div className="text">
                          <p>Euismod vel bibendum ultrices, fringilla vel eros, donec euismod leo lectus.</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="clear"></div>

                  {/* <!-- Button CV --> */}
                  <a target="_blank" href="https://bslthemes.site/ober/wp-content/uploads/2021/12/Jacky-Smith-Resume.pdf" className="btn scrolla-element-anim-1 scroll-animate" data-animate="active">Download CV</a>

                </div>
              </div>

            </div>
          </section>

          <section className="section section-bg section-parallax-5" id="works-section">
            <div className="container">

              {/* <!-- Section Heading --> */}
              <div className="m-titles">
                <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
                  My Projects
                </h2>
              </div>

              <div className="row row-custom">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                </div>
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">

                  {/* <!-- Description --> */}
                  <div className="text scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <p>A Collection of my favorites project I’ve designed recently. Feeling great while sharing here.</p>
                  </div>

                </div>
              </div>

              {/* <!-- Works --> */}
              <div className="works-box">

                <div className="filter-links scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <a href="#" className="active" data-href=".works-col">All</a>
                  <a href="#" data-href=".sorting-ui-ux-design">UI UX Design</a>
                  <a href="#" data-href=".sorting-photo">Photography</a>
                  <a href="#" data-href=".sorting-development">Development</a>
                  {/* <a href="#" data-href=".sorting-branding">Branding</a> */}
                </div>

                <div className="works-items works-list-items row">

                  <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                    <div className="works-item">
                      <a href="work-single.html">
                        <span className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                          <span className="img">
                            <img src="images/work4.jpg" alt="Zorro" />
                            <span className="overlay"></span>
                          </span>
                        </span>
                        <span className="desc">
                          <span className="name splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
                            Zorro
                          </span>
                          <span className="category scrolla-element-anim-1 scroll-animate" data-animate="active">
                            Branding<br />Photography
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
                    <div className="works-item">
                      <a href="work-single.html">
                        <span className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                          <span className="img">
                            <img src="images/work2.jpg" alt="Gooir" />
                            <span className="overlay"></span>
                          </span>
                        </span>
                        <span className="desc">
                          <span className="name splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
                            Gooir
                          </span>
                          <span className="category scrolla-element-anim-1 scroll-animate" data-animate="active">
                            Branding<br />UI UX Design
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
                    <div className="works-item">
                      <a href="work-single.html">
                        <span className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                          <span className="img">
                            <img src="images/work7.jpg" alt="Explore" />
                            <span className="overlay"></span>
                          </span>
                        </span>
                        <span className="desc">
                          <span className="name splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
                            Explore
                          </span>
                          <span className="category scrolla-element-anim-1 scroll-animate" data-animate="active">
                            Development<br />UI UX Design
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                    <div className="works-item">
                      <a href="work-single.html">
                        <span className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                          <span className="img">
                            <img src="images/work1.jpg" alt="Mozar" />
                            <span className="overlay"></span>
                          </span>
                        </span>
                        <span className="desc">
                          <span className="name splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
                            Mozar
                          </span>
                          <span className="category scrolla-element-anim-1 scroll-animate" data-animate="active">
                            Branding<br />Photography
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                    <div className="works-item">
                      <a href="work-single.html">
                        <span className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                          <span className="img">
                            <img src="images/single8.jpg" alt="Stay Fit" />
                            <span className="overlay"></span>
                          </span>
                        </span>
                        <span className="desc">
                          <span className="name splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
                            Stay Fit
                          </span>
                          <span className="category scrolla-element-anim-1 scroll-animate" data-animate="active">
                            Development<br />UI UX Design
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                    <div className="works-item">
                      <a href="work-single.html">
                        <span className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                          <span className="img">
                            <img src="images/single6.jpg" alt="Kana" />
                            <span className="overlay"></span>
                          </span>
                        </span>
                        <span className="desc">
                          <span className="name splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
                            Kana
                          </span>
                          <span className="category scrolla-element-anim-1 scroll-animate" data-animate="active">
                            Development<br />Photography
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          <section className="section" id="pricing-section">
            <div className="container">

              {/* <!-- Section Heading --> */}
              <div className="m-titles">
                <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
                  Pricing Plans
                </h2>
              </div>

              <div className="row row-custom">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                </div>
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">

                  {/* <!-- Description --> */}
                  <div className="text scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <p>Are you interested to work with me ? Here are my price list for design related work. Lets talk about project !</p>
                  </div>

                </div>
              </div>

              {/* <!-- Pricing --> */}
              <div className="pricing-items row">

                <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="pricing-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <div className="title">Full Time</div>
                    <div className="subtitle">Available for Full Time</div>
                    <div className="price">$1200</div>
                    <div className="text">
                      <ul>
                        <li>Brand Design</li>
                        <li>Advertising</li>
                        <li>Web Development</li>
                        <li>Photography</li>
                      </ul>
                    </div>
                    <a href="#contact-section" className="btn">Hire Me</a>
                  </div>
                </div>

                <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="pricing-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <div className="title">Project Wise</div>
                    <div className="subtitle">Available for Freelancing</div>
                    <div className="price">$400</div>
                    <div className="text">
                      <ul>
                        <li>Brand Design</li>
                        <li>Advertising</li>
                        <li>Web Development</li>
                        <li>Photography</li>
                      </ul>
                    </div>
                    <a href="#contact-section" className="btn">Hire Me</a>
                  </div>
                </div>

                <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="pricing-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <div className="title">Hourley</div>
                    <div className="subtitle">Available for Hourley Basis</div>
                    <div className="price">$60</div>
                    <div className="text">
                      <ul>
                        <li>Brand Design</li> 	<li>Advertising</li>
                        <li>Web Development</li> 	<li>Photography</li>
                      </ul>
                    </div>
                    <a href="#contact-section" className="btn">Hire Me</a>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <section className="section no-padding-top section-parallax-4">
            <div className="container">

              {/* <!-- Testimonials --> */}
              <div className="m-testimonials">
                <div className="swiper-container js-testimonials">
                  <div className="swiper-wrapper">

                    <div className="swiper-slide">
                      <div className="testimonials-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div className="text">
                          <div className="icon">
                            <svg width="58" height="44" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 58 44"><defs></defs><g><g><path d="M24.15697,5.25606c-5.87975,2.24304 -9.65698,8.89397 -9.65698,14.29844h9.62551v24.44363h-24.12552v-18.06641c0,-13.94272 9.05766,-23.39363 21.74995,-25.93231zM57.98788,5.25606c-5.87734,2.24304 -9.65458,8.89397 -9.65458,14.29844h9.6666v24.44363h-24.12552v-18.06641c0,-13.94272 9.01657,-23.39363 21.70887,-25.93231zM54.21305,2.82419c-11.10706,2.9459 -17.92202,11.65104 -17.92202,23.10753v15.62309h19.29222v-19.55605h-9.6666v-2.44427c0,-5.29194 3.09334,-12.05826 8.87878,-15.45906zM20.37974,2.82133v0l0.58239,1.27411c-5.78556,3.4008 -8.8789,10.16712 -8.8789,15.45906v2.44427v0h9.62563v0v19.55605v0h-19.29222v0v-15.62309c0,-11.45458 6.83189,-20.15972 17.9631,-23.11039" fill="#ffffff" fillOpacity="1"></path></g></g></svg>
                          </div>
                          <p>Sed vel mattis dolor. Vestibulum gravida, dolor vel dapibus bibendum, velit enim finibus mauris, in volutpat arcu magna ac metus. Sed condimentum, erat vel sodales pharetra, ligula massa maximus dolor</p>
                        </div>
                        <div className="image">
                          <img src="images/team3.jpg" alt="Jennifer Smith" />
                        </div>
                        <div className="info">
                          <h3 className="name">Jennifer Smith</h3>
                          <div className="author">CEO &amp; Founder</div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonials-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div className="text">
                          <div className="icon">
                            <svg width="58" height="44" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 58 44"><defs></defs><g><g><path d="M24.15697,5.25606c-5.87975,2.24304 -9.65698,8.89397 -9.65698,14.29844h9.62551v24.44363h-24.12552v-18.06641c0,-13.94272 9.05766,-23.39363 21.74995,-25.93231zM57.98788,5.25606c-5.87734,2.24304 -9.65458,8.89397 -9.65458,14.29844h9.6666v24.44363h-24.12552v-18.06641c0,-13.94272 9.01657,-23.39363 21.70887,-25.93231zM54.21305,2.82419c-11.10706,2.9459 -17.92202,11.65104 -17.92202,23.10753v15.62309h19.29222v-19.55605h-9.6666v-2.44427c0,-5.29194 3.09334,-12.05826 8.87878,-15.45906zM20.37974,2.82133v0l0.58239,1.27411c-5.78556,3.4008 -8.8789,10.16712 -8.8789,15.45906v2.44427v0h9.62563v0v19.55605v0h-19.29222v0v-15.62309c0,-11.45458 6.83189,-20.15972 17.9631,-23.11039" fill="#ffffff" fillOpacity="1"></path></g></g></svg>
                          </div>
                          <p>Sed vel mattis dolor. Vestibulum gravida, dolor vel dapibus bibendum, velit enim finibus mauris, in volutpat arcu magna ac metus. Sed condimentum, erat vel sodales pharetra, ligula massa maximus dolor</p>
                        </div>
                        <div className="image">
                          <img src="images/team3.jpg" alt="Jennifer Smith" />
                        </div>
                        <div className="info">
                          <h3 className="name">Jennifer Smith</h3>
                          <div className="author">CEO &amp; Founder</div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonials-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                        <div className="text">
                          <div className="icon">
                            <svg width="58" height="44" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 58 44"><defs></defs><g><g><path d="M24.15697,5.25606c-5.87975,2.24304 -9.65698,8.89397 -9.65698,14.29844h9.62551v24.44363h-24.12552v-18.06641c0,-13.94272 9.05766,-23.39363 21.74995,-25.93231zM57.98788,5.25606c-5.87734,2.24304 -9.65458,8.89397 -9.65458,14.29844h9.6666v24.44363h-24.12552v-18.06641c0,-13.94272 9.01657,-23.39363 21.70887,-25.93231zM54.21305,2.82419c-11.10706,2.9459 -17.92202,11.65104 -17.92202,23.10753v15.62309h19.29222v-19.55605h-9.6666v-2.44427c0,-5.29194 3.09334,-12.05826 8.87878,-15.45906zM20.37974,2.82133v0l0.58239,1.27411c-5.78556,3.4008 -8.8789,10.16712 -8.8789,15.45906v2.44427v0h9.62563v0v19.55605v0h-19.29222v0v-15.62309c0,-11.45458 6.83189,-20.15972 17.9631,-23.11039" fill="#ffffff" fillOpacity="1"></path></g></g></svg>
                          </div>
                          <p>Sed vel mattis dolor. Vestibulum gravida, dolor vel dapibus bibendum, velit enim finibus mauris, in volutpat arcu magna ac metus. Sed condimentum, erat vel sodales pharetra, ligula massa maximus dolor</p>
                        </div>
                        <div className="image">
                          <img src="images/team3.jpg" alt="Jennifer Smith" />
                        </div>
                        <div className="info">
                          <h3 className="name">Jennifer Smith</h3>
                          <div className="author">CEO &amp; Founder</div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="swiper-button-prev scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <svg width="13" height="25" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 13 25"><defs></defs><g><g><path d="M0.27409,11.8138l11.13338,-11.53183c0.36484,-0.37766 0.95535,-0.37766 1.3195,0.00191c0.36392,0.37861 0.36301,0.99277 -0.00183,1.37043l-10.47066,10.84518v0l10.471,10.84423c0.36484,0.37861 0.36575,0.99087 0.00195,1.37043c-0.18253,0.18883 -0.42171,0.28515 -0.6609,0.28515c-0.23849,0 -0.47676,-0.09537 -0.65895,-0.28229l-11.1335,-11.53183c-0.17567,-0.18215 -0.2742,-0.4282 -0.2742,-0.68569c0,-0.25749 0.09888,-0.50449 0.2742,-0.68569z" fill="#ffffff" fillOpacity="1"></path></g></g></svg>
                  </div>
                  <div className="swiper-button-next scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <svg width="13" height="25" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 13 25"><defs></defs><g><g><path d="M0.27409,11.8138l11.13338,-11.53183c0.36484,-0.37766 0.95535,-0.37766 1.3195,0.00191c0.36392,0.37861 0.36301,0.99277 -0.00183,1.37043l-10.47066,10.84518v0l10.471,10.84423c0.36484,0.37861 0.36575,0.99087 0.00195,1.37043c-0.18253,0.18883 -0.42171,0.28515 -0.6609,0.28515c-0.23849,0 -0.47676,-0.09537 -0.65895,-0.28229l-11.1335,-11.53183c-0.17567,-0.18215 -0.2742,-0.4282 -0.2742,-0.68569c0,-0.25749 0.09888,-0.50449 0.2742,-0.68569z" fill="#ffffff" fillOpacity="1"></path></g></g></svg>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="section section-bg" id="blog-section">
            <div className="container">

              {/* <!-- Section Heading --> */}
              <div className="m-titles">
                <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">My Blog</h2>
              </div>

              <div className="row row-custom">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                </div>
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">

                  {/* <!-- Description --> */}
                  <div className="text scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <p>Suspendisse potenti. Sed egestas eros eu libero posuere ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.</p>
                  </div>

                </div>
              </div>

            </div>

            {/* <!-- Blog --> */}
            <div className="blog-items">

              <div className="archive-item">
                <div className="image">
                  <a href="blog-single.html">
                    <img src="images/blog4.jpg" alt="Usability Secrets to Create Better User Interfaces" />
                  </a>
                </div>
                <div className="desc">
                  <div className="category scrolla-element-anim-1 scroll-animate" data-animate="active">
                    UI Design<br /><span>November 28, 2021</span>
                  </div>
                  <h3 className="title scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <a href="blog-single.html">Usability Secrets to Create Better User Interfaces</a>
                  </h3>
                  <div className="text scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <p>Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus, ornare eget&#8230; </p>
                    <div className="readmore">
                      <a href="blog-single.html" className="lnk">Read more</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="archive-item">
                <div className="image">
                  <a href="blog-single.html">
                    <img src="images/blog3.jpg" alt="Three Ways To Level Up Your Photography" />
                  </a>
                </div>
                <div className="desc">
                  <div className="category scrolla-element-anim-1 scroll-animate" data-animate="active">
                    Branding<br /><span>November 28, 2021</span>
                  </div>
                  <h3 className="title scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <a href="blog-single.html">Three Ways To Level Up Your Photography</a>
                  </h3>
                  <div className="text scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <p>Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus, ornare eget&#8230; </p>
                    <div className="readmore">
                      <a href="blog-single.html" className="lnk">Read more</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="archive-item">
                <div className="image">
                  <a href="blog-single.html">
                    <img src="images/single7.jpg" alt="10 Useful Tips to Improve Your UI Designs" />
                  </a>
                </div>
                <div className="desc">
                  <div className="category scrolla-element-anim-1 scroll-animate" data-animate="active">
                    Photography<br /><span>November 28, 2021</span>
                  </div>
                  <h3 className="title scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <a href="blog-single.html">10 Useful Tips to Improve Your UI Designs</a>
                  </h3>
                  <div className="text scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <p>Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus, ornare eget&#8230;</p>
                    <div className="readmore">
                      <a href="blog-single.html" className="lnk">Read more</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="blog-more-link">
              <a href="blog.html" className="btn scrolla-element-anim-1 scroll-animate" data-animate="active">View Blog</a>
            </div>

          </section>

          <section className="section section-parallax-5">
            <div className="container">

              {/* <!-- Section Heading --> */}
              <div className="m-titles">
                <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">My Clients</h2>
              </div>

              <div className="row row-custom">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                </div>
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">

                  {/* <!-- Description --> */}
                  <div className="text scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <p>Suspendisse potenti. Sed egestas eros eu libero posuere ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.</p>
                  </div>

                </div>
              </div>

              <div className="row clients-items">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
                  <div className="clients-item"><img src="images/brand1.png" alt="" /></div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
                  <div className="clients-item"><img src="images/brand2.png" alt="" /></div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
                  <div className="clients-item"><img src="images/brand3.png" alt="" /></div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
                  <div className="clients-item"><img src="images/brand4.png" alt="" /></div>
                </div>
              </div>

            </div>
          </section>

          <section className="section section-bg section-parallax-2" id="contact-section">
            <div className="container">

              {/* <!-- Section Heading --> */}
              <div className="m-titles">
                <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">Contact Me</h2>
              </div>

              <div className="row row-custom">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">

                  {/* <!-- Section numbers --> */}
                  <div className="numbers-items contacts-items">
                    <div className="numbers-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-phone"></i>
                      </div>
                      <div className="num">+1 023-456-7800</div>
                    </div>
                    <div className="numbers-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-at"></i>
                      </div>
                      <div className="num">hi@ober.com</div>
                    </div>
                    <div className="numbers-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-location-arrow"></i>
                      </div>
                      <div className="num">43rd Street River Point NY 1023</div>
                    </div>
                  </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">

                  {/* <!-- contact form --> */}
                  <div className="contacts-form scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <label>
                      Name
                      <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} name="name" placeholder="Enter your full name" />
                    </label>
                    <label>
                      Email Address
                      <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder="Enter your email address" />
                    </label>
                    <label>
                      Message
                      <textarea name="message" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Enter your message here"></textarea>
                    </label>
                    <button  className="btn" onClick={() => storeData()}>Submit</button>
                  </div>
                  <div className="alert-success" style={{ display: "none" }}>
                    <p>Thanks, your message is sent successfully.</p>
                  </div>

                </div>
              </div>

            </div>
          </section>

        </div>

        {/* <!-- Footer --> */}
        <div className="footer">
          <div className="footer__builder">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-left">

                  {/* <!-- social --> */}
                  <div className="social-links scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <a target="_blank" rel="nofollow" href="http://twitter.com">
                      <i aria-hidden="true" className="fab fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="nofollow" href="http://dribble.com">
                      <i aria-hidden="true" className="fab fa-dribbble"></i>
                    </a>
                    <a target="_blank" rel="nofollow" href="http://behance.com">
                      <i aria-hidden="true" className="fab fa-behance"></i>
                    </a>
                  </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center">
                  <div className="copyright-text scrolla-element-anim-1 scroll-animate" data-animate="active">© 2022 Ober. All Rights Reserved</div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                  <div className="copyright-text scrolla-element-anim-1 scroll-animate" data-animate="active">Developed by <strong>Hriday</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* <!-- cursor --> */}
      <div className="cursor"></div>
    </>
  )
}

export default Index
