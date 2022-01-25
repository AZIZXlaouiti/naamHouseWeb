import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  Pressable,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Voice command",
    description: ["This will enable Speech recognition"],
    notification: "Are you sure you would like to enable this setting?",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Enlarge Screen Size",
    description: ["This will enlarge the text, images & buttons."],
    notification: "Are you sure you would like to enable this setting?",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Monochrome",
    description: ["This will apply a gray scale over the screens."],
    notification: "Are you sure you would like to enable this setting?",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f69",
    title: "Text Reader",
    description: ["This will turn written text to speech."],
    notification: "Are you sure you would like to enable this setting?",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d59",
    title: "Virtual Keyboard",
    description: ["This will enable virtaul keyboard over the screen"],
    notification: "Are you sure you would like to enable this setting?",
  },
];

const Item = ({ item, onPress, img, color, active }: any) => (
  <>
    <TouchableOpacity onPress={onPress} style={[styles.VoiceCommands]}>
      <Text style={[styles.Txt717]}>{item.title}</Text>
      <View style={[styles.Toggle, color]}>{img}</View>
    </TouchableOpacity>
    {active}
  </>
);

const Drop = ({ active }: any) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }: any) => {
    const img =
      item.id === selectedId ? (
        <Image
          style={styles.rec}
          source={{
            uri: "https://user-images.githubusercontent.com/79036942/151043409-9097b574-09ce-4c5f-83af-323c3b8bf9ba.svg",
          }}
        />
      ) : (
        <Image
          style={styles.rec}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/709e8a9f-d49f-483b-9ea3-c112dfd87b54.svg?alt=media&token=4f9e5a3e-6c0c-4f3b-81f1-460cdc45daad",
          }}
        />
      );
    const color = item.id === selectedId ? styles.On : styles.Off;
    const active =
      item.id === selectedId ? (
        <View style={styles.prev}>
          {item.description.map((e: any) => (
            <Text style={styles.prevTxt}>{e}</Text>
          ))}
          <br />
          <Text style={styles.prevTxt}>{item.notification}</Text>
          <Pressable style={[styles.prevBtn]}>PREVIEW</Pressable>
        </View>
      ) : null;
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        img={img}
        color={color}
        active={active}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container} nativeID="77">
      <View style={styles.AccessibilityMenuOptions}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    zIndex: 1,
    position: "absolute",
    top: "88px",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  rec: {
    width: "21px",
    height: "21px",
  },
  On: {
    backgroundColor: "#92b53d",
    borderWidth: "2px",
    borderColor: "#0c0b37",
    borderStyle: "solid",
    width: "46.3px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 0,
    borderRadius: "30.6px",
  },
  Off: {
    backgroundColor: "#c4c4c4",
    borderColor: "#5d5d5d",
    borderWidth: "2px",
    borderStyle: "solid",
    width: "46.3px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 0,
    borderRadius: "30.6px",
  },

  AccessibilityMenuOptions: {
    display: "flex",
    flexDirection: "column",
    borderWidth: 7,
    borderStyle: "solid",
    borderColor: "rgba(53,108,39,1)",
  },
  VoiceCommands: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 7,
    paddingBottom: 8,
    paddingLeft: 17,
    paddingRight: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(93,94,93,1)",
    width: "361px",
  },
  Txt717: {
    fontSize: 24,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "600",
    color: "rgba(12,11,55,1)",
  },
  Toggle: {
    borderRadius: 30.6,
    backgroundColor: "rgba(196,196,196,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(93,94,93,1)",
    width: "50px",
    height: "25px",
  },

  TextReader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 7,
    paddingBottom: 8,
    paddingLeft: 17,
    paddingRight: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(93,94,93,1)",
    width: "361px",
  },
  Txt8108: {
    fontSize: 24,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "600",
    color: "rgba(12,11,55,1)",
  },
  Toggle1: {
    borderRadius: 30.6,
    backgroundColor: "rgba(196,196,196,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(93,94,93,1)",
    width: "50px",
    height: "25px",
  },

  EnlargeScreenSize: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 7,
    paddingBottom: 8,
    paddingLeft: 17,
    paddingRight: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(93,94,93,1)",
    width: "361px",
  },
  Txt369: {
    fontSize: 24,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "600",
    color: "rgba(12,11,55,1)",
  },
  Toggle2: {
    borderRadius: 30.6,
    backgroundColor: "rgba(196,196,196,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(93,94,93,1)",
    width: "50px",
    height: "25px",
  },

  Monochrome: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 7,
    paddingBottom: 8,
    paddingLeft: 17,
    paddingRight: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(93,94,93,1)",
    width: "361px",
  },
  Txt577: {
    fontSize: 24,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "600",
    color: "rgba(12,11,55,1)",
  },
  Toggle3: {
    borderRadius: 30.6,
    backgroundColor: "rgba(196,196,196,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(93,94,93,1)",
    width: "50px",
    height: "25px",
  },

  VirtualKeyboard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 7,
    paddingBottom: 8,
    paddingLeft: 17,
    paddingRight: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(93,94,93,1)",
    width: "361px",
  },
  Txt331: {
    fontSize: 24,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "600",
    color: "rgba(12,11,55,1)",
  },
  Toggle4: {
    borderRadius: 30.6,
    backgroundColor: "rgba(196,196,196,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(93,94,93,1)",
    width: "50px",
    height: "25px",
  },
  prev: {
    backgroundColor: "#efd5a9",
    height: "218px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "17px",
    paddingRight: "17px",
  },
  prevTxt: {
    color: "#000000",
    width: "326px",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: -0.27,
  },
  prevBtn: {
    color: "#fefffb",
    fontSize: 18,
    fontWeight: "700",
    backgroundColor: "#356c27",
    width: "327px",
    height: "53px",
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "7.5px",
    paddingBottom: "7.5px",
    borderRadius: 3,
    alignItems: "center",
    padding: 5,
  },
});

export default Drop;
