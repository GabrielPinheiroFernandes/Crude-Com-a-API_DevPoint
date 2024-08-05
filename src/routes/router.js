import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { COLORS, DARKTHEME } from '../constants/theme/theme';
import icons from './../constants/theme/icons';

import Home from '../pages/home/home';
import Get from '../pages/get/get'
import Put from '../pages/put/put';
import { Image, TouchableOpacity } from 'react-native';
import Post from '../pages/post/post';
import PutItem from '../pages/put.item/put.item';
import Del from '../pages/del/del';



const Tab = createBottomTabNavigator();



function Router() {
  return (
    <NavigationContainer >
        <Tab.Navigator initialRouteName='Get'>


        


            <Tab.Screen name="Home" component={Home} options={{
              headerShown:true,
              title:'Home',
              headerTitleAlign:'center',
              headerShadowVisible:true,
              headerStyle: {
                backgroundColor: DARKTHEME.main_color, // Define a cor de fundo do header
              },
              headerTintColor:COLORS.bright_orange,
              tabBarIcon: ({ color, size }) => (
                <Image source={icons.home} style={{ width: size, height: size, tintColor: color }} />
              ),
              
            }}/>


            


            <Tab.Screen name="Get" component={Get} options={{
              headerShown:true,
              title:'Get',
              headerTitleAlign:'center',
              headerShadowVisible:true,
              headerStyle: {
                backgroundColor: DARKTHEME.main_color, // Define a cor de fundo do header
              },
              headerTintColor:COLORS.bright_orange,
              tabBarIcon: ({ color, size }) => (
                <Image source={icons.get} style={{ width: size, height: size, tintColor: color }} />
              ),
            }}/>


            <Tab.Screen name="Post" component={Post} options={{
              headerShown:true,
              title:'Post',
              headerTitleAlign:'center',
              headerShadowVisible:true,
              headerStyle: {
                backgroundColor: DARKTHEME.main_color, // Define a cor de fundo do header
              },
              headerTintColor:COLORS.bright_orange,
              tabBarIcon: ({ color, size }) => (
                <Image source={icons.post} style={{ width: size, height: size, tintColor: color }} />
              ),
            }}/>

            <Tab.Screen name="Del" component={Del} options={{
              headerShown:true,
              title:'Del',
              headerTitleAlign:'center',
              headerShadowVisible:true,
              headerStyle: {
                backgroundColor: DARKTHEME.main_color, // Define a cor de fundo do header
              },
              headerTintColor:COLORS.bright_orange,
              tabBarIcon: ({ color, size }) => (
                <Image source={icons.trash} style={{ width: size, height: size, tintColor: color }} />
              ),
            }}/>

            
            <Tab.Screen name="Put" component={Put} options={{
              headerShown:true,
              title:'Put',
              headerTitleAlign:'center',
              headerShadowVisible:true,
              headerStyle: {
                backgroundColor: DARKTHEME.main_color, // Define a cor de fundo do header
              },
              headerTintColor:COLORS.bright_orange,
              tabBarIcon: ({ color, size }) => (
                <Image source={icons.Put} style={{ width: size, height: size, tintColor: color }} />
              ),
            }}/>

            {/* <Tab.Screen name="PutItem" component={PutItem} options={{
              
              headerShown:false,
              title:'PutItem',
              headerTitleAlign:'center',
              headerShadowVisible:true,
              headerStyle: {
                backgroundColor: DARKTHEME.main_color, // Define a cor de fundo do header
              },
              headerTintColor:COLORS.bright_orange,
              tabBarIcon: ({ color, size }) => (
                <Image source={icons.more} style={{ width: size, height: size, tintColor: color }} />
              ),
            }}/> */}



          <Tab.Screen name="PutItem" component={PutItem} options={({ navigation }) => ({
                    tabBarButton: () => null, // Oculta o botão da tab bar
                    tabBarVisible: false, // Garante que a tab bar esteja oculta
                    headerShown: true, // Mostra o header
                    title: 'PutItem',
                    headerTitleAlign: 'center',
                    headerShadowVisible: true,
                    headerStyle: {
                      backgroundColor: DARKTHEME.main_color,
                    },
                    headerTintColor: COLORS.bright_orange,
                    headerLeft: () => (
                      <TouchableOpacity onPress={() => navigation.navigate('Put')}>
                        <Image source={icons.back} style={{ width: 25, height: 25, tintColor: COLORS.bright_orange, marginLeft: 15 }} />
                      </TouchableOpacity>
                    ),
                  })} />


            
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;