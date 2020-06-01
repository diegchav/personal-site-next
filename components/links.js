import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Links = () => (
  <div className="links">
    <a href="https://github.com/diegchav" target="_blank">
      <FontAwesomeIcon icon={['fab', 'github']} width="32" />
    </a>
    <a href="https://www.linkedin.com/in/diegchav" target="_blank">
      <FontAwesomeIcon icon={['fab', 'linkedin']} width="32" />
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