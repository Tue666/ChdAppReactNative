import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

function AccountScreen(props) {
    const { userInfo } = props;

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

            <View style={[styles.wrapper, { height: 310 }]}>
                <Image
                    style={styles.image}
                    source={{ uri: userInfo.user.photo }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '21%' }}>
                    <Text style={styles.name}>{userInfo.user.name}</Text>
                    <FontAwesome5 name="check-circle" color="green" solid size={20} />
                </View>
                <View style={styles.separator} />
                <View style={{ paddingHorizontal: 20 }}>
                    <Text>I am a UI/UX designer for Website and Mobile who likes to create powerful, pixel perfect designs that augment a product's appeal. I specialize in creating dynamic yet seamless user interfaces that have high conversion rates and end user satisfaction.</Text>
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <FontAwesome5 name="edit" color="blue" solid size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.wrapper, { height: 300 }]}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Information</Text>
                <View style={styles.itemInfor}>
                    <Text style={styles.text}>First name:</Text>
                    <Text style={styles.text}>{userInfo.user.givenName}</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.itemInfor}>
                    <Text style={styles.text}>Last name:</Text>
                    <Text style={styles.text}>{userInfo.user.familyName}</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.itemInfor}>
                    <Text style={styles.text}>Full name:</Text>
                    <Text style={styles.text}>{userInfo.user.name}</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.itemInfor}>
                    <Text style={styles.text}>Email:</Text>
                    <Text style={styles.text}>{userInfo.user.email}</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.itemInfor}>
                    <Text style={styles.text}>Phone:</Text>
                    <Text style={styles.text}>06969696969</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.itemInfor}>
                    <Text style={styles.text}>Address:</Text>
                    <Text style={styles.text}>Viet Nam</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingTop: 45
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
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10
    },
    name: {
        fontSize: 20
    },
    itemInfor: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    text: {
        color: 'gray',
        fontSize: 15
    }
});

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}
export default connect(mapStateToProps)(AccountScreen);