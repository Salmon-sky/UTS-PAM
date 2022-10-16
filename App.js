import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Layar1 from './Layar1';
import Layar2 from './Layar2';


const Stack = createNativeStackNavigator();

export default function App ( { navigation } ) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name= 'Layar1' component={Layar1} options={{headerShown:false}}/>
          <Stack.Screen name= 'Layar2' component={Layar2} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'pink',
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    margin:20,
    flex:0,
    width: "155%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
});