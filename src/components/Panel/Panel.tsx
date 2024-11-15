import React from "react";
import { Animated, Dimensions, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Logo } from "ui";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { InfoIcon, LogoutIcon, ProfileIcon } from "shared/icons";
import Svg, { Path } from "react-native-svg";
import { authService } from "shared/services";

interface PanelProps extends NativeStackHeaderProps {
}

const Panel: React.FC<PanelProps> = ({ navigation, options }) => {

  const { logout } = authService

  const handleNavigateToProfile = () => {
    navigation.navigate("Profile");
  }

  const handleNavigateToInfo = () => {
    navigation.navigate("Info");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={handleNavigateToProfile}>
          <ProfileIcon/>
        </TouchableOpacity>
        <View style={styles.rightPanel}>
          <TouchableOpacity onPress={handleNavigateToInfo}>
            <InfoIcon/>
          </TouchableOpacity>
          <TouchableOpacity onPress={logout}>
            <LogoutIcon/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8FBFF",
  },
  content: {
    paddingHorizontal: 27.5,
    paddingVertical: 8,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightPanel: {
    flexDirection: "row",
    gap: 25.5
  },
});

export default Panel;
