import React, { Component } from "react";
import { Text, StyleSheet, View, SafeAreaView, Alert, TouchableHighlight } from 'react-native';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Bird's Nest",
            bodyText: "This is not really a bird nest."
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <View style={styles.fixToText}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => Alert.alert('30')}
                        >
                            <Text style={styles.textStyles}>30</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => Alert.alert('50')}
                        >
                            <Text style={styles.textStyles}>50</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => Alert.alert('100')}
                        >
                            <Text style={styles.textStyles}>100</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    textStyles: {
        fontSize: 40
    },
    button: {
        width: 115,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#cfe2f2',
        height: 50,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
    },
    title: {
        textAlign: 'center',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
});


// const Buttons = () => (
//     <SafeAreaView style={styles.container}>
//         <View>
//             <View style={styles.fixToText}>
//                 <TouchableHighlight
//                     style={styles.button}
//                     onPress={() => Alert.alert('30')}
//                 >
//                     <Text>30</Text>
//                 </TouchableHighlight>
//                 <TouchableHighlight
//                     style={styles.button}
//                     onPress={() => Alert.alert('50')}
//                 >
//                     <Text>50</Text>
//                 </TouchableHighlight>
//                 <TouchableHighlight
//                     style={styles.button}
//                     onPress={() => Alert.alert('100')}
//                 >
//                     <Text styles={styles.text}>100</Text>
//                 </TouchableHighlight>
//             </View>
//         </View>
//     </SafeAreaView>
// );

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     text: {
//         fontSize: 20,
//         fontWeight: "bold"
//     },
//     button: {
//         width: 115,
//         marginLeft: 5,
//         marginRight: 5,
//         backgroundColor: '#cfe2f2',
//         height: 50,
//         borderRadius: 10,
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderWidth: 1.5
//     },
//     title: {
//         textAlign: 'center',
//     },
//     fixToText: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 5,
//     },
// });

export default Buttons;