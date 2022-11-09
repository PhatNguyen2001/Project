import React from 'react';
import {View , Home } from 'react-native'

function Home(props) {
    const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

export default Home;