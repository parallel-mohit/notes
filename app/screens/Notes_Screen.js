import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import SearchBar from '../components/SearchBar'
import RoundIconbtn from '../components/RoundIconbtn'
import NoteInputModal from '../components/NoteInputModal'
import Note from '../components/Note'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default Notes_Screen = ({ user,navigation }) => {
   let [notes,setNotes] =useState([])
    let [greet, setGreet] = useState('Evening')
    let [display,setDisplay] = useState(false)
    let onsubmit= async (title,desc)=> {
        let note={id:Date.now(),title,desc,time:Date.now()}
        let updatedNotes = [...notes,note]
        // console.log(note +"a")
        setNotes(updatedNotes)
        await AsyncStorage.setItem('notes',JSON.stringify(updatedNotes))

    }
    let findNotes = async ()=>{
       let result= await AsyncStorage.getItem('notes')
       console.log(result+'b')
       if(result !== null) setNotes(JSON.parse(result))
    }
    let onClose = () => {
        setDisplay(false)
    }
    function greetEvent() {
        let hrs = new Date().getHours();
        if (hrs === 0 || hrs < 12) return setGreet('Morning')
        else if (hrs === 1 || hrs < 17) return setGreet('Afternoon')
    }
    useEffect(() => {
        // AsyncStorage.clear()/
        findNotes()
        greetEvent()
    }, [])
    return (
        <>
            <StatusBar backgroundColor='orange' />
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Text style={styles.textIntro}>{`Good ${greet},`}</Text>
                    <Text style={styles.textIntroName}> {user} </Text>
                </View>
                <SearchBar />
                <FlatList 
                numColumns={2}
                data={notes} keyExtractor={item =>item.id.toString()}
                renderItem={({item})=><Note item={item} navigation={navigation} 
                 />}/>

                {
                    (!notes.length) ? <View style={[StyleSheet.absoluteFillObject, styles.addNotesTextContainer]}>
                    <Text style={styles.addNotesText}>Add notes</Text>
                    
                </View>:null
                }
                <RoundIconbtn name={'plus'} color={'orange'} size={34} style={styles.addbtn} onPress={()=>setDisplay(true)} />
            </View>
            {
           display? <NoteInputModal visible={display} onClose={onClose} onsubmit={onsubmit}/>:null
}
        </>
    )
}

let styles = StyleSheet.create({
    container: {
        marginTop: 44,
        marginLeft: 10,
        marginBottom: 2

    },
    textIntro: {
        fontSize: 23, fontStyle: 'italic',
        opacity: 0.9
    },
    textIntroName: {
        fontSize: 25, fontStyle: 'normal'
    },
    mainContainer: {
        flex: 1,

    },
    addNotesText: {
        fontSize: 35,
        fontWeight: 'bold',
        opacity: 0.5,

    },
    addNotesTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    addbtn: {
        position: 'absolute',
        bottom: 40,
        right: 17,
        width: 80,
        height: 80,
        textAlign: 'center',
        verticalAlign: 'middle'
    }
})