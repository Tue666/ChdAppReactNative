import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default function SheetItem({ item }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAA81BMVEX///8YXDcho2YQfEEzxIEUgkgVhEoSgEUPdj0Qe0EAUyiluKwOcjoeklsWUjISQSgNbjcZkFUGn16n1Lsjwnur48bk7ugONSATSSwMazULKhouu3oJSCYdmV0SdD4AciwATR3n9+7l6+eFxaODno0AfToUbTzK3tIAaCYAbyrR6NuEu54djlkAezTU49oAfT5TmG4SYTZ8hYB/kIa6589/1akAmlJRyo+h37+83ctsqYYXb0az0L8bhFOmx7NDkWOQuqAAiER0qIgAZgg4h1dgnHaqxrQAbS2Dq5EAaBoAHAQLJBgAOBq6yMAARgpAcVR0lIEo+6HfAAAFe0lEQVR4nO2aa1fbRhCG7Qgj23GxQqkJxEWUVhgRLEEvaZtycShEuGnS/v9fU112dRsJtPi4skfvcw7YXvmD9jkzs7Mrt1oAAAAAAAAAAAAAAAAAAAAAAAAAALVz+rUa3yjw83d1z+45nL7YVuTNjgq/1D1BdU7fvVDlzYYKO7/WPUVltpWVKDrZ2Pmt7jkq8vvynWzs1D1JRb7/P5ysWZ2FEwqcUOCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4ITy9tVXlYCTAr6FE8lZQaRwcDJ671p5ptPoxd1M6Ej0gOi/ftxu/3GWlcLAyeV0sxKBjYwawUW7fcXMiVNdSYGRIGDa7fYZLyfnKkFCjfhOjsfjvmHs9SSpcluJd6O6HeSpEibFaaNLxuPxgWFoAmUn26vmZGQtakTv+E4Mw+g1yElpIUnHSaOcPFJIGurkqbRpoJNKRhrl5OlC0jQnVQpJs5xUKyQZJ9z7ExUjjYiTeJecVSJHm+jEvZ4I0lJ0Sww7N41z4s/+Rl6buUnauOdi0DFzRjTuToJCYl3Ki1M9riSmvPFcWfEl8HYSrTYdV16MAiWYunsrh6ycEa3H2Um8/rpv5VVLHjHKMBmZOSU9XwVbJ+mOJE6UmRtN3p2JgXOXGOmxdZLpSJIyKzLFEh8vzbSRQEmvx9VJvpGfyjJ7HcaFdS0+ujkjgRKeTmgjr8dlNrTQER8e3FzahIHC0Enh1iYuINd+9pgiamSBzRhh6oRubTpJP+Lq2p14e+dmC4mAo5MCI6m+9do1nejdRzNXSCQs98VF+1+ZMC1L2jE1kjY+3W6PX5yUnQjIMjubRK/v3ShIckY4OpmWKNGtWeaLjknTptvl6cQqNpLe9oVc0ULSFXB2kjsEiMtswMykhaQBTvQ85iT+2pFZaiRychCvO5qyk1X7XUFcT4gRP1DibY8fJsVpEzIcDi8uLo4lm6/U+LBycTItM+LHiZN8r9xIt7u7u7u1tdWWHGSal6cxV9JJoZHswjOxC9PGZ0CdqLGSToqVaHrmi/dusZFBQZysvZNiI0nmyEJrFygJjHCMkxIl8Qnsn+KWP9qFRgbNcaLJ1v7WlHLuaNoMBiyd5B/XyMwRKTOyNVueT88LgqQ5TjT3Xlz3S6sm+9kHr8BIU5z49ykuO0FltWWfklp/YyPNcBLcpjw8uQn7ednPTk4yhSTCGLB3EtxlvPub2OHya8v1+H6QTZtACXsnwT32krsMetcgMq7E56N5lxgZMHeihWckpnyc47ckUf3w4uc9Xt4I8ziJgkRz5Tl9K1lnunLoIG+EtRNNEwdpsh9pzRInngwdZ55SYhisncRGeuZMXrNTvbwnB2+9TJAwdqIlzyjizLlNpU7Xm8nhnBGuTsIgEUeLnvw526WdaeRPxLDz4A3SRnwYOtG0zIm8Z9u2/+flG/kTgRcXkpC9PYZOtNJnFHRrk0+bQAlLJ4+cyOe3NgVGWDoRPzYqMZJTQo2wdKKUNtSIDz8ni6QNUyflzygG1YywdFKpkJSkDWsniutvA5w8s5AwddKaL1BIBPvcnNwsUEgi+uzixCl5alM1SMLUyThR5fCobgeEy5SUZxjZG+7zc9Ia3XpzuelN3szDPy9tyCgQ1N/d5+jkMX78a/9RPn0KlQzhJEOgBE6okkY5+envYSUWUMLXyfOVcHXyegEl6+dk/LoKiyhh6mSRzGHqZCEj6+fkh/6CE4YTOIETOBHACQVOKHBCgRMKnFDghAInFDihwAkFTiifD5fvpF/3JFVZfpz0X9Y9R1WcL8tW8k/dU1THaR/2l8iXf+ue4LNwXi6Pz2tWXwEAAAAAAAAAAAAAAAAAAAAAAACwpvwH7gKhj9z+GrkAAAAASUVORK5CYII=' }}
            />
            <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '70%' }}>
                <Text style={styles.name}>{item.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        width: '95%',
        height: 80,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 5,
        margin: 15,
        padding: 10
    },
    image: {
        width: '30%',
        height: '100%'
    },
    name: {
        maxWidth: '100%',
        paddingHorizontal: 20,
        fontSize: 15,
        color: 'black'
    }
});
