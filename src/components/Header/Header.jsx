import { A, HeaderStyled, Li, Nav, Ul } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Nav>
        <Ul>
          <Li>
            <A to="/">Home</A>
          </Li>
          <Li>
            <A to="/movies">Movies</A>
          </Li>
        </Ul>
      </Nav>
    </HeaderStyled>
  );
};

export default Header;
