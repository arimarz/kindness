// TODO:
//  - Refine styling (spacing, label text, centering)
//  - Add onSubmit logic.

import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/native';

function Login() {
    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: (values) => console.log(values)
    })

    return (
        <View style={styles.container}>
            <Pressable style={styles.menuButton} onPress={() => navigation.toggleDrawer()}>
                <Text style={styles.menuIcon}>☰</Text>
            </Pressable>
            <Text style={styles.title}>Login</Text>
            <View>
                <View>
                    <Text aria-label="Label for Username" nativeID="labelUsername">Username</Text>
                    <TextInput style={styles.promptBack} id='username' name='username' onChange={formik.handleChange} value={formik.values.username}/>
                </View>
                <View>
                    <Text aria-label="Label for Password" nativeID="labelPassword">Password</Text>
                    <TextInput style={styles.promptBack} secureTextEntry={true} id='password' name ='password' onChange={formik.handleChange} value={formik.values.password}/>
                </View>
                
                <Pressable style={styles.promptButton} onPress={formik.handleSubmit}>
                  <Text style={styles.buttonText}>Log In</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F4EEA9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#ED6B86',
        fontWeight: 'bold',
        fontSize: 30,
    },
    promptButton: {
        backgroundColor: '#62BEC1',
        padding: 10,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    promptBack: {
        backgroundColor: '#fffff4',
        borderColor: '#62BEC1',
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dotted',
        padding: 10,
    },
    menuButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    menuIcon: {
        fontSize: 30,
        color: '#312F2F',
    },
})

export default Login;