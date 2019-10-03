import React from 'react';

const Me = () => (
  <div className="me">
    <h1 className="name">Diego Chávez</h1>
    <hr />
    <h2 className="role">FullStack Web Developer</h2>

    <style jsx>{`
      .me {
        text-align: center;
      }

      .name {
        color: rgba(2, 120, 189, 1);
        font-size: 4rem;
        line-height: 1rem;
      }

      hr {
        border: 0.5px solid rgba(2, 120, 189, 0.9);
      }

      .role {
        color: rgba(2, 120, 189, 0.8);
        font-size: 2rem;
        line-height: 1.5rem;
      }

      @media (max-width: 767px) {
        .name {
          font-size: 3rem;
          line-height: 2rem;
        }

        .role {
          font-size: 2rem;
          line-height: 2rem;
        }
      }
    `}</style>
  </div>
);

export default Me;