import React from 'react';
import { View , Text , ScrollView , StyleSheet  } from 'react-native'

function Headings(props) {
    return (
        <Text style={styles.container}> {props.name}</Text>
    );
}
const styles = StyleSheet.create({
    container: {
        fontSize : 20 ,
        color : 'white'
        
        

    }
})

export default Headings;