import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function StudentItem(props) {
    const { type, student } = props;
    let titleInfor = '';
    let value = '';
    switch (type) {
        case 'STT':
            titleInfor = 'STT';
            value = student.STT ? student.STT : '';
            break;
        case 'StudentPhone':
            titleInfor = 'Số điện thoại HS';
            value = student.StudentPhone ? student.StudentPhone : '';
            break;
        case 'StudentEmail':
            titleInfor = 'Email HS';
            value = student.StudentEmail ? student.StudentEmail : '';
            break;
        case 'ParentsPhone':
            titleInfor = 'Số điện thoại PH';
            value = student.ParentsPhone ? student.ParentsPhone : '';
            break;
        case 'ParentsEmail':
            titleInfor = 'Email PH';
            value = student.ParentsEmail ? student.ParentsEmail : '';
            break;
        case 'Note':
            titleInfor = 'Ghi chú';
            value = student.Note ? student.Note : '';
            break;
    }
    return (
        <View style={styles.infor}>
            <Text style={styles.titleInfor}>{titleInfor}</Text>
            <View style={styles.field}>
                <Text style={styles.textField}>{value}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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