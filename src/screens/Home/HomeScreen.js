import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Image, Alert, ActivityIndicator, RefreshControl, FlatList } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import GDrive from 'react-native-google-drive-api-wrapper';

import SheetItem from '../../components/Home/SheetItem';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function HomeScreen(props) {
    const [refreshing, setRefreshing] = useState(false);
    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllFilesList();
        // else getAllMyAppFilesList();
    }, []);

    const onRefresh = useCallback(() => {
        getAllFilesList();
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const initGoogleDrive = async () => {
        // Getting Access Token from Google
        let token = await GoogleSignin.getTokens();
        if (!token) {
            Alert.alert('Oops!', 'Failed to get token', [{ text: 'OK' }]);
            return false;
        }
        else {
            // console.log('res.accessToken =>', token.accessToken);
            // Setting Access Token
            GDrive.setAccessToken(token.accessToken);
            // Initializing Google Drive and confirming permissions
            GDrive.init();
            // Check if Initialized
            return GDrive.isInitialized();
        }
    };

    const getAllFilesList = async () => {
        try {
            if (!(await initGoogleDrive())) {
                Alert.alert('Oops!', 'Failed to Initialize Google Drive', [{ text: 'OK' }]);
            }
            else {
                let data = await GDrive.files.list({
                    // mimeType='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' for exactly excel file
                    q: "'1M2a9PgRyC7MW5ZdyXLlTuvKQiGDMV1po' in parents",
                });
                let result = await data.json();
                setListData(result.files);
            }

        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    if (loading) {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.title}>
                        <Image
                            style={styles.logo}
                            source={{ uri: 'http://dotshop69.000webhostapp.com/Public/images/chdlogo.png' }}
                        />
                    </View>
                </View>
                <View style={[styles.body, { justifyContent: 'center', alignItems: 'center' }]}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.title}>
                        <Image
                            style={styles.logo}
                            source={{ uri: 'http://dotshop69.000webhostapp.com/Public/images/chdlogo.png' }}
                        />
                    </View>
                </View>
                <FlatList
                    style={styles.body}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    data={listData}
                    renderItem={({ item }) => (
                        <SheetItem item={item} />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    header: {
        height: '7%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 7
    },
    imageUser: {
        borderRadius: 35 / 2,
        width: 35,
        height: 35
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%'
    },
    logo: {
        width: 30,
        height: '100%'
    },
    text: {
        fontWeight: 'bold',
        color: 'blue'
    },
    body: {
        height: '93%',
        marginHorizontal: 30,
        paddingTop: 20,
        marginBottom: 100
    }
});
export default HomeScreen;
