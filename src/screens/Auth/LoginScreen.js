import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import {
    GoogleSignin,
    GoogleSigninButton
} from '@react-native-google-signin/google-signin';

function LoginScreen(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        GoogleSignin.configure({
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
                // 'https://www.googleapis.com/auth/drive.appdata',
                // 'https://www.googleapis.com/auth/drive.metadata',
                // 'https://www.googleapis.com/auth/drive.readonly',
                // 'https://www.googleapis.com/auth/drive.metadata.readonly',
                // 'https://www.googleapis.com/auth/drive.apps.readonly',
                // 'https://www.googleapis.com/auth/drive.photos.readonly'
            ],
            webClientId: '534472500462-df8aihedbs5f0t18hle5pq5s6kacc93g.apps.googleusercontent.com'
        });
        isSignedIn();
    }, []);

    const storeUserInfor = (data) => {
        props.dispatch({
            type: 'LOGIN',
            userInfor: data
        });
    }

    const signIn = async () => {
        try {
            // Check if device has Google Play Services installed
            await GoogleSignin.hasPlayServices({
                // Check update if exist
                showPlayServicesUpdateDialog: true
            });
            const userInfo = await GoogleSignin.signIn();
            storeUserInfor(userInfo);
            props.navigation.replace('MainTab');
        } catch (error) {
            console.log(error);
        }
    }

    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn) {
            console.log('User is already signed in');
            try {
                let info = await GoogleSignin.signInSilently();
                storeUserInfor(info);
                props.navigation.replace('MainTab');
            } catch (error) {
                console.log("Unable to get user's info", error);
            }
        }
        setIsLoading(false);
    }

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    size='large'
                    color='green'
                />
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'http://dotshop69.000webhostapp.com/Public/images/chdlogo.png' }}
                    />
                </View>
                <View style={styles.body}>
                    <GoogleSigninButton
                        style={{ width: 312, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={signIn}
                    />
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/exe.shiro')}>
                        <Text style={styles.textLink}>Contact us</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    header: {
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 300
    },
    body: {
        height: '40%'
    },
    footer: {
        height: '20%'
    },
    textLink: {
        fontSize: 15,
        color: 'blue',
        textDecorationLine: 'underline'
    }
});

export default connect()(LoginScreen);