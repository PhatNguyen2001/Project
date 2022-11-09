import React from 'react';
import { View , Text , ScrollView , StyleSheet , TextInput } from 'react-native'

function Input( {onChangeText,name,secureTextEntry} ) {
    
  
    return (
       <View style={styles.containner}>
            <Text style={styles.text}> {name} </Text>
            <TextInput  
            style={styles.textinput}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            />
       </View>      
    );
}
const styles = StyleSheet.create({
    containner :{ 
        padding :20
    },
    text :{
        fontSize :14 , 
    },
    textinput :{
        borderColor : 'orange' ,
        borderWidth : 1.5 ,
        marginTop : 10 , 
        fontSize : 20, 
        borderRadius : 10
    }
})
export default Input;