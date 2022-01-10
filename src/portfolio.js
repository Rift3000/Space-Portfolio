import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div>
              
        <main>
          <header className="smol">
            <h1 className="font-weight-bold pb-5" style={{ fontSize: "4rem" }}>
              Jason <br />
              Williams
            </h1>
            <audio id="mozart" loop preload="auto" style={{ display: "none" }}>
              <source src={require("./sound/Mozart_No21.ogg")} type="audio/ogg" />
              <source src={require("./sound/Mozart_No21.mp3")} type="audio/mpeg" />
            </audio>
            <h3 className="pt-5">Welcome to my Portfolio!🌌</h3>
          </header>

          <section className="smol">
            <h2>About Me 😎</h2>
            <p>
              I have an avid interest in all things related to Software Development,
              Fintech and Web3. A lot of my time is spent programming and catching
              up on the latest tech news. It is my firm belief that technology will
              aide in furthering the development of my country. Web3 will help to
              reshape the internet as we know it.
            </p>
          </section>

          <section className="three smol">
            <div id="projects" className="container-fluid bg-3 text-center">
              <h1 className="margin">App Projects 📱</h1>
              <br />
              <div className="row text-center">
                <div className="col-sm-4 pb-3">
                  <div className="thumbnail">
                    <img
                      src={require("./images/crypto1.jpg")}
                      alt="Crypto Currency App"
                      width="150"
                      height="250"
                    />
                    <p><strong>Coin Ticker</strong></p>
                    <p>
                      This app allows users to select a currency and see the current
                      conversion rate for the selected currency in BITCOIN, ETHERIUM
                      AND LITECOIN
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalCrypto"
                      >
                        See Video
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 pb-3">
                  <div className="thumbnail">
                    <img
                      src={require("./images/clima1.jpg")}
                      alt="Clima App"
                      width="150"
                      height="250"
                    />
                    <p><strong>Clima App</strong></p>
                    <p>
                      An app that shows the current weather of your current location
                      and also gives you the ability to see the weather conditions
                      of any area
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalClima"
                      >
                        See Video
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="thumbnail">
                    <img
                      src={require("./images/todoey1.jpg")}
                      alt="San Francisco"
                      width="150"
                      height="250"
                    />
                    <p><strong>Todoey App</strong></p>
                    <p>
                      An app that allows to add items to a list, remove items from
                      the list and mark the item as done.
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-lg btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modalTodo"
                        style={{ marginTop: "4.5%" }}>
                        See Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div className="row text-center">
                <div className="col-sm-4 pb-4">
                  <div className="thumbnail">
                    <img
                      src={require("./images/destini1.jpg")}
                      alt="Destini App"
                      width="120"
                      height="250"
                    />
                    <p><strong>Destini App</strong></p>
                    <p>
                      A story driven app where the choices you make determine the
                      outcome.
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalDestini"
                      >
                        See Video
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 pb-4">
                  <div className="thumbnail">
                    <img
                      src={require("./images/corona1.jpg")}
                      alt="Destini App"
                      width="150"
                      height="250"
                    />
                    <p><strong>COVID-19 Tracker</strong></p>
                    <p>
                      An app that helps you to keep track of covid-19 cases and news
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalCorona"
                      >
                        See Video
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="thumbnail">
                    <img
                      src={require("./images/flash1.jpg")}
                      alt="San Francisco"
                      width="150"
                      height="250"
                    />
                    <p><strong>FlashChat App</strong></p>
                    <p>
                      A group chat app that allows you to sign up or login then talk
                      with your friends
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-lg btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modalFlash"
                      >
                        See Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div>{ /*Web Projects */}</div>
          <section className="three smol">
            <div id="web" className="container-fluid text-center">
              <h1 className="margin">Web Projects🌎</h1>
              <br />
              <div className="row text-center">
                <div className="col-lg pb-4">
                  <div className="thumbnail">
                    <img
                      className="img-fluid"
                      src={require("./images/newsApp.jpg")}
                      alt="Vue News"
                      style={{ height: "18rem", width: "30rem" }}
                    />
                    <p><strong>VueJs News Web App</strong></p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalNewsApp"
                      >
                        See Video
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="thumbnail">
                    <img
                      className="img-fluid"
                      src={require("./images/django-blog.jpg")}
                      alt="Django Blog"
                      style={{ height: "18rem", width: "30rem" }}
                    />
                    <p><strong>Django Blog</strong></p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalDjangoBlog"
                      >
                        See Video
                      </button>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </section>

          <section className="three">
            <div>{/*Certificate Container (Grid)*/}</div>
            <div id="certificates" className="container-fluid bg-1 text-center">
              <h2 className="margin">Certificates📜</h2>
              <br />
              <div className="row text-center pt-1">
                <div className="col-lg pb-4">
                  <div className="thumbnail">
                    <img
                      className="img-fluid"
                      src={require("./images/googleDigital.png")}
                      alt="Fundamentals of Digital Marketing"
                      style={{ height: "360px", width: "30rem" }}
                    />
                    <p>
                      <strong>The Fundamentals of Digital Marketing</strong>
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalDMarketing"
                      >
                        Enlarge
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="thumbnail">
                    <img
                      className="img-fluid"
                      src={require("./images/flutterDev.png")}
                      alt="Flutter Development"
                      style={{ height: "360px", width: "30rem" }}
                    />
                    <p>
                      <strong>Flutter Development BootCamp</strong>
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalFlutter"
                      >
                        Enlarge
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <br />
              <div className="row text-center">
                <div className="col-lg pb-4">
                  <div className="thumbnail">
                    <img
                      className="img-fluid"
                      src={require("./images/designThinking.jpg")}
                      alt="Design Thinking"
                      style={{ height: "360px" }}
                    />
                    <p>
                      <strong>Design Thinking in 3 steps</strong>
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalDesignThinking"
                      >
                        Enlarge
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="thumbnail">
                    <img
                      className="img-fluid"
                      src={require("./images/prescence.jpg")}
                      alt="Creating a Professional Online Prescence"
                      style={{ height: "360px" }}
                    />
                    <p>
                      <strong>Creating a Professional Online Prescence</strong>
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProfessional"
                      >
                        Enlarge
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div className="row text-center">
                <div className="col-lg pb-4">
                  <div className="thumbnail">
                    <img
                      className="img-fluid"
                      src={require("./images/financialStatements.jpg")}
                      alt="Reading Financial Statements"
                      style={{ height: "360px", width: "30rem" }}
                    />
                    <p>
                      <strong>Reading Financial Statements </strong>
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalFinancial"
                      >
                        Enlarge
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="thumbnail">
                    <img
                      className="img-fluid"
                      src={require("./images/SMC.jpg")}
                      alt="Creating a Social Media Marketing Campaign"
                      style={{ height: "360px" }}
                    />
                    <p>
                      <strong>Creating a Social Media Marketing Campaign </strong>
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalSocialC"
                      >
                        Enlarge
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <div className="row text-center">
                <div className="col-lg pb-4">
                  <div className="thumbnail">
                    <img
                      className="img-fluid"
                      src={require("./images/designThinking.jpg")}
                      alt="Design Thinking"
                      style={{ height: "360px", width: "30rem" }}
                    />
                    <p>
                      <strong>Design Thinking in 3 steps</strong>
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalDesignThinking"
                      >
                        Enlarge
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="thumbnail">
                    <img
                      className="img-fluid"
                      src={require("./images/react.jpg")}
                      alt="Modern React with Redux"
                      style={{ height: "360px", width: "30rem" }}
                    />
                    <p>
                      <strong>Modern React with Redux</strong>
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#modalReact"
                      >
                        Enlarge
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="three smol">
            <div>{/*Article Container (Grid)*/}</div>
            <div id="articles" className="container-fluid bg-1 text-center">
              <h2 className="margin">My Articles📰</h2>
              <br />
              <div className="row text-center">
                <div className="col-lg pb-4">
                  <div className="thumbnail">
                    <a
                      href="https://jacenwriter.medium.com/how-to-get-tech-jobs-and-internships-in-jamaica-d9f2289f82d6"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="img-fluid"
                        src={require("./images/tech_jobs.jpg")}
                        alt="How to get Tech Jobs and Internships"
                        style={{ height: "360px", width: "30rem" }}
                      />
                    </a>
                    <p>
                      <strong>How to get Tech Jobs and Internships</strong>
                    </p>
                    <div>
                      <a
                        href="https://jacenwriter.medium.com/how-to-get-tech-jobs-and-internships-in-jamaica-d9f2289f82d6"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button type="button" className="btn btn-primary btn-lg">
                          Link
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="thumbnail">
                    <a
                      href="https://jacenwriter.medium.com/how-to-buy-crypto-currencies-from-jamaica-a84b6af9f9a7"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="img-fluid"
                        src={require("./images/crypto_buy.jpg")}
                        alt="How to Buy Crypto Currencies"
                        style={{ height: "360px", width: "30rem" }}
                      />
                    </a>
                    <p>
                      <strong>How to Buy Crypto Currencies</strong>
                    </p>
                    <div>
                      <div>
                        <a
                          href="https://jacenwriter.medium.com/how-to-buy-crypto-currencies-from-jamaica-a84b6af9f9a7"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button type="button" className="btn btn-primary btn-lg">
                            Link
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <br />
              <div className="row text-center">
                <div className="col-lg pb-4">
                  <div className="thumbnail">
                    <a
                      href="https://jacenwriter.medium.com/how-to-transfer-crypto-to-a-wallet-and-stake-it-1e5b2a13e112"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="img-fluid"
                        src={require("./images/crypto_stake.jpg")}
                        alt="How to Transfer Crypto to a Wallet"
                        style={{ height: "360px", width: "30rem" }}
                      />
                    </a>
                    <p>
                      <strong
                      >How to Transfer Crypto to a Wallet and Stake It</strong
                      >
                    </p>
                    <a
                      href="https://jacenwriter.medium.com/how-to-transfer-crypto-to-a-wallet-and-stake-it-1e5b2a13e112"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="btn btn-primary btn-lg">
                        Link
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="thumbnail">
                    <a
                      href="https://jacenwriter.medium.com/how-to-buy-crypto-currencies-on-pancakeswap-8da468b26005"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="img-fluid"
                        src={require("./images/crypto_pancake.jpg")}
                        alt="How to Transfer Crypto to a Wallet"
                        style={{ height: "360px", width: "30rem" }}
                      />
                    </a>
                    <p>
                      <strong>How to Buy Crypto Currencies on PancakeSwap</strong>
                    </p>
                    <a
                      href="https://jacenwriter.medium.com/how-to-buy-crypto-currencies-on-pancakeswap-8da468b26005"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button" className="btn btn-primary btn-lg">
                        Link
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="quote">
            <div className="py-3">
              <h2 className="text-center">🛣</h2>
              <h2 className="text-center">
                "The Journey of a Thousand Miles begins with a Single Step"
                <br /><i>-Lao Tzu</i>
              </h2>
            </div>
          </section>

          <section className="quote marge col-12">
            <h1 className="text-center fw-5 pb-5">Contact📞</h1>
            <div className="row text-center">
              <div className="col-sm-4">
                <a href="mailto:jasonwilliamsr8@gmail.com" target="_blank"
                  rel="noreferrer"
                ><h3 className="contact">
                    <i className="fas fa-envelope"><i> Email Me</i></i>
                  </h3></a
                >
              </div>
              <div className="col-sm-4">
                <a
                  href="https://www.linkedin.com/in/jason-williams-7056b3a6/"
                  target="_blank"
                  rel="noreferrer"
                ><h3 className="contact">
                    <i className="fab fa-linkedin"><i> LinkedIn</i></i>
                  </h3></a
                >
              </div>
              <div className="col-sm-4 pb-5">
                <a
                  href="https://github.com/Rift3000?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                ><h3 className="contact">
                    <i className="fab fa-github-square"><i> Github</i></i>
                  </h3></a
                >
              </div>
            </div>
            <h2 className="text-center fw-bold">Jason Williams 2021&#169;</h2>
          </section>
        </main>

        <div>{/* App Projects  */}</div>
        <div className="container">
          <div className="modal fade" id="modalCrypto" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">Coin Ticker</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  <video className="videofix" controls>
                    <source src={require("./video/crypto.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="modal fade" id="modalClima" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">Clima</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div className="modal-body">
                  <video className="videofix" controls>
                    <source src={require("./video/clima.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="modal fade" id="modalTodo" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">Todoey</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  <video className="videofix" controls>
                    <source src={require("./video/todoey.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="modal fade" id="modalDestini" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">Destini</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  <video className="videofix" controls>
                    <source src={require("./video/Destini.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="modal fade" id="modalCorona" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">COVID-19 Tracker</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div className="modal-body">
                  <video className="videofix" controls>
                    <source src={require("./video/Corona.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="modal fade" id="modalFlash" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">Flash Chat App</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  <video className="videofix" controls>
                    <source src={require("./video/flash.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="modal fade" id="modalNewsApp" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">VueJs News Web App</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  <video className="videofix" controls>
                    <source src={require("./video/news.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="modal fade" id="modalDjangoBlog" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">Django Blog</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  <video className="videofix" controls>
                    <source src={require("./video/Django-Blog.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="modal fade" id="modalDMarketing" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">
                    Fundamentals of Digital Marketing
                  </h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" />
                </div>

                <div className="modal-body text-center">
                  <img
                    src={require("./images/googleDigital.png")}
                    alt="Fundamentals of Digital Marketing"
                    style={{
                      height: "550px", border: "4px black dashed"
                    }}
                  />
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="modal fade" id="modalFlutter" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">Flutter Development BootCamp</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" />
                </div>

                <div className="modal-body text-center">
                  <img
                    src={require("./images/flutterDev.png")}
                    alt="Flutter Development BootCamp"
                    style={{ height: "550px", border: "4px black dashed" }}
                  />
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="modal fade" id="modalDesignThinking" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">Design Thinking in 3 Steps</h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                  
                <div className="modal-body text-center">
                  <img
                    src={require("./images/designThinking.jpg")}
                    alt="Design Thinking"
                    style={{ height: "550px", border: "4px black dashed" }}
                  />
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="modal fade" id="modalProfessional" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">
                    Creating a Professional Online Prescence
                  </h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" />
                </div>

                <div className="modal-body text-center">
                  <img
                    src={require("./images/prescence.jpg")}
                    alt="Creating a Professional Online Prescence"
                    style={{ height: "550px" }}
                  />
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="modal fade" id="modalFinancial" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">Reading Financial Statements</h4>
                  <button type="button" className="btn-close" data-dismiss="modal" />
                </div>

                <div className="modal-body text-center">
                  <img
                    src={require("./images/financialStatements.jpg")}
                    alt="Reading Financial Statements"
                    style={{ height: "550px" }}
                  />
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="modal fade" id="modalReact" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">Modern React with Redux</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" />
                </div>

                <div className="modal-body text-center">
                  <img
                    src={require("./images/react.jpg")}
                    alt="Modern React with Redux"
                    style={{ height: "600px", width: "100%", border: "4px black dashed" }}
                  />
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="modal fade" id="modalSocialC" >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title dark">
                    Creating a Social Media Marketing Campaign
                  </h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" />
                </div>

                <div className="modal-body text-center">
                  <img
                    src={require("./images/SMC.jpg")}
                    alt="Creating a Social Media Marketing Campaign"
                    style={{ height: "600px" }}
                  />
                </div>

                <div className="modal-footer">
                  <span>
                    <button
                      type="button"
                      className="btn btn-lg btn-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
          
      </div>
    );
  
  }
}

export default Main;