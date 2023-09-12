import { View, Text, StyleSheet } from 'react-native'
import Intro from './app/screens/intro'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Notes_Screen from './app/screens/Notes_Screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NoteDetail from './app/components/NoteDetail'
import NoteProvider from './app/context/NoteProvider'

let Stack = createNativeStackNavigator();
export default App = () => {
  let [user, setUser] = useState('')
  let findUser = async () => {
    let result = await AsyncStorage.getItem('user_Name')

    result = JSON.parse(result)

    if (result != null) {
      setUser(result.name)
    }
  }
  useEffect(() => {
    // AsyncStorage.clear()

    findUser()
  }, []
  )
  let RenderNotesScreen = (props) => <Notes_Screen {...props} user={user} />

  if (user === '') return <Intro onfinish={findUser} />;

  return(
  <NavigationContainer>
    <NoteProvider>
      <Stack.Navigator screenOptions={{ headerTitle: '', headerTransparent: true }} >
        <Stack.Screen name='notes_screen' component={RenderNotesScreen} />
        <Stack.Screen name='NoteDetail' component={NoteDetail} options={{}} />
      </Stack.Navigator>
    </NoteProvider>
  </NavigationContainer>
  )


}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
})