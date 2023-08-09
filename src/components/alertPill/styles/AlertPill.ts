import styled from 'styled-components';

export const StyledAlertPill = styled.div<{
  isSelected?: boolean,
  hoverColor?: string
}>`
  border-radius: 65px; 
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  width: 100%;
`;
