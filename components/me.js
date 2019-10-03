import React from 'react';

const Me = () => (
  <div className="me">
    <h1>Diego Chávez</h1>
    <hr />
    <h2>FullStack Web Developer</h2>

    <style jsx>{`
      .me {
        text-align: center;
      }

      h1 {
        color: rgba(2, 120, 189, 1);
        font-size: 4rem;
        line-height: 1rem;
      }

      hr {
        border: 0.5px solid rgba(2, 120, 189, 0.9);
      }

      h2 {
        color: rgba(2, 120, 189, 0.8);
        font-size: 2rem;
        line-height: 1.5rem;
      }
    `}</style>
  </div>
);

export default Me;