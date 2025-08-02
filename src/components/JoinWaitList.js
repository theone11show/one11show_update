import React, { useState } from 'react';
import './JoinWaitList.css'; // optional: styling file if you want to use custom CSS

function JoinWaitList() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your backend/API call here
    console.log('Email submitted:', email);
    setSubmitted(true);
  };

  return (
    <div className="join-waitlist-container" style={styles.container}>
      <h2 style={styles.heading}>Join Our Waitlist</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Join Now</button>
        </form>
      ) : (
        <p style={styles.success}>Thank you for joining! 🎉</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '80px auto',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  success: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: '18px',
  },
};

export default JoinWaitList;
