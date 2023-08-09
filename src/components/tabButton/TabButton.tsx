import React from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from "GlobalTheme";
import { InnerCircle, StyledButton } from "./styles/TabButton";
import { SmallHeading } from "mixins/Font";

interface ITabButtonProps {
  onClick?: ((e: React.MouseEvent<HTMLElement>) => void) | (() => void);
  icon: IconProp;
  label?: String;
  color?: string;
  selectedColor?: string;
  staticSymbolColors?: boolean;
  isSelected?: boolean;
}

const TabButton = ({onClick, icon, label, color, selectedColor, staticSymbolColors,isSelected}:ITabButtonProps) => {
  return (
    <div>
      <StyledButton 
        className={`d-grid`} 
        onClick={onClick} 
        style={{backgroundColor:color, borderColor: isSelected && selectedColor}} 
        hoverColor={theme.colours.secondary.light}>
        <InnerCircle className="mx-auto mt-3 d-flex justify-content-evenly">
          <FontAwesomeIcon className="align-self-center" style={{height:'25px'}} color={(isSelected && !staticSymbolColors) ? selectedColor : color} icon={icon}/>
        </InnerCircle>
        <SmallHeading color={(isSelected && !staticSymbolColors) ? selectedColor : theme.colours.white}>{label}</SmallHeading>
      </StyledButton>
    </div>
  )

}

export default TabButton;