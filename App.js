import { View, Text, StyleSheet } from 'react-native'
import Intro from './app/screens/intro'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Notes_Screen from './app/screens/Notes_Screen'

export default App = () => {
  let [user, setUser] = useState('')
  let findUser = async () => {
    let result = await AsyncStorage.getItem('user_Name')
    result = JSON.parse(result)
    if (result != null) {
      setUser(result)
    }
  }
  useEffect(() => {
    // AsyncStorage.clear(), []
    findUser(),[]
  }
  )
  if (!user.name) return <Intro  />;

  return <Notes_Screen user={user} />

}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
})