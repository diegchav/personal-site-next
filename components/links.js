import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Links = () => (
  <div className="links">
    <a href="https://github.com/diegchav" target="_blank">
      <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
    </a>
    <a href="https://www.linkedin.com/in/diego-chávez-3316ba140" target="_blank">
      <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
    </a>

    <style jsx>{`
      .links {
        text-align: center;
      }

      .links a {
        margin: 0 0.25rem;
      }
    `}</style>
  </div>
);

export default Links;