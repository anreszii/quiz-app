import React from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { Logo } from "ui";

const Background = require("../../../assets/images/Background.png");

interface HeaderProps {
  opacity?: Animated.Value;
}

const Header: React.FC<HeaderProps> = ({ opacity }) => {
  return (
    <Animated.View style={[styles.imageContainer, { opacity }]}>
      <Logo/>
      <FastImage source={Background} style={styles.image}/>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 90,
    borderRadius: 10,
    marginTop: 5,
    flexDirection: "row",
    gap: 10
  },
  image: {
    width: Dimensions.get("window").width - 10 - 82 - 10,
    height: "100%",
    borderRadius: 10,
  },
});

export default Header;
