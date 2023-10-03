import styled from '@emotion/styled';

export const TextDescrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0 12px;
`;

export const DescrTitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: ${({ gap }) => gap}px;
`;

export const Title = styled.h1`
  line-height: 0.7;
  text-transform: uppercase;
  font-weight: 400;
`;

export const TextWrapper = styled.p`
  margin-left: ${({ theme }) => theme.countSize(1.5)};
  font-size: ${({ props, theme }) => theme.countSize(props)};
`;

export const TextGendresWrapper = styled.p`
  margin-left: ${({ theme }) => theme.countSize(1)};
  font-size: ${({ fSize, theme }) => theme.countSize(fSize)};
`;

export const UlStyled = styled.ul`
  display: flex;
  margin-left: 8px;
  font-size: ${({ props, theme }) => theme.countSize(props)};
  gap: ${({ theme }) => theme.countSize(1)};
`;
export const HTwoTtitle = styled.h2`
  font-weight: 400;
`;
