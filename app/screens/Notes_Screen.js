import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import RoundIconbtn from '../components/RoundIconbtn'

export default Notes_Screen = ({ user }) => {
    let [greet, setGreet] = useState('Evening')
    function onPress() {

    }
    function greetEvent() {
        let hrs = new Date().getHours();
        if (hrs === 0 || hrs < 12) return setGreet('Morning')
        else if (hrs === 1 || hrs < 17) return setGreet('Afternoon')
    }
    useEffect(() => {
        greetEvent()
    }, [])
    return (
        <>
            <StatusBar backgroundColor='orange' />
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Text style={styles.textIntro}>{`Good ${greet},`}</Text>
                    <Text style={styles.textIntroName}> {user.name} </Text>
                </View>
                <SearchBar />
                <View style={[StyleSheet.absoluteFillObject, styles.addNotesTextContainer]}>
                    <Text style={styles.addNotesText}>Add notes</Text>
                    <RoundIconbtn name={'plus'} color={'orange'} size={34} style={styles.addbtn} onPress={onPress} />
                </View>
            </View>
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