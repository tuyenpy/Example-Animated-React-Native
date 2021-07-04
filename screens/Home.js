import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core'

const Home = () => {
    let navigation = useNavigation();
    return <View>
        <Text>Home</Text>
        <Button title="Go to Setting" onPress={() => {
            navigation.navigate('Main2', {screen: "Setting"})
        }}/>
    </View>
}

export default Home;