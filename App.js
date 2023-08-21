
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { initZoom, joinMeeting, startMeeting } from './nativeModules/AwesomeZoomSDK';

const ZOOM_CONFIG = {
  ZOOM_PUBLIC_KEY : "yT3iqClKSbq1mk95ZFI3Hw",
  ZOOM_PRIVATE_KEY: "HdZhgOYqXbu8xAZ2j0oiLF7D144XJeJ4",
  ZOOM_DOMAIN: "zoom.us",
  JWT_API_KEY:"oEho2D1cQGico9QnpTRUDg",
  JWT_API_SECRET_KEY: "oEho2D1cQGico9QnpTRUDg"
}

const meetingNo = "94401251760";
const pwd = "ZmttUG9DQ1NFZStGLzRLTTkrREZFZz09";
const userId = "";
const userName = "zelhus";


const App = () => {

  const [zoomConfig, setZoomConfig] = useState({
    ZOOM_PUBLIC_KEY : "yT3iqClKSbq1mk95ZFI3Hw",
    ZOOM_PRIVATE_KEY: "HdZhgOYqXbu8xAZ2j0oiLF7D144XJeJ4",
    ZOOM_DOMAIN: "zoom.us",
    JWT_API_KEY:"oEho2D1cQGico9QnpTRUDg",
    JWT_API_SECRET_KEY: "oEho2D1cQGico9QnpTRUDg"
  })
  const [zoomAuth,setZoomAuth] = useState({
    meetingNo : "94401251760", 
    pwd : "ZmttUG9DQ1NFZStGLzRLTTkrREZFZz09",
    userName : "zelhus",
    userId: ""
  })

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          <View style={styles.body}>
            
          <Button title="Init ZOOM" onPress={() => initZoom()} />  

          <Button title ="joinMeeting" onPress={() => joinMeeting()}/>

          <Button title ="start meeting" onPress={() => startMeeting(meetingNo, userName, userId, zoomConfig.JWT_API_KEY, zoomConfig.JWT_API_SECRET_KEY)}/>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    justifyContent: 'space-around'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
