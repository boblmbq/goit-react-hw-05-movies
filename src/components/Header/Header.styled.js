import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  padding: 22px 20px;
  width: auto;
  height: ${({ theme }) => theme.countSize(33)};
  background-color: ${({ theme }) => theme.colors.headerBack};
`;

export const Nav = styled.nav`
  width: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Li = styled.li`
  display: flex;
  height: ${({ theme }) => theme.countSize(22)};
  width: 50%;
`;

export const A = styled(NavLink)`
text-align: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.countSize(16)};
`;
