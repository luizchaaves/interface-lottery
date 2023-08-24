import styled from 'styled-components';

export const Container = styled.div`
  max-width: 613px;
  width: 100%;
  background: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  padding: 92px 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 64px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 63px 12px 24px;
    align-items: center;
    gap: 70px;
  }
`;
