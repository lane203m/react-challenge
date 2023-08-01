import React from "react";
import { useState } from "react";
import { HomePageTabWrapper, HomePageWrapper } from "./styles/HomePage";
import { LargeText } from "mixins/Font";
import Spacer from "components/position/Spacer";
import PageBackground from "pagesShared/Background";
import { useHomePageState, TABS } from './homePageState';
import { AccountTab } from "./tabs/AccountTab";
import { RewardsTab } from "./tabs/RewardsTab";
import { WoofTab } from "./tabs/WoofTab";
import { Column, Row } from "components/styling/common";
import theme from "GlobalTheme";
import TabButton from "components/tabButton/TabButton";
import PillButton from "components/pillButton/PillButton";


const HomePage = () => {

  const [state, dispatch] = useHomePageState();
  const [isSelected, setIsSelected] = useState(TABS);

  const switchTab = (tab: keyof typeof TABS) => {
    dispatch({
      type: 'SWITCH_TAB',
      payload: {
        newTab: tab
      }
    })
  }

  const tabs = {
    [TABS.ACCOUNT_TAB]: (
      <AccountTab />
    ),
    [TABS.REWARDS_TAB]: (
      <RewardsTab />
    ),
    [TABS.WOOF_TAB]: (
      <WoofTab />
    ),
  };

  const onClick = (tab: keyof typeof TABS) => {
    setIsSelected(state => ({
      ...state,
      [tab]: !state[tab],
    }));
    switchTab(tab);
  }



  return (
    <PageBackground>
      <Spacer height={24} />
      <LargeText alignSelf="flex-start" textAlign="left" marginBottom="12px">
        Welcome back, Billy
      </LargeText>
      {
        <Row className="align-self-start p-0 flex-grow-0">
          <Column>
            <TabButton 
              label={"Account"} 
              onClick={() => onClick(TABS.ACCOUNT_TAB)} 
              icon={['fas', 'dollar-sign']} 
              color={theme.colours.primary.main} 
              selectedColor={theme.colours.black}
              isSelected={state.currTab == TABS.ACCOUNT_TAB}/>
          </Column>
          <Column>
            <TabButton 
              label={"Rewards"} 
              onClick={() => onClick(TABS.REWARDS_TAB)} 
              icon={['fas', 'gift']} 
              color={theme.colours.secondary.main} 
              selectedColor={theme.colours.black}
              isSelected={state.currTab == TABS.REWARDS_TAB}/>          
          </Column>
          <Column>
            <TabButton 
              label={"Woof"} 
              onClick={() => onClick(TABS.WOOF_TAB)} 
              icon={['fas', 'paw']} 
              color={theme.colours.neutral.dark} 
              selectedColor={theme.colours.secondary.light}
              isSelected={state.currTab == TABS.WOOF_TAB}
              staticSymbolColors/>
          </Column>
        </Row>
      }
      <Spacer height={24} />
      <HomePageTabWrapper className="justify-content-start py-4 pb-0 mb-2">
        {tabs[state.currTab]}
      </HomePageTabWrapper>
      <Row maxWidth="350px" className="h-100 m-0 align-items-md-start px-0">
        <PillButton isInverted color={theme.colours.neutral.dark} label={'Logout'}/>
      </Row>
    </PageBackground>
  )

}

export default HomePage;