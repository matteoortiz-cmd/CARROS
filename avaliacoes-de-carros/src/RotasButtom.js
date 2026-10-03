import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Tcross from './Carros/Tcross';
import Hb20 from './Carros/Hb20';
import Onix from './Carros/Onix';
import Renegade from './Carros/Renegade';
import Carros from './Pages/Carros';

const Stack = createStackNavigator();

export default function RotasButtom() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Carros"
        component={Carros}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Hb20"
        component={Hb20}
        options={{ title: 'HB20' }}
      />

      <Stack.Screen
        name="Onix"
        component={Onix}
        options={{ title: 'Onix' }}
      />

      <Stack.Screen
        name="Renegade"
        component={Renegade}
        options={{ title: 'Renegade' }}
      />

      <Stack.Screen
        name="Tcross"
        component={Tcross}
        options={{ title: 'T-Cross' }}
      />

    </Stack.Navigator>
  );
}