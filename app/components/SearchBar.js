import { View,  StyleSheet, TextInput } from 'react-native'

export default SearchBar  = () => {
return (
    <View style={styles.container}>
        <TextInput placeholder='search notes' style={styles.searchBox}/>
    </View>
    )
}

let styles = StyleSheet.create({
    container:{},
    searchBox:{
        width:'90%',
        borderColor:'black',
        borderWidth:2,
        height:40,
        marginTop:10,
        borderRadius:18,
        marginLeft:17,
        paddingLeft:4,
        paddingTop:4,
        marginBottom:10

    }
})