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
                    <button className='nav-buttons btn mx-3 py-0 bg-transparent'>Inventory</button>
                    <button className='nav-buttons btn mx-3 py-0 bg-transparent'>Deposit</button>
                    <button className='nav-buttons btn mx-3 py-0 bg-transparent'>Account</button>
                    <button className='nav-buttons btn btn-info mx-3 py-0 ' style={{ border: '2px solid #342a9b' }}>$ 20,000-</button>
                </div>

                <div className='container position-absolute  '
                    style={{
                        marginTop: "100vh"
                    }}>
                    <h1
                        style={{ fontFamily: 'Luckiest Guy', WebkitTextStroke: '2px #3f51b5', fontWeight: "bolder", fontStyle: "normal", fontSize: "70px" }}
                        className="text-white  text-center mt-5 mt-lg-0 ">BLOGS</h1>

                    <h3 className=' text-center  text-white'
                        style={{
                            fontWeight: 400,
                            fontFamily: 'Bangers',
                            letterSpacing: 2
                        }}>NEWS AND UPDATES ABOUT OPEN THAT PACK</h3>

                    <div className="container px-5">
                        <div
                            className="rounded-5 mx-md-5 d-lg-flex justify-content-between pe-lg-5 px-2 align-items-center  flex-column-reverse flex-lg-row"
                            style={{ background: 'linear-gradient(270deg, #31246E 0%, #19144A 100%)' }}
                        >
                            {/* details */}
                            <div className="w-md-75 w-100 px-md-5 px-3 order-2 order-lg-1">
                                <h3 className="fw-bold text-start text-white pt-4">Latest posts</h3>

                                <h5 className="text-start text-white pe-md-5 pt-2">
                                    MTG Final Fantasy set release date and everything you need to know
                                </h5>

                                <p
                                    className="fs-6 fw-6 text-white text-start mt-4 pe-md-5"
                                    style={{
                                        letterSpacing: -0.8,
                                        lineHeight: 0.9,
                                        fontFamily: 'Roboto Condensed',
                                        fontWeight: 100,
                                    }}
                                >
                                    Magic: The Gathering has unveiled its Final Fantasy crossover set, scheduled for release on June 13, 2025. This highly anticipated collaboration will span the entire Final Fantasy series, encompassing 16 main games and some additional elements. The s ....
                                </p>

                                <div className="d-flex justify-content-start mt-4 text-center">
                                    <button className="btn px-3 rounded-pill" style={{ background: '#e0e5fe', color: '#342a9b', fontFamily: 'Bangers', border: '2px solid #342a9b' }}>
                                        Read More
                                    </button>
                                </div>
                            </div>

                            {/* image div */}
                            <div className="mx-auto w-50 py-md-2 overflow-hidden final-img order-1 order-lg-2">
                                <img className="w-100 rounded-5" src="1.jpg" alt="" />
                            </div>
                        </div>
                    </div>



                    <div className=' container    position-absolute mb-5'>

                        <div className="container-fluid py-5 w-75  ">
                            <div className="row justify-content-center "
                                style={{
                                    marginBottom: "400px"
                                }}>
                                {/* Card 1 */}

                                <div className="col-md-6 mb-4">
                                    <div className="card custom-card rounded-5" style={{ border: "2px solid #342a9b" }}>
                                        <div className="card-body text-center p-0">
                                            <div style={{ position: 'relative' }}>

                                                <img src="manycards.png" alt="Pokemon Card" className="img-fluid p-0 m-0 card-image" style={{ overflow: 'hidden' }} />

                                                <button style={{ position: 'absolute', bottom: '-10px', left: '20px', border: '2px solid #342a9b', fontWeight: 100, fontSize: '12px', backgroundColor: '#8886a0', padding: '5px 10px', borderRadius: '10px' }} 
                                                className="btn text-white mb-3">POKEMON BLOGS</button>
                                            
                                            </div>
                                            <div className="container overflow-hidden px-5" style={{ background: 'linear-gradient(180deg, #31246E 0%, #19144A 100%)', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px' }}>

                                                <p className="text-start mt-0 pt-4" style={{ color: 'white', fontFamily: 'Bangers', fontSize: '22px', fontWeight: 400, letterSpacing: 1, lineHeight: 1 }}>
                                                    How to Get Started with Online Pokemon Card Opening in 2024</p>

                                                <p className="text-start mt-0 pt-2" style={{ letterSpacing: -0.8, lineHeight: 1, fontFamily: 'Roboto Condensed', fontWeight: 200, color: 'white' }}>We are very excited that you have discovered the world of virtual Pokemon card opening! In this guide, we’ll walk you through how to open Pokemon cards online—it’s almost like opening them in person. Sounds easy, without hassle, right? (Haha!) With ...</p>

                                                <div className="d-flex justify-content-start">
                                                    <button className="btn" style={{ textAlign: 'center', letterSpacing: '0.1px', background: '#e0e5fe', fontFamily: 'Bangers', fontSize: 17, color: '#342a9b', borderRadius: '50px', padding: '2px 25px', border: '2px solid #342a9b', marginBottom: '25px', marginTop: '10px' }}>Read More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Card 2 */}
                                <div className="col-md-6 mb-4">
                                    <div className="card custom-card rounded-5" style={{ border: "2px solid #342a9b" }}>
                                        <div className="card-body text-center p-0">
                                            <div style={{ position: 'relative' }}>

                                                <img src="manycards.png" alt="Pokemon Card" className="img-fluid p-0 m-0 card-image" style={{ overflow: 'hidden' }} />

                                                <button style={{ position: 'absolute', bottom: '-10px', left: '20px', border: '2px solid #342a9b', fontWeight: 100, fontSize: '12px', backgroundColor: '#8886a0', padding: '5px 10px', borderRadius: '10px' }} 
                                                className="btn text-white mb-3">POKEMON BLOGS</button>
                                            
                                            </div>
                                            <div className="container overflow-hidden px-5" style={{ background: 'linear-gradient(180deg, #31246E 0%, #19144A 100%)', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px' }}>

                                                <p className="text-start mt-0 pt-4" style={{ color: 'white', fontFamily: 'Bangers', fontSize: '22px', fontWeight: 400, letterSpacing: 1, lineHeight: 1 }}>
                                                    How to Get Started with Online Pokemon Card Opening in 2024</p>

                                                <p className="text-start mt-0 pt-2" style={{ letterSpacing: -0.8, lineHeight: 1, fontFamily: 'Roboto Condensed', fontWeight: 200, color: 'white' }}>We are very excited that you have discovered the world of virtual Pokemon card opening! In this guide, we’ll walk you through how to open Pokemon cards online—it’s almost like opening them in person. Sounds easy, without hassle, right? (Haha!) With ...</p>

                                                <div className="d-flex justify-content-start">
                                                    <button className="btn" style={{ textAlign: 'center', letterSpacing: '0.1px', background: '#e0e5fe', fontFamily: 'Bangers', fontSize: 17, color: '#342a9b', borderRadius: '50px', padding: '2px 25px', border: '2px solid #342a9b', marginBottom: '25px', marginTop: '10px' }}>Read More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card custom-card rounded-5" style={{ border: "2px solid #342a9b" }}>
                                        <div className="card-body text-center p-0">
                                            <div style={{ position: 'relative' }}>

                                                <img src="manycards.png" alt="Pokemon Card" className="img-fluid p-0 m-0 card-image" style={{ overflow: 'hidden' }} />

                                                <button style={{ position: 'absolute', bottom: '-10px', left: '20px', border: '2px solid #342a9b', fontWeight: 100, fontSize: '12px', backgroundColor: '#8886a0', padding: '5px 10px', borderRadius: '10px' }} 
                                                className="btn text-white mb-3">POKEMON BLOGS</button>
                                            
                                            </div>
                                            <div className="container overflow-hidden px-5" style={{ background: 'linear-gradient(180deg, #31246E 0%, #19144A 100%)', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px' }}>

                                                <p className="text-start mt-0 pt-4" style={{ color: 'white', fontFamily: 'Bangers', fontSize: '22px', fontWeight: 400, letterSpacing: 1, lineHeight: 1 }}>
                                                    How to Get Started with Online Pokemon Card Opening in 2024</p>

                                                <p className="text-start mt-0 pt-2" style={{ letterSpacing: -0.8, lineHeight: 1, fontFamily: 'Roboto Condensed', fontWeight: 200, color: 'white' }}>We are very excited that you have discovered the world of virtual Pokemon card opening! In this guide, we’ll walk you through how to open Pokemon cards online—it’s almost like opening them in person. Sounds easy, without hassle, right? (Haha!) With ...</p>

                                                <div className="d-flex justify-content-start">
                                                    <button className="btn" style={{ textAlign: 'center', letterSpacing: '0.1px', background: '#e0e5fe', fontFamily: 'Bangers', fontSize: 17, color: '#342a9b', borderRadius: '50px', padding: '2px 25px', border: '2px solid #342a9b', marginBottom: '25px', marginTop: '10px' }}>Read More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card custom-card rounded-5" style={{ border: "2px solid #342a9b" }}>
                                        <div className="card-body text-center p-0">
                                            <div style={{ position: 'relative' }}>

                                                <img src="manycards.png" alt="Pokemon Card" className="img-fluid p-0 m-0 card-image" style={{ overflow: 'hidden' }} />

                                                <button style={{ position: 'absolute', bottom: '-10px', left: '20px', border: '2px solid #342a9b', fontWeight: 100, fontSize: '12px', backgroundColor: '#8886a0', padding: '5px 10px', borderRadius: '10px' }} 
                                                className="btn text-white mb-3">POKEMON BLOGS</button>
                                            
                                            </div>
                                            <div className="container overflow-hidden px-5" style={{ background: 'linear-gradient(180deg, #31246E 0%, #19144A 100%)', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px' }}>

                                                <p className="text-start mt-0 pt-4" style={{ color: 'white', fontFamily: 'Bangers', fontSize: '22px', fontWeight: 400, letterSpacing: 1, lineHeight: 1 }}>
                                                    How to Get Started with Online Pokemon Card Opening in 2024</p>

                                                <p className="text-start mt-0 pt-2" style={{ letterSpacing: -0.8, lineHeight: 1, fontFamily: 'Roboto Condensed', fontWeight: 200, color: 'white' }}>We are very excited that you have discovered the world of virtual Pokemon card opening! In this guide, we’ll walk you through how to open Pokemon cards online—it’s almost like opening them in person. Sounds easy, without hassle, right? (Haha!) With ...</p>

                                                <div className="d-flex justify-content-start">
                                                    <button className="btn" style={{ textAlign: 'center', letterSpacing: '0.1px', background: '#e0e5fe', fontFamily: 'Bangers', fontSize: 17, color: '#342a9b', borderRadius: '50px', padding: '2px 25px', border: '2px solid #342a9b', marginBottom: '25px', marginTop: '10px' }}>Read More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='container '>
                            <Footer />
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
