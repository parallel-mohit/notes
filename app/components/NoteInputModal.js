import { View, Text, StyleSheet, Modal, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import RoundIconbtn from './RoundIconbtn'
import { useState } from 'react'

export default NoteInputModal = ({ visible ,onClose,onsubmit}) => {
    let [title,setTitle]=useState('')
    let [desc,setDesc] =useState('')
    let handleSubmit=()=>{
        if(!title.trim() && (!desc.trim())) {
            return onClose()
        }
        onsubmit(title,desc)
        setTitle('')
        setDesc('')
        onClose()
    }
    function handleOnClose(){
        setTitle('')
        setDesc('')
        onClose()
    }
    return (
        <View style={styles.container}>
            <Modal visible={visible} animationType='fade'>
                <TextInput placeholder='Enter Title' style={[styles.input, styles.inputTitle]} 
                value={title}
                    onChangeText={(text)=>setTitle(text)}                
                />
                <TextInput placeholder='Enter Desc' multiline style={[styles.input, styles.inputDesc]}
                value={desc}
                    onChangeText={(text)=>setDesc(text)}
                />
                <View style={{flexDirection:'row',justifyContent:'center'}} >
                <RoundIconbtn name={'check'} color={'orange'} size={24} onPress={handleSubmit}/>
                <RoundIconbtn name={'close'} color={'orange'} size={24} style={{marginLeft:17}} onPress={handleOnClose}/>
                </View>
            </Modal>
            {/* <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                <View  style={[{backgroundColor:'red'},]}/>
            </TouchableWithoutFeedback> */}
        </View>
    )
}

let styles = StyleSheet.create({
    container: {flex:1},
    inputTitle: {
        fontSize:26,
        fontWeight:'bold',
        marginBottom:58,
        marginTop:30
    },
    inputDesc: {},
    input: {
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        
    },

})