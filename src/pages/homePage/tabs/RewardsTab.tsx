import React from "react"
import theme from "GlobalTheme";
import { Row } from "components/styling/common";
import useGetRewardsQuery from "graphql/generated/queries/getRewardsQuery";
import { LargeHeading, MediumHeading, SmallText } from "mixins/Font";
import Bone from '../../../images/bone.png';

export type RewardsTabProps = {}

export const RewardsTab = ({}: RewardsTabProps) => {
  
  const {data, loading, refetch} = useGetRewardsQuery();

  const account = data && data.getRewards.success ? data.getRewards.data : null;
  
  if (loading) {
    return <>
    </>
  }

  return (
    <>
      <Row className="flex-grow-0 m-0 pt-0">
        <MediumHeading>
          Your Rewards
        </MediumHeading>
      </Row>
      <Row className="flex-grow-0 m-0 p-0">
        <img src={Bone} style={{maxWidth: "100px"}}/>
      </Row>
      <Row className="flex-grow-0 py-0">
        <LargeHeading color={theme.colours.secondary.dark} bold>
          {account.bones} Bones
        </LargeHeading>

      </Row>
      <Row className="mb-5">
        <SmallText textAlign={'center'}>
          You’ll earn a bone every time you achieve a “good boy” status.
        </SmallText>
      </Row>
    </>
  )
}