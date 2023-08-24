import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  span {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    gap: 16px;

    > svg {
      width: 56px;
    }

    > span {
      font-size: 24px;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 12px;
  }
`;
