import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Paddings = styled.div`
  padding: 0 20px;
`;

export const MovieDescriptionWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: ${({ theme }) => theme.countSize(10)};
`;

export const ReturnLink = styled(Link)`
  display: block;
  margin-bottom: ${({ theme }) => theme.countSize(5)};
`;

export const UlStyled = styled.ul`
  display: flex;
  gap: 20px;
`;

export const CustomLi = styled.li`
  display: block;
  text-transform: uppercase;
  text-decoration: underline;
  weight: 400;
  font-size: ${({ theme, fSize }) => theme.countSize(fSize)};
`;
