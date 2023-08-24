import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 100%;
`;
