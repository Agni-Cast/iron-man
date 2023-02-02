import React from 'react';
import ReactModal from 'react-modal';

const EnlargedImageModal = ({imageUrl, isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '80%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
      }}
    >

      <img src={imageUrl} alt="enlarged answer photo" style={{ height: '750px', width: 'auto' }} />
      <div className="overlay" onClick={onClose}></div>
      {/* <button onClick={onClose} style={{position: 'absolute', bottom: '5px'}}>Close</button> */}

    </ReactModal>
  );
};

export default EnlargedImageModal;