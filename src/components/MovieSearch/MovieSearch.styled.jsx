import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  padding: 0 20px;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.countSize(7)};
`;

export const InputStyled = styled.input`
  color: ${({ theme }) => theme.colors.fontColor};
  text-align: center;
  font-size: ${({ theme }) => theme.countSize(8)};
  width: 100%;
  height: ${({ theme }) => theme.countSize(11)};
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.countSize(2)};
  background-color: ${({ theme }) => theme.colors.inputSearch};

  margin-bottom: ${({ theme }) => theme.countSize(3)};

  &::placeholder {
    font-size: ${({ theme }) => theme.countSize(5)};
    text-transform: uppercase;
  }
`;

export const ButtonStyled = styled.button`
  width: max-content;
  font-size: ${({ theme }) => theme.countSize(4)};
  color: ${({ theme }) => theme.colors.fontColor};
  background: none;
  border: none;
  text-transform: uppercase;
  &:hover,
  &:focus {
    cursor: pointer;
    text-decoration: underline;
  }
`;
