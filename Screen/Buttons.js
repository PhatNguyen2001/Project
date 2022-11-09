import React from 'react';
import { View , Text , ScrollView , StyleSheet , TextInput , Button , TouchableHighlight} from 'react-native'

function Buttons({onPress , name}) {
    
    return (
        <View style = {styles.container}> 
            <TouchableHighlight
                style={styles.submit}
                onPress={onPress}
                underlayColor='#fff'>
                <Text style={styles.submitText}> {name} </Text>
            </TouchableHighlight>

        </View>

        

    );
}

const styles = StyleSheet.create({
    submit:{
        overflow: 'hidden',
        marginTop:20,
        width : 160 ,
        height : 72 ,
    },
    submitText:{
        paddingTop:20,
        paddingBottom:20,
        color:'#fff',
        textAlign:'center',
        backgroundColor:'#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff' ,
        fontSize : 20 
    },
    container : {
        alignItems : 'center' , 
    }    
})

export default Buttons;