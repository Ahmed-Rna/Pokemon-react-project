import React from 'react';

function Navbar() {
  return (
    <nav style={{ gap: "400px" }} className="navbar  bg-light justify-content-center   bg-transparent container-fluid  position-absolute ">
      <div className='fw-bolder  bg-white rounded-pill  align-content-center justify-content-center  pe-1 ps-1   ' style={{  border:"2px solid #342a9b"}}>
        <svg className='fw-bolder fs-1' xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="#342a9b" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </div>
      
        <button className="btn  text-white fst-italic  py-0 px-4 rounded-pill fs-6" style={{ backgroundColor: "#291e61",border:"2px solid #342a9b",fontFamily:"sans-serif",fontFamily:"Luckiest Guy" }} type="submit">LOGIN</button>
      
    </nav>
  );
}

export default Navbar;

