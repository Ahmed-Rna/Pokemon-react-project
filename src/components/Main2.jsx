import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Main2() {
    return (

        <>
            {/* Navbar */}
            <div className=' d-flex justify-content-around mt-5  align-items-center  position-absolute w-100  '>
                <div className='fw-bolder ms-5  bg-white rounded-pill  align-content-center justify-content-center  pe-1 ps-1   ' style={{ border: "2px solid #342a9b" }}>
                    <svg className='fw-bolder fs-1' xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="#342a9b" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </div>

                <div className='ms-md-5 ps-md-5 mb-3 '>
                    <button style={{
                        backgroundColor: '#201955',
                        fontFamily: 'Bangers',
                        borderRadius: "20px",
                        color: 'white'
                    }} className='btn mx-3 py-0 bg-transparent'>Inventory</button>
                    <button style={{
                        backgroundColor: '#201955',

                        fontFamily: 'Bangers',
                        borderRadius: "20px",
                        color: 'white'
                    }} className='btn mx-3 py-0 bg-transparent'>Deposit</button>
                    <button style={{
                        backgroundColor: '#201955',

                        fontFamily: 'Bangers',
                        borderRadius: "20px",
                        color: 'white'
                    }} className='btn mx-3 py-0 bg-transparent'>Account</button>
                    <button style={{
                        backgroundColor: '#201955',
                        border: '2px solid #342a9b',
                        fontFamily: 'Bangers',
                        borderRadius: "20px",
                        color: 'white'

                    }}
                        className='btn btn-info mx-3 py-0 '>$ 20,000-</button>
                </div>

                <div className='container position-absolute '
                    style={{
                        marginTop: "100vh"
                    }}>
                    <h1
                        style={{ fontFamily: 'Luckiest Guy', WebkitTextStroke: '2px #3f51b5', fontWeight: "bolder", fontStyle: "normal", fontSize: "70px" }}
                        className="text-white  text-center  ">BLOGS</h1>

                    <h3 className=' text-center  text-white'
                        style={{
                            fontWeight: 400,
                            fontFamily: 'Bangers',
                            letterSpacing: 2
                        }}>NEWS AND UPDATES ABOUT OPEN THAT PACK</h3>

                    <img
                        className=' mt-5'
                        style={{
                            width: '100%',
                            height: '45vh',
                            objectFit: 'contain'
                        }}
                        src="main2pic.png" alt="" />

                    <div className=' container    position-absolute mb-5'>

                        <div className="container-fluid py-5 w-75  ">
                            <div className="row justify-content-center "
                            style={{
                                marginBottom:"400px"
                            }}>
                                {/* Card 1 */}

                                <div className="col-md-6 mb-4">
                                    <div
                                        className="card custom-card rounded-5"
                                        style={{
                                            border: "2px solid #342a9b",
                                        }}
                                    >
                                        <div className="card-body text-center p-0">
                                            {/* Image Container with Relative Position */}
                                            <div style={{ position: 'relative' }}>
                                                <img
                                                    src="manycards.png"
                                                    alt="Pokemon Card"
                                                    className="img-fluid p-0 m-0 card-image"
                                                    style={{ overflow: 'hidden' }}
                                                />

                                                {/* Positioned Button */}
                                                <button
                                                    style={{
                                                        position: 'absolute',
                                                        bottom: '-10px',
                                                        left: '20px',
                                                        border: '2px solid #342a9b',
                                                        fontWeight: 100,
                                                        fontSize: '12px',
                                                        backgroundColor: '#8886a0',
                                                        padding: '5px 10px',
                                                        borderRadius: '10px',
                                                    }}
                                                    className="btn text-white mb-3"
                                                >
                                                    POKEMON BLOGS
                                                </button>
                                            </div>

                                            {/* Card Content */}
                                            <div
                                                className="container overflow-hidden px-5"
                                                style={{
                                                    background: 'linear-gradient(180deg, #31246E 0%, #19144A 100%)',
                                                    borderBottomLeftRadius: '30px',
                                                    borderBottomRightRadius: '30px',
                                                }}
                                            >
                                                <p
                                                    className="text-start mt-0 pt-4"
                                                    style={{
                                                        color: 'white',
                                                        fontFamily: 'Bangers',
                                                        fontSize: '22px',
                                                        fontWeight: 400,
                                                        letterSpacing: 1,
                                                        lineHeight: 1,
                                                    }}
                                                >
                                                    How to Get Started with Online Pokemon Card Opening in 2024
                                                </p>

                                                <p
                                                    className="text-start mt-0 pt-2"
                                                    style={{
                                                        letterSpacing: -0.8,
                                                        lineHeight: 1,
                                                        fontFamily: 'Roboto Condensed',
                                                        fontWeight: 200,
                                                        color: 'white',
                                                    }}
                                                >
                                                    We are very excited that you have discovered the world of virtual Pokemon card opening! In this guide, we’ll walk you through how to open Pokemon cards online—it’s almost like opening them in person. Sounds easy, without hassle, right? (Haha!) With ...
                                                </p>

                                                <div className="d-flex justify-content-start">
                                                    <button
                                                        className="btn"
                                                        style={{
                                                            textAlign: 'center',
                                                            letterSpacing: '0.1px',
                                                            background: '#e0e5fe',
                                                            fontFamily: 'Bangers',
                                                            fontSize: 17,
                                                            color: '#3f51b5',
                                                            borderRadius: '50px',
                                                            padding: '2px 25px',
                                                            color: '#342a9b',
                                                            border: '2px solid #342a9b',
                                                            marginBottom: '25px',
                                                            marginTop: '10px',
                                                        }}
                                                    >
                                                        Read More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Card 2 */}
                                <div className="col-md-6 mb-4">
                                    <div
                                        className="card custom-card rounded-5"
                                        style={{
                                            border: "2px solid #342a9b",
                                        }}
                                    >
                                        <div className="card-body text-center p-0">
                                            {/* Image Container with Relative Position */}
                                            <div style={{ position: 'relative' }}>
                                                <img
                                                    src="manycards.png"
                                                    alt="Pokemon Card"
                                                    className="img-fluid p-0 m-0 card-image"
                                                    style={{ overflow: 'hidden' }}
                                                />

                                                {/* Positioned Button */}
                                                <button
                                                    style={{
                                                        position: 'absolute',
                                                        bottom: '-10px',
                                                        left: '20px',
                                                        border: '2px solid #342a9b',
                                                        fontWeight: 100,
                                                        fontSize: '12px',
                                                        backgroundColor: '#8886a0',
                                                        padding: '5px 10px',
                                                        borderRadius: '10px',
                                                    }}
                                                    className="btn text-white mb-3"
                                                >
                                                    POKEMON BLOGS
                                                </button>
                                            </div>

                                            {/* Card Content */}
                                            <div
                                                className="container overflow-hidden px-5"
                                                style={{
                                                    background: 'linear-gradient(180deg, #31246E 0%, #19144A 100%)',
                                                    borderBottomLeftRadius: '30px',
                                                    borderBottomRightRadius: '30px',
                                                }}
                                            >
                                                <p
                                                    className="text-start mt-0 pt-4"
                                                    style={{
                                                        color: 'white',
                                                        fontFamily: 'Bangers',
                                                        fontSize: '22px',
                                                        fontWeight: 400,
                                                        letterSpacing: 1,
                                                        lineHeight: 1,
                                                    }}
                                                >
                                                    How to Get Started with Online Pokemon Card Opening in 2024
                                                </p>

                                                <p
                                                    className="text-start mt-0 pt-2"
                                                    style={{
                                                        letterSpacing: -0.8,
                                                        lineHeight: 1,
                                                        fontFamily: 'Roboto Condensed',
                                                        fontWeight: 200,
                                                        color: 'white',
                                                    }}
                                                >
                                                    We are very excited that you have discovered the world of virtual Pokemon card opening! In this guide, we’ll walk you through how to open Pokemon cards online—it’s almost like opening them in person. Sounds easy, without hassle, right? (Haha!) With ...
                                                </p>

                                                <div className="d-flex justify-content-start">
                                                    <button
                                                        className="btn"
                                                        style={{
                                                            textAlign: 'center',
                                                            letterSpacing: '0.1px',
                                                            background: '#e0e5fe',
                                                            fontFamily: 'Bangers',
                                                            fontSize: 17,
                                                            color: '#3f51b5',
                                                            borderRadius: '50px',
                                                            padding: '2px 25px',
                                                            color: '#342a9b',
                                                            border: '2px solid #342a9b',
                                                            marginBottom: '25px',
                                                            marginTop: '10px',
                                                        }}
                                                    >
                                                        Read More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div
                                        className="card custom-card rounded-5"
                                        style={{
                                            border: "2px solid #342a9b",
                                        }}
                                    >
                                        <div className="card-body text-center p-0">
                                            {/* Image Container with Relative Position */}
                                            <div style={{ position: 'relative' }}>
                                                <img
                                                    src="manycards.png"
                                                    alt="Pokemon Card"
                                                    className="img-fluid p-0 m-0 card-image"
                                                    style={{ overflow: 'hidden' }}
                                                />

                                                {/* Positioned Button */}
                                                <button
                                                    style={{
                                                        position: 'absolute',
                                                        bottom: '-10px',
                                                        left: '20px',
                                                        border: '2px solid #342a9b',
                                                        fontWeight: 100,
                                                        fontSize: '12px',
                                                        backgroundColor: '#8886a0',
                                                        padding: '5px 10px',
                                                        borderRadius: '10px',
                                                    }}
                                                    className="btn text-white mb-3"
                                                >
                                                    POKEMON BLOGS
                                                </button>
                                            </div>

                                            {/* Card Content */}
                                            <div
                                                className="container overflow-hidden px-5"
                                                style={{
                                                    background: 'linear-gradient(180deg, #31246E 0%, #19144A 100%)',
                                                    borderBottomLeftRadius: '30px',
                                                    borderBottomRightRadius: '30px',
                                                }}
                                            >
                                                <p
                                                    className="text-start mt-0 pt-4"
                                                    style={{
                                                        color: 'white',
                                                        fontFamily: 'Bangers',
                                                        fontSize: '22px',
                                                        fontWeight: 400,
                                                        letterSpacing: 1,
                                                        lineHeight: 1,
                                                    }}
                                                >
                                                    How to Get Started with Online Pokemon Card Opening in 2024
                                                </p>

                                                <p
                                                    className="text-start mt-0 pt-2"
                                                    style={{
                                                        letterSpacing: -0.8,
                                                        lineHeight: 1,
                                                        fontFamily: 'Roboto Condensed',
                                                        fontWeight: 200,
                                                        color: 'white',
                                                    }}
                                                >
                                                    We are very excited that you have discovered the world of virtual Pokemon card opening! In this guide, we’ll walk you through how to open Pokemon cards online—it’s almost like opening them in person. Sounds easy, without hassle, right? (Haha!) With ...
                                                </p>

                                                <div className="d-flex justify-content-start">
                                                    <button
                                                        className="btn"
                                                        style={{
                                                            textAlign: 'center',
                                                            letterSpacing: '0.1px',
                                                            background: '#e0e5fe',
                                                            fontFamily: 'Bangers',
                                                            fontSize: 17,
                                                            color: '#3f51b5',
                                                            borderRadius: '50px',
                                                            padding: '2px 25px',
                                                            color: '#342a9b',
                                                            border: '2px solid #342a9b',
                                                            marginBottom: '25px',
                                                            marginTop: '10px',
                                                        }}
                                                    >
                                                        Read More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div
                                        className="card custom-card rounded-5"
                                        style={{
                                            border: "2px solid #342a9b",
                                        }}
                                    >
                                        <div className="card-body text-center p-0">
                                            {/* Image Container with Relative Position */}
                                            <div style={{ position: 'relative' }}>
                                                <img
                                                    src="manycards.png"
                                                    alt="Pokemon Card"
                                                    className="img-fluid p-0 m-0 card-image"
                                                    style={{ overflow: 'hidden' }}
                                                />

                                                {/* Positioned Button */}
                                                <button
                                                    style={{
                                                        position: 'absolute',
                                                        bottom: '-10px',
                                                        left: '20px',
                                                        border: '2px solid #342a9b',
                                                        fontWeight: 100,
                                                        fontSize: '12px',
                                                        backgroundColor: '#8886a0',
                                                        padding: '5px 10px',
                                                        borderRadius: '10px',
                                                    }}
                                                    className="btn text-white mb-3"
                                                >
                                                    POKEMON BLOGS
                                                </button>
                                            </div>

                                            {/* Card Content */}
                                            <div
                                                className="container overflow-hidden px-5"
                                                style={{
                                                    background: 'linear-gradient(180deg, #31246E 0%, #19144A 100%)',
                                                    borderBottomLeftRadius: '30px',
                                                    borderBottomRightRadius: '30px',
                                                }}
                                            >
                                                <p
                                                    className="text-start mt-0 pt-4"
                                                    style={{
                                                        color: 'white',
                                                        fontFamily: 'Bangers',
                                                        fontSize: '22px',
                                                        fontWeight: 400,
                                                        letterSpacing: 1,
                                                        lineHeight: 1,
                                                    }}
                                                >
                                                    How to Get Started with Online Pokemon Card Opening in 2024
                                                </p>

                                                <p
                                                    className="text-start mt-0 pt-2"
                                                    style={{
                                                        letterSpacing: -0.8,
                                                        lineHeight: 1,
                                                        fontFamily: 'Roboto Condensed',
                                                        fontWeight: 200,
                                                        color: 'white',
                                                    }}
                                                >
                                                    We are very excited that you have discovered the world of virtual Pokemon card opening! In this guide, we’ll walk you through how to open Pokemon cards online—it’s almost like opening them in person. Sounds easy, without hassle, right? (Haha!) With ...
                                                </p>

                                                <div className="d-flex justify-content-start">
                                                    <button
                                                        className="btn"
                                                        style={{
                                                            textAlign: 'center',
                                                            letterSpacing: '0.1px',
                                                            background: '#e0e5fe',
                                                            fontFamily: 'Bangers',
                                                            fontSize: 17,
                                                            color: '#3f51b5',
                                                            borderRadius: '50px',
                                                            padding: '2px 25px',
                                                            color: '#342a9b',
                                                            border: '2px solid #342a9b',
                                                            marginBottom: '25px',
                                                            marginTop: '10px',
                                                        }}
                                                    >
                                                        Read More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                




                            </div>
                        </div>
                        <div className='container '>
                        <Footer/>
                    </div>

                    </div>

                    
                </div>
            </div>

            {/* stars image */}
            <div className="" style={{ width: '100vw', height: '70vh', overflow: 'hidden' }}>
                <img src="stars.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>








        </>
    )
}

export default Main2
