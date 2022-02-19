import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet , Image , View , Text , Pressable } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  
  newRootRoot :{ 
    width:'100%',
    height: "78px",
    position: "fixed",
    bottom: "0"
  
  },
  propert10nProfile:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  Rectangle70 :{
    backgroundColor: '#0c0b37',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent:'center',
    flexDirection: 'row',
    paddingLeft: 11,
    paddingRight: 9,
    paddingTop: 10,
    paddingBottom: 11,
  },
  Rectangle76 : {
    backgroundColor: '#92b53d',
    width: 60,
    height: 60,
    marginRight: 13,
    position: 'relative',
    borderRadius: 3,
    alignItems:'center',
    
  },
  Antdesignhomeoutlined:{
    width: 47,
    height: 42,
    position: 'absolute',
    top: 2,
    left: 7,
  },
  Rectangle81 :{
    backgroundColor: '#0c0b37',
    height: 58,
    marginRight: 19,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    gap: 2,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 11,
    paddingRight: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  Infosquare1 :{
    width: '39',
    height: '36',
    alignSelf: 'stretch',
  },
  Info :{
    color: '#efd5a9',
    fontSize: 12,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    letterSpacing: -0.2,
  },
  Rectangle82 :{
    backgroundColor: '#0c0b37',
    width: '60px',
    height: '60px',
    marginRight: '17px',
    position: 'relative',
    borderRadius: 5
  },
  Fluenttextbulletlistsquareedit24regular :{
    width: '41px',
    height: '40px',
    position: 'absolute',
    top: '4px',
    left: '10px'
  },
  Rectangle80 :{
    backgroundColor: '#0c0b37',
    width: 60,
    height: 60,
    marginRight: 6,
    position: 'relative',
    borderRadius: 5,
  },
  Bxbxphone:{
    width: '41px',
    height: '42px',
    position: 'absolute',
    top: '2px',
    left: '7px',
  },
  Contact :{
    color: '#efd5a9',
    fontSize: 12,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    letterSpacing:-0.2,
    position: 'absolute',
    top: 43,
    left: 9,
  },
  Rectangle801 :{
    backgroundColor: '#92b53d',
    height: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 11,
    paddingRight: 8,
    alignItems: 'center',
    borderRadius: 5,
  },
  Profile :{
    color: '#0c0b37',
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    letterSpacing: -0.2
  },
  Home :{
    color: '#efd5a9',
    fontSize: 12,
    fontFamily: "Open Sans",
    fontWeight: '400',
    letterSpacing: -0.2,
    position: 'absolute',
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
})

export default function Nav() {

 
    return (
      <View
      style={styles.newRootRoot}
      nativeID={'bottom-nav'}
    >
     <View
      style={styles.propert10nProfile}
     >
      <View
       style={styles.Rectangle70}
      >
      <Pressable
        style={styles.Rectangle81}
        onPress={()=>alert('pressed')}
      >   
        <Image
         style={styles.logo}
         source={{
           uri: 'https://user-images.githubusercontent.com/79036942/150620823-31a786f0-4542-4639-b640-1080cf894b2e.png'
         }}
         resizeMode={'cover'} 
       />
         <Text style={styles.Info}>Home</Text>
       </Pressable>
      <View
        style={styles.Rectangle81}
        >
          <Image
           style={styles.logo}
           source={{
             uri:'https://user-images.githubusercontent.com/79036942/150621195-afe70266-f802-4aad-bebe-fe1d78763522.png'
           }}
          />
       
         <Text style={styles.Info}>Info</Text>
      </View>
      <View
        style={styles.Rectangle81}
      >
        <Image
           style={styles.logo}
           source={{
             uri:'https://user-images.githubusercontent.com/79036942/150621470-432cc4f7-194b-499f-a9d2-bdf2b3170cfa.png'
           }}
          />
        <Text style={styles.Info}>Apply</Text>
      </View>
      <View
        style={styles.Rectangle81}
        >
         <Image
           style={styles.logo}
           source={{
             uri:'https://user-images.githubusercontent.com/79036942/150621538-81f29903-2b80-4d6f-b0ed-d8f27dfcd364.png'
           }}
          />
       <Text style={styles.Info}>Contact</Text>
      </View>
      <View
        style={styles.Rectangle76}
      >
         <Image
           style={styles.logo}
           source={{
             uri:'https://user-images.githubusercontent.com/79036942/150621590-a71dc143-4200-42e3-8a91-866235a5c143.png'
           }}
          />
       <Text style={styles.Profile}>Profile</Text>
      </View>
      
      </View>
     </View>
    </View>
   )
}
