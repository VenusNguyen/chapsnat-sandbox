import React, {useEffect} from "react";
import { View, StyleSheet} from "react-native";
import { Video, Audio} from "expo-av";

export default function VideoScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  useEffect (() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true})
  }, [])
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/foster-youth.appspot.com/o/kids.mp4?alt=media&token=0f3266f3-824f-441e-b9ee-99fce7e88da7",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        // ignoreSilentSwitch="ignore"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 400,
    height: 650,
  }
});
