import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomTabItem, CustomMiddleItem } from '../shared/CustomBottomTab';

import HomeScreen from '../screens/Home/HomeScreen';
import ListFilesScreen from '../screens/Home/ListFilesScreen';
import UploadScreen from '../screens/Home/UploadScreen'
import AccountScreen from '../screens/Home/AccountScreen';
import SettingScreen from '../screens/Home/SettingScreen';

const Tab = createBottomTabNavigator();

export default function HomeStack() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    height: 75,
                    bottom: 20,
                    left: 20,
                    right: 20,
                    borderRadius: 20
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: props => <CustomTabItem {...props} icon="google-drive" />
                }}
            />
            <Tab.Screen
                name="ListFilesScreen"
                component={ListFilesScreen}
                options={{
                    tabBarIcon: props => <CustomTabItem {...props} icon="search" />
                }}
            />
            <Tab.Screen
                name="UploadScreen"
                component={UploadScreen}
                options={{
                    tabBarIcon: props => <CustomMiddleItem {...props} icon="plus-circle" />
                }}
            />
            <Tab.Screen
                name="AccountScreen"
                component={AccountScreen}
                options={{
                    tabBarIcon: props => <CustomTabItem {...props} icon="user-alt" />
                }}
            />
            <Tab.Screen
                name="SettingScreen"
                component={SettingScreen}
                options={{
                    tabBarIcon: props => <CustomTabItem {...props} icon="cogs" />
                }}
            />
        </Tab.Navigator>
    );
};