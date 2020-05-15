import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { Navigation } from "../types";
import { logoutUser } from "../api/reqAuth";

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>foodpanda</Header>
    <Paragraph>
      Order your favourite food from local restraunts near you
      Simple | Transparent | Trustworthy  
    </Paragraph>
    <Button mode="outlined" onPress={() => logoutUser()}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);
