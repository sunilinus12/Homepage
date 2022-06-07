import { View, Text, SafeAreaView, Image, StyleSheet, useWindowDimensions, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Logo from "../images/logo.png"
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Register({ navigation }) {

    const { height } = useWindowDimensions();
    const [email, setEmail] = React.useState('');
    const [firstname, setFirst] = React.useState('');
    const [lastname, setLast] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);

    const validate = (text) => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {

            return false

        }
        else {

            return true;
        }
    }

    const registerin = () => {

        if (email !== '' && pass !== ''&& firstname !== ''&& lastname !== '' ) {
                Alert.alert("Registered Succefully "+firstname)
            


        }
        else {
            Alert.alert("Inputs can't be emplty")
        }
    }

    return (
        <SafeAreaView style={styles.root}>

            <Image
                style={[styles.logo, { height: height * 0.08 }]}
                source={Logo}

                resizeMode="contain"
            />
            <View style={{ width: "100%", }}>
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    label="First Name"
                    value={firstname}
                    outlineColor="black"
                    activeOutlineColor="red"
                    selectionColor='red'
                    onChangeText={setFirst}




                // left={<TextInput.Affix text="/100" />}
                />
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    label="Last Name"
                    value={lastname}
                    outlineColor="black"
                    activeOutlineColor="red"
                    selectionColor='red'
                    onChangeText={setLast}




                // left={<TextInput.Affix text="/100" />}
                />



                <TextInput
                    style={styles.input}
                    mode="outlined"
                    label="Email"
                    value={email}
                    outlineColor="black"
                    activeOutlineColor="red"
                    selectionColor='red'
                    onChangeText={setEmail}




                // left={<TextInput.Affix text="/100" />}
                />

                <TextInput
                    style={styles.input}
                    mode="outlined"
                    label="Password must contain 6 letters"
                    value={pass}
                    outlineColor="red"
                    selectionColor='red'
                    activeOutlineColor='red'
                    onChangeText={setPass}
                    secureTextEntry={passwordVisible}

                    right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}


                />

                <Button mode="contained"
                    style={{ backgroundColor: "red", marginVertical: 10 }}
                    onPress={registerin}>

                    Register
                </Button>
                <TouchableWithoutFeedback onPress={() => { navigation.navigate("login") }}>
                    <View style={{ alignItems: 'center' }} onPress={() => { Alert.alert("go to next"); }}>

                        <Text>Have An Account?

                            <Text style={{ color: "red" }}>Login</Text>

                        </Text>

                    </View>
                </TouchableWithoutFeedback>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 14
    },
    logo: {
        width: "40%",
        marginTop: "12%",
        backgroundColor: "black"

    },
    root: {
        alignItems: 'center',
        justifyContent: "center",

        padding: 20
    }
})