import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20px;
  gap: ${({ theme }) => theme.countSize(2)};
`;

export const MovieCard = styled.li`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.countSize(2)};
  background-color: #707070;
  width: 530px;
  max-height: 375px;
`;

export const MovieLink = styled(Link)`
  display: flex;
`;

export const Img = styled.img`
  width: 250px;
`;

export const MovieDesriptionWrapper = styled.div`
  padding: 0 5px;
`;

export const TitleRatingWrapper = styled.div`
margin-bottom: 60px;
` 

export const MovieTitle = styled.p`
  margin-bottom: ${({ theme }) => theme.countSize(5)};
  font-size: ${({ theme }) => theme.countSize(8)};
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const MovieOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.countSize(3)};
`;

export const MovieRating = styled.p`
  margin-bottom: ${({ theme }) => theme.countSize(5)};
  font-size: ${({ theme }) => theme.countSize(7)};
`;

export const MovieOverviewTitle = styled.p`
  font-size: ${({ theme }) => theme.countSize(5)};
`;

export const MovieOverview = styled.p`
height: 130px;
`;
