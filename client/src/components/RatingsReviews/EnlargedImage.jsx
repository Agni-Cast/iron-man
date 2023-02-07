import React from 'react';
import ReactModal from 'react-modal';

const EnlargedImage = ({imageUrl, isOpen, onClose }) => {

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
          width: '85%',
          height: '85%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          background: 'none'
        },
      }}
    >

      <img src={imageUrl} alt="enlarged review photo" style={{ height: '100%', width: '100%' }} />
      <div className="overlay" style={{ background: 'rgba(0, 0, 0, 0.5)' }} onClick={onClose}></div>


    </ReactModal>
  );
};

export default EnlargedImage;