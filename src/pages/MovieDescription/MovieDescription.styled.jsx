import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Paddings = styled.div`
padding: 0 20px;
`

export const MovieDescriptionWrapper = styled.div`
  display: flex;
`;

export const ReturnLink = styled(Link)`
display: block;
  margin-bottom: ${({ theme }) => theme.countSize(5)};
`;
