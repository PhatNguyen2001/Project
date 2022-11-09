import React , {useEffect , useState  } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput, 
 
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Swiper from 'react-native-swiper';
import Buttons from './Buttons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
export default function WelcomeScreen({navigation}) {
  return (
    <NavigationContainer >
         <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'SignIn') {
              iconName = focused
                ? 'battery-full-outline'
                : 'battery-half-outline';
            } else if (route.name === 'SignUp') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'blue',
        })}
        >
            <Tab.Screen name="SignIN" component={SignIn}  />
            <Tab.Screen name="SignUp" component={SignUp} />  
       </Tab.Navigator>
    </NavigationContainer>
        
    
  );
}
const styles = StyleSheet.create({
  title: {
    // headerTitle: 'Sign In',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#FFA500',
    },
    headerTitleStyle: {
      color: 'white',
    },
    tabBarIcon: ({color, size}) => (
      <IconSimpleLineIcon name="login" color={color} size={size} />
    ),
  },
  container: {
    flex: 1,
  },
  image :{
    
    height: '80%',
  },
  inputs :{
    borderWidth :1
  }
});
