import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 8px;
  overflow: hidden;
  filter: drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.03));
  width: 220px;
  position: relative;

  > svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const SelectComponent = styled.select`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  width: 100%;
  padding: 16px 33px;
  background: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

  &:focus {
    outline: none;
  }
`;
