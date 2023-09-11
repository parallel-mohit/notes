import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, StyleSheet, TextInput, ScrollView, Alert } from 'react-native'

export default NoteDetail = (props) => {
    let {note}=props.route.params
   console.log(note)
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

    let handleDelete = async () => {
        let result = await AsyncStorage.getItem('notes')
        let notes = []
        if (result !== null) notes = JSON.parse(result)
        let newNotes = notes.filter(n => n.id !== note.id)
        await AsyncStorage.setItem('notes', JSON.stringify(newNotes))
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
                <RoundIconbtn name={'check'} color={'orange'} size={24} />
                <RoundIconbtn name={'close'} color={'orange'} size={24} style={{ marginLeft: 17 }} />
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