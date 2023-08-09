import React from "react";
import theme from "GlobalTheme";
import { StyledPillButton } from "./styles/PillButton";
import { MediumText } from "mixins/Font";

interface IPillButtonProps {
  onClick?: ((e: React.MouseEvent<HTMLElement>) => void) | (() => void);
  label?: String;
  color?: string;
  isInverted?: boolean;
  selectedColor?: string;
  staticSymbolColors?: boolean;
  isSelected?: boolean;
}

const PillButton = ({onClick, label, color, isInverted, selectedColor, staticSymbolColors,isSelected}:IPillButtonProps) => {
  
  const textColor = isInverted ? color : theme.colours.white;
  const backgroundColor = isInverted ? theme.colours.white : color;
  const borderColor = isInverted ? color : theme.colours.white;
  
  return (
    <StyledPillButton 
      onClick={onClick} 
      style={{backgroundColor:backgroundColor, borderColor: borderColor}} 
      hoverColor={theme.colours.secondary.light}>
      <MediumText bold className="py-2 my-1" color={textColor}>{label}</MediumText>
    </StyledPillButton>
  )

}

export default PillButton;