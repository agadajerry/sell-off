import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import colors from "../config/color";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
interface IUploadScreenProps {
  visible: boolean;
  progress: number;
  onDone: () => void;
}
function UploadScreen({ onDone, visible, progress }: IUploadScreenProps) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animation: {
    width: 150,
  },
});

export default UploadScreen;
