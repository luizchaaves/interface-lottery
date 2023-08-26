import styled from 'styled-components';

export const Container = styled.div`
  padding: 92px 64px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  gap: 32px;
  overflow-y: auto;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }

  p {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.black};
    text-align: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 64px 32px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 63px 32px 24px;
    overflow: initial;

    p {
      font-size: 14px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 35px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    gap: 20px;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 50px;

  span {
    width: 100%;
    height: 100%;
  }
`;
