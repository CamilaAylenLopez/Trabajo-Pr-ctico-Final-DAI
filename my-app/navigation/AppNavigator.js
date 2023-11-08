import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Contactos from '../screens/Contactos';
import Camara from '../screens/Camara'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Contactos" component={Contactos} />
                <Stack.Screen name="Camara" component={Camara} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;