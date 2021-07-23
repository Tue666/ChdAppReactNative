import React, { useEffect, useState } from 'react';
import { Alert, Text, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import GDrive from 'react-native-google-drive-api-wrapper';

function ListFilesScreen(props) {
    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllFilesList();
        // else getAllMyAppFilesList();
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
                    q:"'1M2a9PgRyC7MW5ZdyXLlTuvKQiGDMV1po' in parents",
                });
                let result = await data.json();
                setListData(result.files);
            }

        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    // const getAllMyAppFilesList = async () => {
    //     try {
    //         if (!(await initGoogleDrive())) {
    //             Alert.alert('Oops!', 'Failed to Initialize Google Drive', [{ text: 'OK' }]);
    //         }
    //         // Create/Get Directory on Google Device
    //         let directoryId = await GDrive.files.safeCreateFolder({
    //             name: 'CTDL',
    //             parents: ['root'],
    //         });
    //         console.log('directoryId -> ', directoryId);
    //         let data = await GDrive.files.list({
    //             q:
    //                 GDrive._stringifyQueryParams(
    //                     {
    //                         trashed: false,
    //                         // mimeType: 'application/text'
    //                     },
    //                     '',
    //                     ' and ',
    //                     true,
    //                 ) + ` and '${directoryId}' in parents`,
    //         });
    //         let result = await data.json();
    //         setListData(result.files);
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     setLoading(false);
    // }

    const ItemView = ({ item }) => {
        return (
            // FlatList Item
            <View style={{ padding: 10 }}>
                <Text style={styles.item} onPress={() => getItem(item)}>
                    File Id: {item.id}
                    {'\n'}
                    File Name: {item.name}
                    {'\n'}
                    Mine Type: {item.mimeType}
                </Text>
            </View>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // FlatList Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const getItem = (item) => {
        //Function for click on an item
        alert(JSON.stringify(item));
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    else {
        return (
            <FlatList
                data={listData}
                //data defined in constructor
                ItemSeparatorComponent={ItemSeparatorView}
                //Item Separator View
                renderItem={ItemView}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    },
    footerText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey',
    },
});

export default ListFilesScreen;
