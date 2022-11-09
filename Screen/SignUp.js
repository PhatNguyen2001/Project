import React from 'react';
import { View , Text , ScrollView , StyleSheet } from 'react-native';
import Input from './Input' ;
import Buttons from './Buttons'

function SignUp(props) {
    return (
        <View style={styles.container}> 
            <Input name="Address"/>
            <Input name="State" />
            <Input name="Your Phone" />
            <Buttons name="Register"/>    
        </View> 
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex :1 ,
        // justifyContent : 'center',
        // alignItems : 'center', 
        top : '13%' ,

    }
})
export default SignUp;