import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* min-height: 100vh; */
  height: 100vh;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;
