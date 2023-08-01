import React from "react";
import { Row } from "components/styling/common";
import useGetAccountQuery from "graphql/generated/queries/getAccountQuery"
import { LargeHeading, MediumHeading, MediumText, SmallText } from "mixins/Font";
import doggyDollar from '../../../images/doggy_dollar.png';
import AlertPill from "components/alertPill/AlertPill";
import theme from "GlobalTheme";

export type AccountTabProps = {}

export const AccountTab = ({}: AccountTabProps) => {

  const {data, loading, refetch} = useGetAccountQuery();

  const account = data && data.getAccount.success ? data.getAccount.data : null;

  if (loading) {
    return <>
    </>
  }

  let accountStatusColors = new Map<string, string | typeof theme.colours.primary>([
    ["Good Boy", theme.colours.primary],
    ["Bad Dog", theme.colours.warning],
    ["Hellhound", theme.colours.error],
  ]);

  return (
    <>
      <Row maxWidth="100%" className="flex-grow-0 py-0 mb-0 pb-lg-3">
        <MediumHeading textAlign={'center'}>
          Your current account balance is
        </MediumHeading>
      </Row>
      <Row className="flex-grow-0 p-0 mb-1">
        <img src={doggyDollar} style={{maxWidth: "100px", minWidth: "75px", width: "14vw"}}/>
      </Row>
      <Row className="flex-grow-0 py-0 mb-0">
        <LargeHeading bold>
          $D{account.balance.toLocaleString(undefined, {minimumFractionDigits: 2})}
        </LargeHeading>
      </Row>
      <Row className="flex-grow-0 py-0">
        <MediumText textAlign={'center'}>
          {account.currency}
        </MediumText>
      </Row>
      <Row className="flex-grow-0 pb-0 mb-0 mb-sm-2">
        <SmallText textAlign={'center'}>
          Account Status
        </SmallText>
      </Row>
      <Row maxWidth="200px" className="p-0 pb-4 mb-0 flex-grow-0">
        <AlertPill label={account.status} color={accountStatusColors.get(account.status)}/>
      </Row>
    </>
  )
}