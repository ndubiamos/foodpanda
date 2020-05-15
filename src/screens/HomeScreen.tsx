import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { Navigation } from "../types";

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>foodpanda</Header>
    <Paragraph>
      {/* To do 
      #Get back to this to modify homescreen rendering 
      #Prompt user to select location before proceding */}
      Get started you are almost there need to add some stuff here.
      Some cool features to make it real
      Have some coffee, well done
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
