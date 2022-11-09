import React ,  {useState} from 'react';

import { View , Text , ScrollView , StyleSheet , TouchableHighlight } from 'react-native';
import Input from './Input' ;
import Buttons from './Buttons';
import { Link } from '@react-navigation/native';
import Headings from './Headings';

function SignIn(onPress) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <View style={styles.container}> 
            {/* <View style={styles.containHeader}> 
            <Headings name = "Sign In" />
            </View> */}
            <View style={styles.main}> 
                <Input name="Your Email" value={email} onChangeText={setEmail} secureTextEntry={false}/>
                <Input  name="Password" value={password} onChangeText={setPassword} secureTextEntry={true}/>
                <Buttons name="Sign in" onPress={() => signIn({ username, password })}/>
                <View style = {styles.containText}> 
                    <TouchableHighlight
                        onPress={() => this.submitSuggestion(this.props)}
                        underlayColor='#fff'>
                        <Text style={styles.containText}><Text>Forgot your Password ?</Text> </Text>
                    </TouchableHighlight>
                </View> 
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex :1 , 
        
        //  justifyContent: 'center' , 
        //  alignItems : 'center' , 
    },
    containText :{
        marginTop : 25 , 
        alignItems : 'center' ,
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    containHeader: {
        height : 50 , 
        backgroundColor : 'orange' , 
        width :'100%',
        justifyContent :'center' ,
        alignItems :'center' ,
        justifyContent :'center' ,
    },
    main:{
        // alignItems :'center', 
        flex :1 ,
        justifyContent:'center' ,
    }
    
})

export default SignIn;