import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function UserManualScreen() {
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
            <View style={styles.body}>
                <Text style={[styles.text, { fontSize: 25, marginVertical: 10, fontWeight: 'bold' }]}>Hướng dẫn sử dụng</Text>
                <Text style={[styles.text, { color: 'red' }]}>1) Files sheet phải được lưu dưới dạng Spreadsheet!</Text>
                <Text style={styles.text}>Các bước thực hiện:</Text>
                <Text style={styles.text}>- Mở files (<Text style={styles.hightlight}>Chuột phải</Text> - <Text style={styles.hightlight}>Open with Google Sheets</Text>)</Text>
                <Text style={styles.text}>- Lưu dưới dạng Google Sheets (<Text style={styles.hightlight}>File</Text> - <Text style={styles.hightlight}>Save as Google Sheets</Text>)</Text>
                <Text style={styles.text}>- Xóa Sheets cũ nếu cần thiết (<Text style={styles.hightlight}>Chuột phải</Text> - <Text style={styles.hightlight}>Remove</Text>)</Text>
                <Text style={styles.text}>- Vào Trash để xóa vĩnh viễn nếu cần thiết</Text>
                <Text style={[styles.text, { color: 'red' }]}>2) Dữ liệu các cột phải theo đúng thứ tự sau:</Text>
                <Text style={styles.text}>
                    <Text style={styles.hightlight}>STT - </Text>
                    <Text style={styles.hightlight}>Họ tên HS - </Text>
                    <Text style={styles.hightlight}>SĐT HS - </Text>
                    <Text style={styles.hightlight}>Email HS - </Text>
                    <Text style={styles.hightlight}>SĐT PH - </Text>
                    <Text style={styles.hightlight}>Email PH - </Text>
                    <Text style={styles.hightlight}>Tin nhắn - </Text>
                    <Text style={styles.hightlight}>Ghi chú</Text>
                </Text>
                <Image
                    blurRadius={1}
                    style={styles.image}
                    source={{ uri: 'https://img2.pngio.com/good-luck-png-vector-psd-and-clipart-with-transparent-luck-vector-png-360_360.png' }}
                />
            </View>
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
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'gray',
        fontSize: 17,
        textAlign: 'center'
    },
    hightlight: {
        color: 'black'
    },
    image: {
        width: 150,
        height: 150,
        marginTop: 40,
        borderRadius: 75
    }
});
