import { View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default RoundIconbtn = ({ name, size, color, onPress, style }) => {
    return <AntDesign name={name} color={color || 'black'} size={size || 24}
        style={[styles.icon, { ...style }]}
        onPress={onPress} />
}

let styles = StyleSheet.create({
    container: {},
    icon: { height: 50, width: 50, borderRadius: 40, backgroundColor: 'black', padding: 14, marginTop: 10, elevation: 5 }
})