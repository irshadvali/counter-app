import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
const Counter = () => {
    const [count, setCount] = useState(0);
   return (
        <View>
           <Button
             onPress={() => {setCount(count + 1)}} title="Increment"
           />
           <View style={{width: '100%', marginTop: 10}}/>
           <Button
             onPress={() => {setCount(count - 1)}} title="Decrement"
           />
            <View style={{width: '100%', marginTop: 10}}/>
           <Button
             onPress={() => {setCount(0)}} title="Reset"
           />
            <View style={{width: '100%', marginTop: 10}}/>
           <Text>You clicked me {count} times</Text>
       </View>
   );
}
export default Counter;