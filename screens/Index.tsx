import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  Button,
  Pressable,
} from "react-native";
import Drop from "../navigation/Drop";
import DropDown from "../navigation/DropDown";
import Nav from "../navigation/Nav";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Voice Commands",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Text Reader",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Enlarge Screen Size",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f84",
    title: "Monochrome",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d59",
    title: "Virtual Keyboard",
  },
];
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingBottom: 100,
    backgroundColor: "rgb(247, 247, 242)",
    height: "100%",
  },
  img: {
    width: "100%",
    height: 280,
  },
  Frame614: {
    width: "100%",
    height: "812px",
  },
  OnboardingScreenSlide1: {
    backgroundColor: "#FEFFFB",
    width: "100%",
    height: "100%",
    display:'flex',
    justifyContent:'space-between'
  },

  Group992: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "195px",
  },

  Group981: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Flag1: {
    height: "215px",
    marginBottom: "13px",
    width: "100%",
  },
  Onboardingcontent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "127px",
    justifyContent:'space-between'
  },
  Txt681: {
    fontSize: 36,
    fontFamily: "Libre Baskerville, serif",
    fontWeight: "700",
    letterSpacing: -0.6,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  Iconholder: {
    height: 276,
    width: 340,
    marginBottom: "20px",
  },
  Txt766: {
    fontSize: 18,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: "327px",
  },

  Onboardingmenubreadcrumbs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "30px",
  },
  Txt351: {
    fontSize: 18,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "700",
    color: "rgba(146,181,61,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: "78px",
  },
  Frame: {
    display: "flex",
    flexDirection: "row",
    marginRight: "73px",
    borderRadius: 8,
  },

  Ellipse: {
    backgroundColor: "rgb(12 ,11 ,55)",
    width: "10px",
    height: "10px",
    borderRadius: 5,
    marginRight: "18px",
  },
  Txt154: {
    fontSize: 18,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "700",
    color: "rgba(12,11,55,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  SignIntoAccount: {
    //
  },

  Group4106: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    position: "absolute",
    top: "13px",
    left: "24px",
    width: "328px",
    height: "79px",
  },
  HeaderStatus: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "328px",
  },

  Group294: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "195px",
  },

  Headerbar: {
    webkitBoxAlign: "stretch",
    webkitBoxDirection: "normal",
    webkitBoxOrient: "vertical",
    border: "0px solid black",
    boxSizing: "border-box",
    display: "flex",
    flexBasis: "auto",
    flexShrink: 0,
    margin: "0px",
    minHeight: "0px",
    minWidth: "0px",
    padding: "0px",
    position: "relative",
    zIndex: 0,
    flexDirection: "column",
    alignItems: "stretch",
  },
  HeaderbarTxt: {
    top: "0px",
    right: "0px",
    position: "absolute",
    left: "0px",
    bottom: "0px",
    webkitBoxAlign: "stretch",
    webkitBoxDirection: "normal",
    webkitBoxOrient: "vertical",
    alignItems: "stretch",
    border: "0px solid black",
    boxSizing: "border-box",
    display: "flex",
    flexBasis: "auto",
    flexDirection: "column",
    flexShrink: 0,
    margin: "0px",
    minHeight: "0px",
    minWidth: "0px",
    padding: "0px",
    zIndex: 0,
  },
  HeaderBar_1r: {
    backgroundColor: "rgb(99, 54, 137)",
    borderBottomColor: "rgb(216, 216, 216)",
    borderBottomWidth: 1,
    pointerEvents: "auto",
    flex: 1,
    webkitBoxAlign: "stretch",
    webkitBoxDirection: "normal",
    webkitBoxOrient: "vertical",
    alignItems: "stretch",
    border: "0px solid black",
    boxSizing: "border-box",
    display: "flex",
    flexBasis: "auto",
    flexDirection: "column",
    flexShrink: 0,
    margin: "0px",
    minHeight: "0px",
    minWidth: "0px",
    padding: "0px",
    position: "relative",
    zIndex: 0,
  },
  Header: {
    position: "fixed",
    paddingTop: 12,
    paddingBottom: 17,
    paddingLeft: 23,
    paddingRight: 22,
    backgroundColor: "rgba(12,11,55,1)",
    width: "100%",
    height: "88px",
    zIndex: 1

  },
  Group724: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    top: "13px",
    left: "24px",
    width: "328px",
    height: "79px",
  },

  IosIconStatusBar: {
    width: "65px",
    height: "16px",
  },

  Group446: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  BackArrow: {
    width: "40px",
    height: "40px",
    marginRight: "87px",
  },
  NhLogoDark: {
    width: "73px",
    height: "53px",
    marginRight: "92px",
  },
  Polygon4: {
    width: "30px",
    height: "18px",
  },

  AccessibilityIcon: {
    width: "40px",
    height: "40px",
    marginleft: "80px",
  },
  Group700: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Txt839: {
    fontSize: 36,
    fontFamily: "Libre Baskerville, serif",
    fontWeight: "700",
    letterSpacing: -0.6,
    /*  linear-gradient(270deg, rgba(53,108,39,1) 99.82%, rgba(12,11,55,1) 0%, )  */
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  Txt5310: {
    fontSize: 18,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: "327px",
  },
  ctx:{
    marginBottom:30
  },
  poly:{
    // width: '30px',
    // height: '18px',
    position: 'absolute',
    // top: '108px',
    // left: '346px',

    height: '18px',
    left: '5px',
    top: '41px',
    width: '30px',
    
  },
});

export default function Index() {
const [active , setActive] = React.useState(false)

  return (
    <View style={styles.OnboardingScreenSlide1} >


        <View style={styles.Header}>
          <View style={styles.Group724}>
            <View style={styles.Group446}>
              <Image
                style={styles.BackArrow}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qpJFkatYjXK3UkBpYiRvlQ-I333%3A7337%3B253%3A2712?alt=media&token=c6a1a7a8-664f-4f3c-a0f5-176edbc74779",
                }}
              />
              <Image
                style={styles.NhLogoDark}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qpJFkatYjXK3UkBpYiRvlQ-I333%3A7337%3B253%3A2731?alt=media&token=fa635390-cfb7-4a8d-b2ac-5f21ff10d9c5",
                }}
              />
              <Pressable
               onPress={()=>setActive(!active)}
              > 
              {active? 
                 <>
              <Image
                style={styles.AccessibilityIcon}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qpJFkatYjXK3UkBpYiRvlQ-I333%3A7337%3B264%3A6478?alt=media&token=6e60ecae-7754-419c-b361-6a5f74129c9b",
                }}
                />
               
                </>
              : 
              <>
              <Image
              style={styles.AccessibilityIcon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qpJFkatYjXK3UkBpYiRvlQ-438%3A8577?alt=media&token=f724ffe4-723d-4477-ac94-37e6c49ea50e",
              }}
              />
              <Image
                style={[styles.AccessibilityIcon , styles.poly]}
                source={{
                  uri:"https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/aacf88a4-b3e0-454a-8e86-9e531d677c0b.svg?alt=media&token=d931c3fb-b245-4a15-986e-3323d0ac223a"
                }}
                />
              </>}
             
                </Pressable>
            </View>
          </View>
        </View>
        {active?null:<Drop/>}
        

        <View style={styles.Onboardingcontent}>
            <View style={styles.ctx}>
            <Text style={styles.Txt839}>WELCOME</Text>
            <Image
              style={styles.Iconholder}
              source={{
                uri: "https://user-images.githubusercontent.com/79036942/150857930-04daa3f2-3e83-44a3-b480-1730f16c6f46.png",
              }}
              />
              
            <Text style={styles.Txt5310}>
              The NAAM House app helps you help homeless veterans. Here are a
              few ways...
            </Text>
              </View>
            <View style={styles.Onboardingmenubreadcrumbs}>
              <Text style={styles.Txt351}>Skip</Text>
              <View style={styles.Frame}>
              <View style={styles.Ellipse} />
              <View style={styles.Ellipse} />
              <View style={styles.Ellipse} />
              <View style={styles.Ellipse} />
              </View>
              <Text style={styles.Txt154}>Next</Text>
              </View>
              <View style={styles.SignIntoAccount}>
              <Text >
              Already have an account? Sign in
              </Text>
          </View>
          <View style={styles.ctx}>
            <Text style={styles.Txt839}>WELCOME</Text>
            <Image
              style={styles.Iconholder}
              source={{
                uri: "https://user-images.githubusercontent.com/79036942/150857930-04daa3f2-3e83-44a3-b480-1730f16c6f46.png",
              }}
              />
              
            <Text style={styles.Txt5310}>
              The NAAM House app helps you help homeless veterans. Here are a
              few ways...
            </Text>
              </View>
            <View style={styles.Onboardingmenubreadcrumbs}>
              <Text style={styles.Txt351}>Skip</Text>
              <View style={styles.Frame}>
              <View style={styles.Ellipse} />
              <View style={styles.Ellipse} />
              <View style={styles.Ellipse} />
              <View style={styles.Ellipse} />
              </View>
              <Text style={styles.Txt154}>Next</Text>
              </View>
              <View style={styles.SignIntoAccount}>
              <Text >
              Already have an account? Sign in
              </Text>
          </View>
        </View>
         <Nav/>

    </View>
  );
}

