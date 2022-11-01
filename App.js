import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  useColorScheme,
  StatusBar
} from 'react-native';
import applyLTR from './src/utils/i18n'

//Vector Icons
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'

//Navigation Imports
import { NavigationContainer,  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home/Home';
import SavedSets from './src/screens/SavedSets/SavedSets';
import ChooseType from './src/screens/CreateSet/ChooseType/ChooseType';
import ShirtListScreen from './src/screens/CreateSet/ShirtListScreen/ShirtListScreen'
import PantsListScreen from './src/screens/CreateSet/PantsListScreen/PantsListScreen'
import ShoesListScreen from './src/screens/CreateSet/ShoesListScreen/ShoesListScreen'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeFlow() {
  return (
    <Tab.Navigator screenOptions={{
      initialRouteName: 'Home',
      headerStyle: styles.headerStyle,
      headerTintColor: '#2A2B2A',
      tabBarActiveTintColor: '#fff',
      headerTitleStyle: {fontSize: 30},
      tabBarStyle: {backgroundColor: '#2A2B2A', height: 60, paddingBottom: 5}}}
       >
      <Tab.Screen 
        name="Home"
       component={Home}  
       options={{
        headerTitle:'home' ,
        tabBarIcon: ({focused}) => <SimpleIcon name='home' color={focused ? "white" : "grey"} size={22}/>,
      }} />
      <Tab.Screen name="CreateSet" component={CreateSetFlow} options={{
         headerShown: false, 
         tabBarLabel:'Create',
         tabBarIcon: ({focused}) => <Ionicon name='create-outline' color={focused ? "white" : "grey"} size={27}/>,
         }} />
      <Tab.Screen name="SavedSets" component={SavedSets} options={{ 
        tabBarLabel:'Sets',
        headerTitle: 'your sets',
        tabBarIcon: ({focused}) => <SimpleIcon name='list' color={focused ? "white" : "grey"} size={26}/>,

         }} />
    </Tab.Navigator>
  );
}
function CreateSetFlow() {
  return (
    <Stack.Navigator initialRouteName='ChooseType'  screenOptions={{headerStyle: styles.headerStyle, headerTitleStyle: {fontSize: 30}, headerTintColor: '#2A2B2A',}}>
      <Stack.Screen name="ChooseType" component={ChooseType} options={{headerTitle:'create a new set'}} />
      <Stack.Screen name="ShirtList" component={ShirtListScreen} options={{headerTitle:'add new shirt'}}/>
      <Stack.Screen name="PantsList" component={PantsListScreen} options={{headerTitle:'add new pants'}}/>
      <Stack.Screen name="ShoesList" component={ShoesListScreen} options={{headerTitle:'add new shoes'}}/>
    </Stack.Navigator>
  );
}


const App: () => Node = () => {
  
  applyLTR
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#C7B98B'}
      />
       <Stack.Navigator >
        <Stack.Screen
            name="HomeFlow"
            component={HomeFlow}
            options={{ headerShown: false }}
          />
         <Stack.Screen
          name="CreateSetFlow"
          initialParams={'ChooseType'}
          component={CreateSetFlow}
          options={{ headerShown: false }}
        />  
       </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4E3',
  },
  headerStyle: {
    backgroundColor: '#C7B98B'
  }
});

export default App;
