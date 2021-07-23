import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

function Header(props) {
    const { userInfo } = props;

    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image
                    style={styles.imageUser}
                    source={{ uri: userInfo.user.photo }}
                />
            </TouchableOpacity>
            <View style={styles.title}>
                <Text style={styles.email}>Ch</Text>
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://logodix.com/logo/291503.jpg' }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    imageUser: {
        borderRadius: 20,
        width: 40,
        height: 40
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%'
    },
    logo: {
        width: 26,
        height: '100%'
    },
    email: {
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 23
    },
});

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}
export default connect(mapStateToProps)(Header);
