import { createContext, useContext, useEffect,useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

let NoteContext = createContext();
export default NoteProvider = ({ children }) => {
    let [notes, setNotes] = useState([])
    let findNotes = async () => {

        let result = await AsyncStorage.getItem('notes')
        console.log("we are i rult" + result)
        if (result !== null) setNotes(JSON.parse(result))
    }
    useEffect(() => {
        // AsyncStorage.clear()/
        findNotes()
    }, [])
    return (
        <NoteContext.Provider value={{ notes, setNotes, findNotes }}>
            {children}
        </NoteContext.Provider>

    )
}
export let useNotes = () => useContext(NoteContext)
