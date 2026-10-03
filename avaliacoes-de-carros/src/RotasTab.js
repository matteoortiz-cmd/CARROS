import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import RotasButtom from './RotasButtom'; 
import RotasMotos from './RotasMotos'; 
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Carros"
        component={RotasButtom}
        options={{
          tabBarLabel: 'Carros',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="QuestionMarkIcon " color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Motos"
        component={RotasMotos} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="motorbike" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}