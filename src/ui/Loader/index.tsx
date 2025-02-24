import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { LoaderIcon } from "shared/icons";

interface LoaderProps {
  fullScreen?: boolean;
  size?: number;
}

export const Loader: React.FC<LoaderProps> = ({
  fullScreen = true,
  size = 24,
}) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 800, easing: Easing.linear }),
      -1
    );
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <View style={fullScreen ? styles.fullScreenContainer : styles.container}>
      <PanGestureHandler>
        <Animated.View style={animatedStyle}>
          <LoaderIcon width={size} height={size} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
