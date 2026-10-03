import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Harley from './Motos/HarleyD';
import HondaCG from './Motos/HondaCG';
import Kawasaki from './Motos/Kawasaki';
import Pop100 from './Motos/Pop100';
import Motos from './Pages/Motos';

const Stack = createStackNavigator();

export default function RotasMotos() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Motos" component={Motos} options={{ headerShown: false }} />
      <Stack.Screen name="Harley" component={Harley} options={{ title: 'Harley' }} />
      <Stack.Screen name="HondaCG" component={HondaCG} options={{ title: 'HondaCG' }} />
      <Stack.Screen name="Kawasaki" component={Kawasaki} options={{ title: 'Kawasaki' }} />
      <Stack.Screen name="Pop100" component={Pop100} options={{ title: 'Pop100' }} />
    </Stack.Navigator>
  );
}