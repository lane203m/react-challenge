import React from "react";
import { useApolloClient } from "@apollo/client";
import theme from "GlobalTheme";
import PillButton from "components/pillButton/PillButton";
import { Row } from "components/styling/common";
import { useToast } from "components/widget/toast/Toast";
import sendWoofMutation from "graphql/generated/mutations/woofMutation";
import { MediumHeading } from "mixins/Font";

export type WoofTabProps = {}

export const WoofTab = ({}: WoofTabProps) => {
  
  const apolloClient = useApolloClient();
  const [openSuccessToast, openErrorToast] = useToast();

  const onWoof = () => {
    sendWoofMutation(apolloClient, {
      timestamp: Date.now().toString()
    }).then((res) => {
      openSuccessToast("Woofed!");
    }).catch((err) => {
      openErrorToast("Error during woof");
    })
  }

  return (
    <>
      <Row className="flex-grow-0 pt-0">
        <MediumHeading>
          Woof
        </MediumHeading>
      </Row>
      <Row maxWidth="350px" className="flex-grow-0 my-5 pb-5 px-0">
        <PillButton color={theme.colours.neutral.dark} label={"Click here to woof"} onClick={onWoof}/>
      </Row>
    </>
  )
}