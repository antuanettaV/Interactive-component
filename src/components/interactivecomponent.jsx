import React, { useState } from 'react';
import styles from './interactive.module.css';

const InteractiveComponent = () => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.star}>⭐</div>
          <h2 className={styles['thank-you-title']}>Thank You!</h2>
          <p className={styles['thank-you-message']}>
            You selected {rating} out of 5
          </p>
          <p>
            We appreciate you taking the time to give us a rating. If you ever need more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.star}>⭐</div>
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className={styles['rating-buttons']}>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setRating(num)}
              className={`${styles['rating-button']} ${
                rating === num ? styles.selected : ''
              }`}
            >
              {num}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={!rating}
          className={styles['submit-button']}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default InteractiveComponent;

