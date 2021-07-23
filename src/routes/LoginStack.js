import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Auth/LoginScreen';

const Stack = createStackNavigator();

export default function LoginStack() {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
        </Stack.Navigator>
    );
};