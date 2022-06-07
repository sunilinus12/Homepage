import { View, Text, SafeAreaView, Image, StyleSheet, useWindowDimensions, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Logo from "../images/logo.png"
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

export default function Login({navigation}) {

    const { height } = useWindowDimensions();
    const [email, setEmail] = React.useState('');
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
   
    const signin = () => {

        if (email !== '' && pass !== '') {
            if (validate(email)) {
                if (email === 'linus@gmail.com' && pass === 'linus') {
                    Alert.alert("Login Sucessfull");
                }
                else {
                    Alert.alert("Invalid Password or Email");
                }
            }
            else {
                Alert.alert("invalid email")
            }


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

                <Button  mode="contained"
                    style={{ backgroundColor: "red" ,marginVertical:10 }}
                    onPress={signin}>

                    Login
                </Button>
                <View style={{alignItems:'center'}} onPress={()=>{Alert.alert("go to next");}}>
                    <Text>Having Trouble? <Text style={{color:"red"}}>Reset your password</Text></Text>
                </View>
                <Button  mode="outlined"
                    color='red'
                    style={{borderColor:"red",marginTop:"70%"}}
                    onPress={()=>{navigation.navigate("Register")}}>
                    
                  <Text style={{fontSize:8 ,fontWeight:"400",textTransform:'none',color:"gray",letterSpacing:0.3}}>Don't have an account?</Text>  REGISTER
                </Button>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 10
    },
    logo: {
        width: "40%",
        marginTop: "30%",
        backgroundColor: "black"

    },
    root: {
        alignItems: 'center',
        justifyContent: "center",

        padding: 20
    }
})