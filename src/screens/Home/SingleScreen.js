import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image, ScrollView, Picker } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { googleApi } from '../../Api/callApi';

export default function SingleScreen(props) {
    const { item, accessToken } = props.route.params;
    const [loading, setLoading] = useState(false);
    // const [dataSheet, setDataSheet] = useState([]);

    // useEffect(() => {
    //     const ranges = 'Sheet1!A2:H100';
    //     const dateTimeRenderOption = 'FORMATTED_STRING';
    //     const majorDimension = 'ROWS';
    //     const valueRenderOption = 'FORMATTED_VALUE';
    //     const dataSheetsUrl = 'https://sheets.googleapis.com/v4/spreadsheets/' + item.id + '/values/' + ranges + '?dateTimeRenderOption=' + dateTimeRenderOption + '&majorDimension=' + majorDimension + '&valueRenderOption=' + valueRenderOption;
    //     googleApi(dataSheetsUrl, 'GET', accessToken)
    //         .then(res => res.json())
    //         .then(json => {
    //             let listData = dataSheet;
    //             json.values.map(item => {
    //                 const singleObject = {
    //                     STT: item[0],
    //                     StudentName: item[1],
    //                     StudentPhone: item[2],
    //                     StudentEmail: item[3],
    //                     ParentsPhone: item[4],
    //                     ParentsEmail: item[5],
    //                     Message: item[6],
    //                     Note: item[7]
    //                 };
    //                 listData = [...listData, singleObject];
    //             });
    //             setDataSheet(listData);
    //             setLoading(false);
    //         });
    // }, []);

    // if (loading) {
    //     return (
    //         <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
    //             <ActivityIndicator size="large" color="#0000ff" />
    //         </View>
    //     );
    // }
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
            {loading ?
                <View style={[styles.body, { justifyContent: 'center', alignItems: 'center' }]}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
                :
                <View style={styles.body}>
                    <View style={styles.sheetName}>
                        <FontAwesome5 name='arrow-left' size={20} onPress={() => props.navigation.pop()} />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text />
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.infor}>
                            <Text style={styles.titleInfor}>Họ và tên HS</Text>
                            <Picker
                                style={{ height: 50, width: '100%' }}
                            >
                                <Picker.Item label="Lê Chính Tuệ" value="java" />
                                <Picker.Item label="Lê Thị A" value="js" />
                            </Picker>
                        </View>
                        <View style={styles.infor}>
                            <Text style={styles.titleInfor}>STT</Text>
                            <View style={styles.field}>
                                <Text style={styles.textField}>1</Text>
                            </View>
                        </View>
                        <View style={styles.infor}>
                            <Text style={styles.titleInfor}>Số điện thoại HS</Text>
                            <View style={styles.field}>
                                <Text style={styles.textField}>06969696969</Text>
                            </View>
                        </View>
                        <View style={styles.infor}>
                            <Text style={styles.titleInfor}>Email HS</Text>
                            <View style={styles.field}>
                                <Text style={styles.textField}>lechinhtue292001@gmail.com</Text>
                            </View>
                        </View>
                        <View style={styles.infor}>
                            <Text style={styles.titleInfor}>Số điện thoại PH</Text>
                            <View style={styles.field}>
                                <Text style={styles.textField}>06969696969</Text>
                            </View>
                        </View>
                        <View style={styles.infor}>
                            <Text style={styles.titleInfor}>Email PH</Text>
                            <View style={styles.field}>
                                <Text style={styles.textField}>phuhuynh123@gmail.com</Text>
                            </View>
                        </View>
                        <View style={styles.infor}>
                            <Text style={styles.titleInfor}>Tin nhắn</Text>
                            <View style={styles.field}>
                                <Text style={styles.textField}>Đây là tin nhắn Đây là tin nhắn Đây là tin nhắn Đây là tin nhắn Đây là tin nhắn Đây là tin nhắn Đây là tin nhắn Đây là tin nhắn Đây là tin nhắn Đây là tin nhắn Đây là tin nhắn Đây là tin nhắn Đây là tin nhắn</Text>
                            </View>
                        </View>
                        <View style={styles.infor}>
                            <Text style={styles.titleInfor}>Ghi chú</Text>
                            <View style={styles.field}>
                                <Text style={styles.textField}>Đây là ghi chú</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            }
        </View>
    );
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
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%'
    },
    logo: {
        width: 30,
        height: '100%'
    },
    body: {
        height: '81%',
        marginHorizontal: 30,
        paddingTop: 10
    },
    sheetName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45,
        maxHeight: 45,
        overflow: 'hidden'
    },
    name: {
        maxWidth: 300,
        overflow: 'hidden',
        fontSize: 17,
        fontWeight: 'bold'
    },
    infor: {
        margin: 8
    },
    titleInfor: {
        fontWeight: 'bold',
        paddingBottom: 4
    },
    field: {
        backgroundColor: '#fff',
        padding: 13,
        elevation: 3
    },
    textField: {
        fontSize: 15
    }
});