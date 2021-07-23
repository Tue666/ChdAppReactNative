import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export function CustomTabItem(props) {
    const { focused, icon } = props;
    return (
        <View style={styles.container}>
            <FontAwesome5
                name={icon}
                size={25}
                color={focused ? "red" : "rgba(0,0,0,0.8)"}
                style={{ paddingBottom: focused ? 10 : 0 }}
            />
        </View>
    );
};

export function CustomMiddleItem(props) {
    const { icon } = props;
    return (
        <View style={styles.middleItem}>
            <Text style={styles.plusText}>+</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleItem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(255,0,0,0.8)',
        elevation: 8,
        top: -38
    },
    plusText: {
        color: '#fff',
        fontSize: 50
    }
});
