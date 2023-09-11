import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

export default Note = ({ item,navigation }) => {
    
    let { title, desc } = item;
    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('noteDetail',{item})} navigation={navigation}>
            <Text style={[styles.notesContainer,styles.titleText]} numberOfLines={1}>{title}</Text>
            <Text numberOfLines={3} style={styles.descText}>{desc}</Text>
        </TouchableOpacity>
    )
}
let width=Dimensions.get('window').width-40
let styles = StyleSheet.create({
    container: {
        
        margin: 10,
        width:width/2,
        backgroundColor: 'orange',
        borderRadius: 10,
        padding: 10,
        
    },
    notesContainer: {

    },
    titleText:{
        fontWeight:'bold',
        fontSize:24,
        color:'white',
        opacity:0.6,
        paddingBottom:10
    },descText:{
       
        fontSize:22,
        paddingBottom:10
       
    }

})