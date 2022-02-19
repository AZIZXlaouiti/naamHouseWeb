import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Image, View, Text, Pressable } from "react-native";
import React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const styles = StyleSheet.create({
  newRootRoot: {
    width: "100%",
    height: "78px",
    position: "fixed",
    bottom: "0",
  },
  propert10nProfile: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: 'center'
  },
  Rectangle70: {
    backgroundColor: "#0c0b37",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    paddingLeft: 11,
    paddingRight: 9,
    paddingTop: 10,
    paddingBottom: 11,
  },
  Rectangle76: {
    backgroundColor: "#92b53d",
    width: 60,
    height: 60,
    marginRight: 13,
    position: "relative",
    borderRadius: 3,
    alignItems: "center",
  },
  Antdesignhomeoutlined: {
    width: 47,
    height: 42,
    position: "absolute",
    top: 2,
    left: 7,
  },
  Rectangle81: {
    backgroundColor: "#0c0b37",
    height: 58,
    marginRight: 19,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: 2,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 11,
    // paddingRight: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  Infosquare1: {
    width: "39",
    height: "36",
    alignSelf: "stretch",
  },
  Info: {
    color: "#efd5a9",
    fontSize: 12,
    // fontFamily: "Open Sans",
    fontWeight: "400",
    letterSpacing: -0.2,
  },
  Rectangle82: {
    backgroundColor: "#0c0b37",
    width: "60px",
    height: "60px",
    marginRight: "17px",
    position: "relative",
    borderRadius: 5,
  },
  Fluenttextbulletlistsquareedit24regular: {
    width: "41px",
    height: "40px",
    position: "absolute",
    top: "4px",
    left: "10px",
  },
  Rectangle80: {
    backgroundColor: "#0c0b37",
    width: 60,
    height: 60,
    marginRight: 6,
    position: "relative",
    borderRadius: 5,
  },
  Bxbxphone: {
    width: "41px",
    height: "42px",
    position: "absolute",
    top: "2px",
    left: "7px",
  },
  Contact: {
    color: "#efd5a9",
    fontSize: 12,
    fontFamily: "Open Sans",
    fontWeight: "400",
    letterSpacing: -0.2,
    position: "absolute",
    top: 43,
    left: 9,
  },
  Rectangle801: {
    backgroundColor: "#92b53d",
    height: 60,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 11,
    paddingRight: 8,
    alignItems: "center",
    borderRadius: 5,
  },
  Profile: {
    color: "#0c0b37",
    fontSize: 14,
    fontFamily: "Open Sans",
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  Home: {
    color: "#efd5a9",
    fontSize: 12,
    fontFamily: "Open Sans",
    fontWeight: "400",
    letterSpacing: -0.2,
    position: "absolute",
    top: 43,
    left: 14,
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 39,
    height: 36,
    
  },
  
});

export default function Nav() {
  return (
    <View style={styles.newRootRoot} nativeID={"bottom-nav"}>
      <View style={styles.propert10nProfile}>
        <View style={styles.Rectangle70}>
          <Pressable
            style={styles.Rectangle81}
            onPress={() => alert("pressed")}
          >
             <Svg
    width={47}
    height={42}
    fill="none"
  >
    <Path
      d="M43.443 20.713 25.708 4.873 24.519 3.81a1.538 1.538 0 0 0-1.019-.375c-.382 0-.748.135-1.019.375L3.557 20.713a2.621 2.621 0 0 0-.645.865 2.379 2.379 0 0 0-.218 1.022c.019 1.444 1.363 2.596 2.98 2.596h1.95v13.359h31.752V25.196h1.992c.785 0 1.524-.275 2.08-.771a2.61 2.61 0 0 0 .637-.852c.147-.32.222-.661.22-1.006 0-.697-.307-1.358-.862-1.854ZM26.07 35.602h-5.14v-8.367h5.14v8.367Zm10.002-13.36v13.36h-7.064V26.25c0-.906-.822-1.64-1.836-1.64h-7.344c-1.014 0-1.836.734-1.836 1.64v9.352h-7.064v-13.36H6.522L23.505 7.08l1.06.948 15.918 14.216h-4.411Z"
      fill="white"
    />
  </Svg>
            <Text style={styles.Info}>Home</Text>
          </Pressable>
          <View style={styles.Rectangle81}>
          <Svg
    width={39}
    height={36}
    fill="none"
  >
    <G clipPath="url(#a)" fill="white">
      <Path d="M34.125 2.25c.647 0 1.267.237 1.724.659.457.422.714.994.714 1.591v27c0 .597-.257 1.169-.714 1.591a2.545 2.545 0 0 1-1.724.659H4.875a2.545 2.545 0 0 1-1.724-.659 2.166 2.166 0 0 1-.713-1.591v-27c0-.597.256-1.169.713-1.591a2.544 2.544 0 0 1 1.724-.659h29.25ZM4.875 0C3.582 0 2.342.474 1.428 1.318.514 2.162 0 3.307 0 4.5v27c0 1.194.514 2.338 1.428 3.182C2.342 35.526 3.582 36 4.875 36h29.25c1.293 0 2.533-.474 3.447-1.318C38.486 33.838 39 32.693 39 31.5v-27c0-1.193-.514-2.338-1.428-3.182C36.658.474 35.418 0 34.125 0H4.875Z" />
      <Path d="m22.278 15.256-5.582.645-.2.855 1.097.187c.717.158.858.396.702 1.055l-1.799 7.803c-.473 2.019.256 2.968 1.97 2.968 1.328 0 2.871-.567 3.57-1.345l.215-.936c-.488.396-1.2.553-1.672.553-.67 0-.914-.434-.741-1.2l2.44-10.585Zm.17-4.698c0 .596-.256 1.169-.713 1.59a2.544 2.544 0 0 1-1.724.66 2.544 2.544 0 0 1-1.724-.66 2.166 2.166 0 0 1-.713-1.59c0-.597.256-1.17.713-1.591a2.544 2.544 0 0 1 1.724-.66c.646 0 1.266.238 1.724.66.457.422.713.994.713 1.59Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h39v36H0z" />
      </ClipPath>
    </Defs>
  </Svg>

            <Text style={styles.Info}>Info</Text>
          </View>
          <View style={styles.Rectangle81}>
          <Svg
    width={41}
    height={40}
    fill="none"
  >
    {/* #408d2d */}
    <Path
      d="M8.041 1c-1.072 0-2.1.454-2.857 1.263A4.464 4.464 0 0 0 4 5.313v25.872c0 1.144.426 2.24 1.184 3.05a3.917 3.917 0 0 0 2.857 1.263h10.622l.64-2.73.035-.145H8.041c-.357 0-.7-.152-.952-.421a1.488 1.488 0 0 1-.395-1.017V5.311c0-.382.142-.747.395-1.017.252-.27.595-.42.952-.42h24.245c.357 0 .7.15.953.42.252.27.394.635.394 1.017v11.467a5.578 5.578 0 0 1 2.694-.422V5.312c0-.566-.104-1.127-.308-1.65a4.343 4.343 0 0 0-.876-1.4 4.035 4.035 0 0 0-1.312-.934A3.821 3.821 0 0 0 32.284 1H8.038h.003ZM26.19 23.998h-7.373c-.358 0-.7.151-.953.42-.253.27-.394.636-.394 1.017 0 .382.141.747.394 1.017.253.27.595.42.953.42h4.678l2.695-2.874ZM14.325 11.06c0 .509-.189.996-.525 1.356-.337.36-.794.561-1.27.561a1.74 1.74 0 0 1-1.27-.561 1.984 1.984 0 0 1-.527-1.356c0-.508.19-.995.526-1.355a1.74 1.74 0 0 1 1.27-.561c.477 0 .934.202 1.27.561.337.36.527.847.527 1.355Zm4.49-1.437c-.357 0-.7.151-.952.421-.253.27-.394.635-.394 1.016 0 .382.141.747.394 1.017.253.27.595.421.953.421h9.878c.357 0 .7-.151.953-.421.252-.27.394-.635.394-1.017 0-.38-.142-.746-.395-1.016a1.306 1.306 0 0 0-.952-.421h-9.878Zm0 7.187c-.176 0-.351.038-.515.11a1.342 1.342 0 0 0-.437.311 1.446 1.446 0 0 0-.292.467 1.521 1.521 0 0 0 0 1.1c.068.174.167.333.292.466.125.134.274.24.437.312.164.072.339.11.516.11h9.878c.177 0 .352-.038.515-.11.164-.072.312-.178.438-.312.125-.133.224-.292.292-.466a1.521 1.521 0 0 0 0-1.1 1.446 1.446 0 0 0-.293-.466 1.344 1.344 0 0 0-.437-.312 1.273 1.273 0 0 0-.515-.11h-9.878Zm-6.284 3.357a1.74 1.74 0 0 0 1.27-.562c.337-.36.526-.847.526-1.355 0-.509-.189-.996-.526-1.355a1.74 1.74 0 0 0-1.27-.562 1.74 1.74 0 0 0-1.27.562c-.337.359-.526.846-.526 1.355 0 .508.19.996.526 1.355.337.36.794.561 1.27.561Zm1.796 5.27c0 .509-.189.996-.526 1.355a1.74 1.74 0 0 1-1.27.562 1.74 1.74 0 0 1-1.27-.561 1.983 1.983 0 0 1-.526-1.356c0-.508.19-.996.526-1.355a1.74 1.74 0 0 1 1.27-.561c.477 0 .933.202 1.27.561.337.36.526.847.526 1.355Zm18.59-5.903-10.6 11.31a5.243 5.243 0 0 0-1.27 2.392l-.821 3.508c-.36 1.527.937 2.91 2.367 2.528l3.287-.878a4.755 4.755 0 0 0 2.241-1.353l10.597-11.316a4.543 4.543 0 0 0 1.157-3.084 4.533 4.533 0 0 0-1.203-3.064 3.981 3.981 0 0 0-2.871-1.283 3.973 3.973 0 0 0-2.89 1.236l.005.004Z"
      fill="white"
    />
  </Svg>
            <Text style={styles.Info}>Apply</Text>
          </View>
          <View style={styles.Rectangle81}>
          <Svg
    width={41}
    height={42}
    fill="none"
  >
    <Path
      d="M30.25 21.513a1.704 1.704 0 0 0-.555-.38 1.67 1.67 0 0 0-1.861.38l-2.723 2.79c-1.263-.386-3.619-1.26-5.111-2.79-1.494-1.53-2.348-3.943-2.724-5.236L20 13.487a1.754 1.754 0 0 0 .5-1.237 1.786 1.786 0 0 0-.5-1.237l-6.834-7a1.671 1.671 0 0 0-2.416 0L6.119 8.759a3.542 3.542 0 0 0-1.002 2.51c.04 2.493.684 11.148 7.343 17.97 6.659 6.821 15.108 7.48 17.543 7.521h.048c.902 0 1.754-.364 2.4-1.025l4.633-4.746a1.786 1.786 0 0 0 0-2.475l-6.834-7.001Zm-.218 11.746c-2.131-.037-9.426-.623-15.158-6.496-5.75-5.89-6.307-13.39-6.34-15.53l3.424-3.509 4.418 4.526-2.209 2.263c-.2.205-.348.459-.43.737a1.791 1.791 0 0 0-.034.859c.04.2 1.043 4.973 3.88 7.878 2.835 2.905 7.494 3.932 7.69 3.974.278.062.566.05.838-.033.273-.083.52-.234.72-.44l2.21-2.264 4.418 4.526-3.427 3.509Z"
      fill="white"
    />
  </Svg>

            <Text style={styles.Info}>Contact</Text>
          </View>
          <View style={styles.Rectangle81} >
            <Svg style={styles.logo} fill="none">
              <G clipPath="url(#a)">
                <Path
                  d="M35.705 34.563a16.446 16.446 0 0 0-3.537-5.255 16.483 16.483 0 0 0-5.244-3.544c-.017-.008-.035-.013-.052-.021a10.888 10.888 0 0 0 4.51-8.838C31.383 10.88 26.513 6 20.5 6S9.617 10.88 9.617 16.904c0 3.637 1.777 6.86 4.511 8.843-.017.009-.035.013-.052.022a16.34 16.34 0 0 0-5.244 3.544 16.519 16.519 0 0 0-3.537 5.254A16.371 16.371 0 0 0 4 40.64a.353.353 0 0 0 .351.361h2.633a.35.35 0 0 0 .351-.343 13.121 13.121 0 0 1 3.853-8.983 13.065 13.065 0 0 1 9.312-3.865c3.52 0 6.824 1.372 9.312 3.865a13.121 13.121 0 0 1 3.853 8.983.348.348 0 0 0 .35.343h2.634a.35.35 0 0 0 .35-.36 16.414 16.414 0 0 0-1.294-6.077ZM20.5 24.467a7.491 7.491 0 0 1-5.336-2.216 7.522 7.522 0 0 1-2.212-5.347c0-2.018.786-3.917 2.212-5.346A7.491 7.491 0 0 1 20.5 9.342c2.014 0 3.91.787 5.336 2.216a7.521 7.521 0 0 1 2.212 5.346 7.522 7.522 0 0 1-2.212 5.347 7.491 7.491 0 0 1-5.336 2.216Z"
                  fill="white"
                />
              </G>
              <Defs>
                <ClipPath id="a">
                  <Path fill="#fff" d="M0 0h41v41H0z" />
                </ClipPath>
              </Defs>
            </Svg>

            <Text style={styles.Info}>Profile</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
