import React from 'react';

function Navbar() {
  return (
    <div className=' d-flex justify-content-around mt-5  align-items-center  position-absolute w-100  '>
    <div className='fw-bolder ms-5  bg-white rounded-pill  align-content-center justify-content-center  pe-1 ps-1   ' style={{  border:"2px solid #342a9b"}}>
        <svg className='fw-bolder fs-1' xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="#342a9b" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </div>

        <div className='ms-md-5 ps-md-5 '>
            
            <button style={{
                backgroundColor: '#201955',
                border: '2px solid #342a9b',
                fontFamily: 'Bangers',
                borderRadius:"20px",
                color: 'white'
  
            }}
             className='btn btn-info mx-3 py-0 '>$ 20,000-</button>
        </div>
    </div>
  );
}

export default Navbar;

