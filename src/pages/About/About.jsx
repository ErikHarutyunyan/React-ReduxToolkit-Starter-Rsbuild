import { Link, Outlet } from 'react-router-dom';

import { Wrapper } from './About.styles';

const About = () => {
  return (
    <Wrapper>
      <h1>About Us</h1>
      <ul>
        <li>
          <Link to="contacts">Our Contact</Link>
        </li>
        <li>
          <Link to="team">Our Team</Link>
        </li>
      </ul>
      <Outlet />
    </Wrapper>
  );
};

export default About;
