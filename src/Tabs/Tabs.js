import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import React from 'react';
import "react-tabs/style/react-tabs.css";
import UserInput from '../UserInput/UserInput';
import GoogleApiWrapper from '../GoogleApiWrapper/GoogleApiWrapper';
import Savings from '../Savings/Savings';
export default () => (
    <Tabs>
      <TabList>
        <Tab>Google Maps</Tab>
        <Tab>Savings</Tab>
        <Tab>Leaderboard</Tab>
      </TabList>
  
      <TabPanel>
        <UserInput/>
        <GoogleApiWrapper/>
      </TabPanel>
      <TabPanel>
        <Savings/>
      </TabPanel>
    </Tabs>
  );