import styled from "styled-components";

import { colorScheme } from "../../globalStyle";

export const Container = styled.div`
  height: 80px;
  background-color: ${colorScheme.fill.third};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.div`
  margin: 20px;
`;

export const Nav = styled.nav`
  display: flex;

  a {
    margin: 0 10px;
  }
`;
