import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};

  p {
    font-size: 14px;
    font-weight: 500;
  }

  span {
    font-size: 20px;
    font-weight: 700;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: row;
    gap: 4px;
    flex-wrap: wrap;
    justify-content: center;

    span {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;
