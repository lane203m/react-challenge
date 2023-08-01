import theme from 'GlobalTheme';
import styled from 'styled-components';

export const StyledButton = styled.button<{
  isSelected?: boolean,
  hoverColor?: string
}>`
  border-radius: 10px; 
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  width: 90px;
  height: 90px;
  &:hover {
    border-color: ${({hoverColor}) => hoverColor ? hoverColor : theme.colours.black};
  }
`;

export const InnerCircle = styled.div`
border-radius: 50%; 
background-color: white;
width: 45px;
height: 45px;
`;

