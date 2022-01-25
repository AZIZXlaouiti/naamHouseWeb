import React from "react";
import { View  , Text} from "react-native";
import { StyleSheet } from "react-native";


interface DropdownProps {
    label: string;
    data: Array<{ label: string; value: string }>;
    onSelect: (item: { label: string; value: string }) => void;
  }

const styles = StyleSheet.create({
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
  })
export default function DropDown(){
    return(
        <View style={styles.AccessibilityMenuOptions}>
        <View style={styles.VoiceCommands}>
          <Text style={styles.Txt717}>Voice Commands</Text>
          <View style={styles.Toggle}></View>
        </View>
        <View style={styles.TextReader}>
          <Text style={styles.Txt8108}>Text Reader</Text>
          <View style={styles.Toggle1}></View>
        </View>
        <View style={styles.EnlargeScreenSize}>
          <Text style={styles.Txt369}>Enlarge Screen Size</Text>
          <View style={styles.Toggle2}></View>
        </View>
        <View style={styles.Monochrome}>
          <Text style={styles.Txt577}>Monochrome</Text>
          <View style={styles.Toggle3}></View>
        </View>
        <View style={styles.VirtualKeyboard}>
          <Text style={styles.Txt331}>Virtual Keyboard</Text>
          <View style={styles.Toggle4}></View>
        </View>
      </View>
    )
}