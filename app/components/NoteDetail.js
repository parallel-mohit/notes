import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, StyleSheet, TextInput, ScrollView, Alert } from 'react-native'
import { useNotes } from '../context/NoteProvider'
import { useState } from 'react'

export default NoteDetail = props => {
    let { setNotes } = useNotes()
    let [title, setTitle] = useState(props.route.params.note.title)
    let [desc, setDesc] = useState(props.route.params.note.desc)
   
    let DisplayDeleteAlert = () => {
        Alert.alert('Are You Sure!', 'This action will delete your note permanently', [
            {
                text: 'Delete',
                onPress: handleDelete
            }, {
                text: 'No Thanks',

            }
        ])
    }
    let handleUpdate = async (title, desc, time) => {
        console.log(title, desc, time)
        let result=await AsyncStorage.getItem(('notes'))
        let notes = []
        if (result !== null) notes = JSON.parse(result)
        let newNotes=notes.filter(n => {
            if (n.id === props.route.params.note.id) {
                n.title = title
                n.desc = desc
                n.time = time
                
            }
            return n;
        })
        
        await AsyncStorage.setItem('notes',JSON.stringify(newNotes))
        setNotes(newNotes)
        props.navigation.goBack()

    }

    let handleDelete = async () => {
        let result = await AsyncStorage.getItem('notes')
        let notes = []
        if (result !== null) notes = JSON.parse(result)
        let newNotes = notes.filter(n => n.id !== props.route.params.note.id)
        await AsyncStorage.setItem('notes', JSON.stringify(newNotes))
        setNotes(newNotes)
        props.navigation.goBack()
    }
    return (
        <ScrollView style={styles.container}>
            <TextInput placeholder='Enter Title' style={[styles.input, styles.inputTitle]}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <TextInput placeholder='Enter Desc' multiline style={[styles.input, styles.inputDesc]}
                value={desc}
                onChangeText={(text) => setDesc(text)}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                <RoundIconbtn name={'check'} color={'orange'} size={24} onPress={() => handleUpdate(title, desc, Date.now())} />
                <RoundIconbtn name={'close'} color={'orange'} size={24} style={{ marginLeft: 17 }} onPress={() => props.navigation.goBack()} />
                <RoundIconbtn name={'delete'} color={'orange'} size={24} style={{ marginLeft: 17 }} onPress={DisplayDeleteAlert} />
            </View>

        </ScrollView>
    )
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 90,
        paddingHorizontal: 20,

    },
    inputTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 58,
        marginTop: 30
    },
    inputDesc: {},
    input: {
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2,

    },
})