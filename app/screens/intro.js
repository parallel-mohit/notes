import { View, Text, StyleSheet, TextInput, Dimensions, StatusBar } from 'react-native'
import colors from '../misc/colors'
import RoundIconbtn from '../components/RoundIconbtn'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default intro = ({onfinish}) => {
    let [name,setName] = useState('')
    
    let handleSubmit = async () => {
        let user ={name: name}
       await AsyncStorage.setItem('user_Name',JSON.stringify(user))
       if(onfinish) onfinish()
    }
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Text style={styles.inputTitle}>Enter your name to continue</Text>
            <TextInput  style={styles.TextInput} placeholder='Enter Name Here' onChangeText={(text)=>setName(text)} />
            {
                name.trim().length>3 ? <RoundIconbtn name={'arrowright'} color={'#dbb2ff'} size={20} onPress={handleSubmit} />:null
                
            }
        </View>
    )
}
let width = Dimensions.get('window').width - 50

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextInput: {
        borderColor: '#dbb2ff',
        borderRadius: 10,
        borderWidth: 2,
        color: '#dbb2ff',
        fontSize: 25,
        width,
        height: 50,
        paddingTop:2,paddingLeft
        :1
    },
    inputTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 26,
        marginBottom: 5,
        opacity: .5,
    }
})