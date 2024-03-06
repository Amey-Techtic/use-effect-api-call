import React from "react";
import './WriteReviewForm.css'
const WriteReviewForm = () => {
  return (
    <div className="review-form-wrapper">
      <form className="review-form">
        <div className="review-form-title-text">Write a review</div>
        <div className="review-form-rating-label-svg-wrapper">
          <label className="review-form-rating">Rating</label>

          <div class="review-form-rating-label">
            <svg
              class="review-form-star-svg"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="review-form-star-svg"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="review-form-star-svg"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="review-form-star-svg"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="review-form-star-svg"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
        <div className="review-form-review-title-review-input-wrapper">
          <label className="review-form-review-title-label">Review Title</label>
          <input
            className="review-form-review-input"
            placeholder="Give your review a title"
          />
        </div>
        <div className="review-form-review-title-comments-textarea-wrapper">
          <label className="review-form-review-title-label">Review</label>
          <textarea
            className="review-form-comments-textarea"
            placeholder="Write your comments here"
          ></textarea>
        </div>
        <div className="review-form-picture-file-input-select-label-wrapper">
          <label className="review-form-picture-title-label">Picture</label>
          <input
            type="file"
            multiple
            accept="image/gif,image/jpeg,image/jpg,image/png,image/webp"
            className="hidden"
            id="file-input"
            name="file-input"
          />

          <label
            className="review-form-select-image-label"
            id="file-input-label"
            for="file-input"
          >
            Upload Picture
          </label>
        </div>
        <div className="review-form-name-label-name-input-wrapper">
          <label className="review-form-name-label">Name (displayed publicly like John Smith)</label>
          <input
            className="review-form-name-input"
            placeholder="Enter your name (public)"
          />
        </div>
        <div className="review-form-email-label-email-input-wrapper">
          <label className="review-form-email-label">Email</label>
          <input
            className="review-form-email-input"
            placeholder="Enter your email (private)"
          />
        </div>
        <div className="review-form-terms-and-condition-wrapper">
          How we use your data: We’ll only contact you about the review you
          left, and only if necessary. By submitting your review, you agree to
          Judge.me’s
          <div className="review-form-terms-and-condition-privacy-and-policy-wrapper">
           <p className="review-form-terms-and-condition-text"> terms and conditions </p>  and  <p className="review-form-privacy-and-policy-text">privacy policy</p>.
           </div>
        </div>
        <div className="review-form-cancel-button-submit-button-wrapper">
            <button className="review-form-cancel-button">Cancel Review</button>
            <button className="review-form-submit-button">Submit Review</button>

        </div>
      </form>
    </div>
  );
};

export default WriteReviewForm;
