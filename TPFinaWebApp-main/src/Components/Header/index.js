import { Container, Logo, Nav } from "./styles";

import { Link } from "react-router-dom";

const Header = () => (
  <Container>
    <Logo>
      <h1>IFSP</h1>
    </Logo>
    <Nav>
      <Link to="/admin">ADMIN</Link>
      <Link to="/">SIGNOUT</Link>
    </Nav>
  </Container>
);

export default Header;
