import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Switch } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { connect } from 'react-redux';

function SettingScreen(props) {
    const [isEnabled, setIsEnabled] = useState(false);

    const removeStore = () => {
        props.dispatch({ type: 'LOGOUT ' });
    }

    const signOut = () => {
        Alert.alert('', 'Are you sure you wanna leave?', [
            { text: 'CANCEL' },
            {
                text: 'OK', onPress: async () => {
                    try {
                        await GoogleSignin.revokeAccess();
                        await GoogleSignin.signOut();
                        removeStore();
                        props.navigation.replace('LoginStack');
                    } catch (error) {
                        console.error(error);
                    }
                }
            }
        ])
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.circle,
                {
                    width: 800,
                    height: 800,
                    borderRadius: 400,
                    top: -350,
                    left: -300
                }
            ]} />
            <View style={[
                styles.circle,
                {
                    width: 400,
                    height: 400,
                    borderRadius: 200,
                    bottom: -90,
                    right: -170
                }
            ]} />

            <View style={[styles.wrapper, { height: 100 }]}>
                <View style={styles.itemSetting}>
                    <Text style={styles.text}>Dark theme:</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "rgba(255,0,0,0.4)" }}
                        thumbColor={isEnabled ? "rgba(255,0,0,0.9)" : "#f4f3f4"}
                        onValueChange={() => { setIsEnabled(!isEnabled) }}
                        value={isEnabled}
                    />
                </View>
            </View>
            <TouchableOpacity style={[styles.wrapper, { width: '70%', height: 50 }]} onPress={signOut}>
                <View>
                    <FontAwesome5 name="power-off" color="red" size={30} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: 'rgba(255,255,255,0.8)'
    },
    circle: {
        position: 'absolute',
        backgroundColor: 'rgba(255,0,0,0.55)'
    },
    separator: {
        width: '90%',
        height: 1,
        backgroundColor: '#eee',
        margin: 10
    },
    wrapper: {
        width: '95%',
        borderRadius: 15,
        backgroundColor: '#fff',
        elevation: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
    itemSetting: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    text: {
        color: 'gray',
        fontSize: 15
    }
});

export default connect()(SettingScreen);