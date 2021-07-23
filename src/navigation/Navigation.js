import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginStack from '../routes/LoginStack';
import HomeStack from '../routes/HomeStack';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="LoginStack"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="LoginStack"
                    component={LoginStack}
                />
                <Stack.Screen
                    name="HomeStack"
                    component={HomeStack}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
