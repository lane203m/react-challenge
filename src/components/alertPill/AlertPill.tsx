import React from "react";
import { StyledAlertPill } from "./styles/AlertPill";
import { SmallText } from "mixins/Font";
import theme from "GlobalTheme";

interface IAlertPillProps {
  label?: String;
  color?: typeof theme.colours.primary | typeof theme.colours.error | typeof theme.colours.warning;
}

const AlertPill = ({label, color=theme.colours.warning}:IAlertPillProps) => {
  const textColor = typeof color === "string" ? theme.colours.white : color.dark; 
  const backgroundColor = typeof color === "string" ? color : color.light; 
  
  return (
    <StyledAlertPill 
      style={{backgroundColor:backgroundColor}} 
      hoverColor={theme.colours.secondary.light}>
      <SmallText bold textAlign="center" className="py-1" color={textColor}>{label}</SmallText>
    </StyledAlertPill>
  )

}

export default AlertPill;