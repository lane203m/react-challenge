import theme from 'GlobalTheme';
import styled from 'styled-components';

export const StyledPillButton = styled.button<{
  isSelected?: boolean,
  hoverColor?: string
}>`
  border-radius: 65px; 
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  min-width: 300px;
  min-height: 65px;
  width: 100%;
  &:hover {
    border-color: ${({hoverColor}) => hoverColor ? hoverColor : theme.colours.black};
  }
`;
