import theme from "GlobalTheme";
import styled from "styled-components";
import { optional } from "utils/styledComponents";
import breakpoint from 'styled-components-breakpoint';

export const StandardFont = `300`;
export const MediumFont = `500`;
export const SemiBoldFont = `600`;
export const BoldFont = `700`;
export const ExtraBoldFont = `800`;
export const BlackFont = `900`;

export const LargeHeading = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
  bold?: boolean;
}>`
  font-weight: ${({bold}) => bold ? BlackFont : ExtraBoldFont};
  font-size: 45px;
  line-height: 50px;
  font-stretch: normal;
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color', theme.colours.primary.dark)}

  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

export const LargeText = styled.div<{
  bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-weight: ${({bold}) => bold ? ExtraBoldFont : BoldFont};
  font-size: 24px;
  line-height: 26px;
  font-stretch: normal;

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color', theme.colours.black)}

  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`

export const MediumText = styled.div<{
  bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-weight: ${({bold}) => bold ? ExtraBoldFont : MediumFont};
  font-size: 20px;
  line-height: 30px;
  font-stretch: normal;

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color', theme.colours.black)}

  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`

export const MediumHeading = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-stretch: normal;

  ${breakpoint('desktop')`
    font-weight: ${BlackFont};
    font-size: 24px;
    line-height: 26px;
  `}

  ${breakpoint('mobile')`
    font-weight: ${ExtraBoldFont};
    font-size: 20px;
    line-height: 30px;
  `}

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color', theme.colours.black)}

  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`

export const SmallText = styled.div<{
  bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-weight: ${({bold}) => bold ? SemiBoldFont : MediumFont};
  font-size: 16px;
  line-height: 24px;
  font-stretch: normal;

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color', theme.colours.black)}

  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`
export const SmallHeading = styled.div<{
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-weight: ${BoldFont};
  font-size: 16px;
  line-height: 24px;
  font-stretch: normal;

  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color', theme.colours.black)}

  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`


// TODO: Define all required text fonts here

