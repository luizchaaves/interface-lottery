import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.white};
  font-size: 27px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray};

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 76px;
    height: 76px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;
