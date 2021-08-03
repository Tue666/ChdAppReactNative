import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/HomeScreen';
import SingleScreen from '../screens/Home/SingleScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                name="SingleScreen"
                component={SingleScreen}
            />
        </Stack.Navigator>
    );
};