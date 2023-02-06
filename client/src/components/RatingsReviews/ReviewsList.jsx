import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import SingleReview from './SingleReview.jsx'
import AddReviewForm from './AddReviewForm.jsx';

const ReviewsList = ({product_id, reviews, sortBy, reviewsShown, handleSortBy, handleReviewsShown, characteristics}) => {

  const [modalState, setModalState] = useState(false)

  function addReview() {
    setModalState(!modalState);
  }

  return (
    <div className='reviews-list'>
        <div className='reviews-tot-sorted-by' value={sortBy} onChange={(event) => {handleSortBy(event.target.value)}}> {reviews.length} reviews, sorted by
          <select className='sort-by'>
            <option value='relevance'>relevance</option>
            <option value='newest'>newest</option>
            <option value='helpfulness'>helpfulness</option>
          </select>
        </div>

        {reviews.slice(0, reviewsShown).map((singleReview) => {
          return (
            <div key={singleReview.review_id}><SingleReview review={singleReview}/></div>
          )
        })}

        <div>
        {reviews.length > reviewsShown && (
          <button className='more-reviews' onClick={() => handleReviewsShown()}> MORE REVIEWS</button>
        )}
           <button className='add-review' onClick={addReview}>
            ADD A REVIEW +</button>
           <Modal isOpen={modalState} onRequestClose={() => {setModalState(false)}} ariaHideApp={false}
           style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '300px'
            }
          }}>
            <AddReviewForm product_id={product_id} closeModal={() => setModalState(false)} characteristics={characteristics}/>
           </Modal>
        </div>
    </div>

  )
}

export default ReviewsList;