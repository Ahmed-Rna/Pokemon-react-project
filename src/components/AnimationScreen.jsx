import React, { useState } from 'react';
import './AnimationScreen.css';

function AnimationScreen() {
  const [showModal, setShowModal] = useState(false);
  const [animateDiv, setAnimateDiv] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Function to open modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
    setAnimateDiv(false);
    setShowDetails(false);
  };

  // Function to start animation
  const startAnimation = () => {
    setAnimateDiv(true);

    // After 2 seconds, hide the image div and show the details
    setTimeout(() => {
      setShowDetails(true);
    }, 1500);
  };

  return (
    <div>
      {/* Button to show the modal */}
      <div className='d-flex justify-content-center mt-5'>
        <button className='btn btn-primary' onClick={openModal}>
          Show animation
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '900px' }}>
            <div className="modal-content p-0 overflow-hidden" style={{ border: 'none' }}>
              <img
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                src="bgimage.jpg"
                alt=""
              />
              {/* Close button */}
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeModal}
                style={{
                  background: 'white',
                  border: '1px solid blue',
                  borderRadius: '50%',
                  position: 'absolute',
                  zIndex: 100,
                  top: '30px',
                  left: '40px',
                  color: 'blue',
                  cursor: 'pointer',
                }}
              >
                &times;
              </button>

              <div className="modal-body d-flex justify-content-center">
                {/* Animation Container */}
                {!showDetails && (
                  <div
                    className={`animation-container ${animateDiv ? 'animate' : ''}`}
                    onClick={startAnimation}
                  >
                    <img
                      src="removebg.png"
                      alt="Pack Image"
                      className="pack-image img-fluid object-fit-contain w-100 h-100"
                    />
                  </div>
                )}

                {/* Pack Details */}
                {showDetails && (
                  <div className="pack-details text-white ms-4 d-flex justify-content-center align-items-center flex-column my-4 ">
                    <img src="card-hd.png " alt="" 
                    style={{
                        height:"200px",
                        
                    }}/>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnimationScreen;
