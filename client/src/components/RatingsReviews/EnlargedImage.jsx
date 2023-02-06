import React from 'react';
import ReactModal from 'react-modal';

const EnlargedImage = ({imageUrl, isOpen, onClose }) => {
  // console.log(imageUrl)
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
          width: '90%',
          height: '80%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
      }}
    >

      <img src={imageUrl} alt="enlarged review photo" style={{ height: '650px', width: '950px' }} />
      <div className="overlay" onClick={onClose}></div>


    </ReactModal>
  );
};

export default EnlargedImage;