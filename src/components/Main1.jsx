import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Main1() {
  const [disabled, setDisabled] = useState(false);
  const [showPackModal, setShowPackModal] = useState(false);
  const [showBoxModal, setShowBoxModal] = useState(false);

  // Functions to open and close modals
  const openPackModal = () => setShowPackModal(true);
  const closePackModal = () => setShowPackModal(false);
  const openBoxModal = () => setShowBoxModal(true);
  const closeBoxModal = () => setShowBoxModal(false);

  const [showInsideModal, setShowInsideModal] = useState(false);

  const openInsideModal = () => setShowInsideModal(true);
  const closeInsideModal = () => setShowInsideModal(false);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Pokemon image */}
      <div className="container-fluid" style={{ width: '100%', height: '70vh', overflow: 'hidden' }}>
        <img src="pokemon.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      {/* Two-button switch */}
      <div className="container d-flex justify-content-center mt-5">
        <div className="button-div d-flex justify-content-center bg-dark rounded-5 p-1">
          <button
            className={`btn px-5 rounded-5 text-white fs-5 ${disabled ? 'btn-transparent' : ''}`}
            style={{ backgroundColor: !disabled ? '#2c2484' : '', fontFamily: 'Luckiest Guy, sans-serif' }}
            onClick={() => setDisabled(false)}
          >
            Packs
          </button>
          <button
            className={`btn px-5 rounded-5 text-white fs-5 ${!disabled ? 'btn-transparent' : ''}`}
            style={{ backgroundColor: disabled ? '#2c2484' : '', fontFamily: 'Luckiest Guy, sans-serif' }}
            onClick={() => setDisabled(true)}
          >
            Boxes
          </button>
        </div>
      </div>

      {/* Pokemon card Label */}
      <div className="container d-flex justify-content-center mt-5">
        <p
          style={{ fontFamily: 'Luckiest Guy, sans-serif', WebkitTextStroke: '1px #3f51b5' }}
          className="text-white fw-bolder fs-2 fw-bold"
        >
          {disabled ? 'Pokemon Boxes 🚀' : 'Pokemon Packs 🚀'}
        </p>
      </div>

      {/* Conditional Rendering of Divs */}
      {!disabled ? (
        <div id="packs" className="container mt-1 w-75">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <p className="text-center mt-3 text-white mb-0" style={{ fontSize: 10, fontWeight: 500, fontStyle: 'italic' }}>
                  SCARLET & VIOLET TEMPORAL FORCES PACK
                </p>
                <img className="card-img" src="pack.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openPackModal}
                    >OPEN the PACK!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $2.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      ) : (
        <div id="box" className="container mt-1 w-75">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div><div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card" style={{ backgroundColor: '#1D2344', borderRadius: '30px' }}>
                <img className="mask-img" src="Mask.png" alt="pack pic" />
                <div
                  className="container d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#141c31',
                    borderBottomRightRadius: '30px',
                    borderBottomLeftRadius: '30px',
                    padding: '10px',
                  }}
                >
                  <span className=" d-flex justify-content-center align-items-center "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 17,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        color: '#342a9b',
                        border: '2px solid #342a9b',
                      }}
                      onClick={openBoxModal}
                    >PEEK INSIDE!
                    </button>
                    <span className="fs-5   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      )}


      {/* Pack Modal */}
      {showPackModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '800px' }}>
            <div className="modal-content p-0" style={{ backgroundColor: '#110c1d', borderRadius: '20px', border: 'none' }}>

              <button

                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closePackModal}
                style={{
                  background: 'white',
                  border: '1px solid blue',
                  borderRadius: '50%',

                  position: 'absolute',
                  zIndex: 100,
                  top: '30px',
                  left: '40px',
                  color: "blue",
                  paddingTop: "0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                &times;
              </button>

              <div className="modal-body d-flex p-3 justify-content-center ">
                {/* Pack Image */}
                <img
                  src="animationPhoto.jpg"
                  alt="Pack Image"
                  style={{
                    width: '350px',
                    height: '350px',
                    borderRadius: '15px',
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.8)',

                  }}
                />


                {/* Pack Details */}
                <div className="text-white ms-4 d-flex justify-content-center align-items-center flex-column mt-4">

                  <div className='px-5'>
                    <h6 className="fw-bold text-center ">POKEMON SUPERCHARGED BREAKER -</h6>
                    <p className=" text-center mb-4"
                      style={{
                        color: "#4c69f6",
                        WebkitTextStroke: '0.5px #4c69f6',
                        letterSpacing: 0.5
                      }}>JAPANESE BOOSTER BOX</p>
                  </div>

                  <span className=" d-flex justify-content-center align-items-center mt-5 "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75 mt-2"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 22,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 29px',
                        color: '#342a9b',
                        border: '3px solid #342a9b',
                      }}
                      
                    >Open the Pack
                    </button>
                    <span className="fs-4   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>
                  {/* Add to Inventory Button */}
                  <button
                    className="btn mt-4"
                    style={{
                      borderRadius: '30px',
                      padding: '5px 25px',
                      fontFamily: 'Bangers',
                      fontSize: '0.9rem',
                      color: '#fff',
                      fontWeight: "lighter",
                      border: '3px solid #342a9b',
                      backgroundColor: '#2a2064',
                      letterSpacing: 1
                    }}
                  >
                    ADD TO INVENTORY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Box Modal */}
      {showBoxModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '800px' }}>
            <div className="modal-content p-0" style={{ backgroundColor: '#110c1d', borderRadius: '20px', border: 'none' }}>

              <button

                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeBoxModal}
                style={{
                  background: 'white',
                  border: '1px solid blue',
                  borderRadius: '50%',

                  position: 'absolute',
                  zIndex: 100,
                  top: '30px',
                  left: '40px',
                  color: "blue",
                  paddingTop: "0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                &times;
              </button>

              <div className="modal-body d-flex p-3 justify-content-center ">
                {/* Pack Image */}
                <img
                  src="animationPhoto2.jpg"
                  alt="Pack Image"
                  style={{
                    width: '350px',
                    height: '350px',
                    borderRadius: '15px',
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.8)',
                    marginRight: "30px"

                  }}
                />


                {/* Pack Details */}
                <div className="text-white ms-4 d-flex justify-content-center align-items-center flex-column mt-4">

                  <div className='px-5 text-center'>
                    <p
                      style={{
                        color: "#4c69f6",
                        WebkitTextStroke: '0.5px #4c69f6',
                        fontFamily: "Roboto Condensed",
                        fontWeight: 100,
                        fontSize: 18,
                        letterSpacing: 4,

                      }} className=" fs-6 mb-0">ELITE BOOSTER BOX</p>

                    <p className=" text-center mb-4"
                      style={{
                        letterSpacing: 0.5,
                        fontFamily: "Roboto Condensed",
                        fontWeight: 900
                      }}>POKEMON SCARLET & VIOLET BOX</p>
                  </div>

                  <span className=" d-flex justify-content-center align-items-center mt-5 "
                    style={{
                      backgroundColor: "#201e36",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "100px",
                      border: "1px solid #403f62"

                    }} >
                    <button
                      className="btn w-75 m-1"
                      style={{
                        textAlign: "center",
                        letterSpacing: "0.01px",
                        background: '#e0e5fe',
                        fontFamily: "Bangers",
                        fontSize: 22,
                        color: '#3f51b5',
                        borderRadius: '50px',
                        padding: '2px 29px',
                        color: '#342a9b',
                        border: '3px solid #342a9b',
                      }}
                      onClick={openInsideModal}
                    >SEE What's INSIDE
                    </button>
                    <span className="fs-3   " style={{ color: '#fff', padding: '0px 10px', fontSize: 1, fontFamily: "Bangers", paddingRight: '15px' }}>
                      $10.56
                    </span>
                  </span>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inside Modal */}
      {showInsideModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '900px' }}>

            <div className="modal-content p-0" style={{ backgroundColor: '#110c1d', borderRadius: '20px', border: 'none' }}>
              <button

                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeInsideModal}
                style={{
                  background: 'white',
                  border: '1px solid blue',
                  borderRadius: '50%',
                  position: 'absolute',
                  zIndex: 100,
                  top: '30px',
                  left: '20px',
                  color: "blue",
                  paddingTop: "0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                &times;
              </button>

              <div className="modal-body  ">

                <div className=" ms-4 d-flex flex-md-row flex-column align-items-center  d-flex justify-content-between  ">

                  <div className='ps-4'>
                    <img
                      alt="Inside Box"
                      src='1000008178.png'
                      style={{
                        width: '300px',
                        height: 'auto',

                      }}
                    />
                  </div>

                  <div
                    className="d-md-flex justify-content-center align-items-center gap-0 pe-5"
                    style={{
                      gap: '20px', // Space between buttons
                      padding: '20px 0',
                    }}
                  >
                    {/* Open All Button */}
                    <button
                      className="btn"
                      style={{
                        padding: '5px 35px',
                        borderRadius: '30px',
                        backgroundColor: '#d6e4ff',
                        color: '#342a9b',
                        fontFamily: 'Bangers',
                        fontSize: '18px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                        border: '3px solid #342a9b',
                      }}
                    >
                      OPEN ALL
                    </button>

                    {/* Add to Inventory Button */}
                    <button
                      className="btn "
                      style={{
                        padding: '5px 20px',
                        borderRadius: '30px',
                        backgroundColor: '#281e60',
                        color: '#ffffff',
                        fontFamily: 'Bangers',
                        fontSize: '17px',
                        border: '3px solid #342a9b',
                        letterSpacing: 0.5,
                        fontWeight: "lighter"
                      }}
                    >
                      ADD TO INVENTORY
                    </button>
                  </div>

                </div>

                {/* pics div */}
                <div>
                  <div className="mt-1  mx-5  mt-5  ">
                    <div className="d-flex flex-row justify-content-start align-items-center flex-wrap">
                      <img
                        style={{
                          height: "auto",
                          width: "110px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #342a9b)",
                        }}
                        src="PRODUCT.png" alt="" />
                        <img
                        style={{
                          height: "auto",
                          width: "110px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #342a9b)",
                        }}
                        src="PRODUCT.png" alt="" />
                        <img
                        style={{
                          height: "auto",
                          width: "110px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #342a9b)",
                        }}
                        src="PRODUCT.png" alt="" />
                        <img
                        style={{
                          height: "auto",
                          width: "110px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #342a9b)",
                        }}
                        src="PRODUCT.png" alt="" />
                        <img
                        style={{
                          height: "auto",
                          width: "110px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #342a9b)",
                        }}
                        src="PRODUCT.png" alt="" />
                        <img
                        style={{
                          height: "auto",
                          width: "110px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #342a9b)",
                        }}
                        src="PRODUCT.png" alt="" />
                        <img
                        style={{
                          height: "auto",
                          width: "110px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #342a9b)",
                        }}
                        src="PRODUCT.png" alt="" />
                        <img
                        style={{
                          height: "auto",
                          width: "110px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #342a9b)",
                        }}
                        src="PRODUCT.png" alt="" />
                        <img
                        style={{
                          height: "auto",
                          width: "110px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #342a9b)",
                        }}
                        src="PRODUCT.png" alt="" />
                        <img
                        style={{
                          height: "auto",
                          width: "110px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #342a9b)",
                        }}
                        src="PRODUCT.png" alt="" />
                        <img
                        style={{
                          height: "auto",
                          width: "110px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #342a9b)",
                        }}
                        src="PRODUCT.png" alt="" />
                        <img
                        style={{
                          height: "auto",
                          width: "110px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #342a9b)",
                        }}
                        src="PRODUCT.png" alt="" />
                        <img
                        style={{
                          height: "auto",
                          width: "110px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #342a9b)",
                        }}
                        src="PRODUCT.png" alt="" />
                        <img
                        style={{
                          height: "auto",
                          width: "110px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 2px #342a9b)",
                        }}
                        src="PRODUCT.png" alt="" />
                        
                     
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Footer */}
      <Footer />
    </>
  );
}

export default Main1;
