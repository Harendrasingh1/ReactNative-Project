import React, { createContext, useState } from 'react';
import { Text, View } from 'react-native';
import { FruitChild } from './FruitChild';

export const FruitContext = createContext();

const FruitParent = () => {
  const [apple, setApple] = useState(0);
  const [banana, setBanana] = useState(0);

  const totalSum = 5;

  const addApple = () => {
    if (apple + banana >= totalSum) {
      if (banana > 0) {
        setBanana(banana - 1);
        setApple(apple + 1);
      }
    } else if (totalSum === 5 && apple === 5) {
        setApple(5);
      } else {
        setApple(apple + 1);
      }
  };
  const addBanana = () => {
    console.log('before setBanana',banana);
    if (apple + banana >= totalSum) {
      if (apple > 0) {
        setApple(apple - 1);
        setBanana(banana + 1);
      }} else if (totalSum === 5 && banana === 5) {
        setBanana(5);
      } else {
        setBanana(banana + 1);
      }
      console.log('after setBanana',banana);
  };
  console.log('outside add function setBanana',banana);

  return (
    <FruitContext.Provider value={{ addApple, addBanana }}>
      <View>
        <Text
          style={{
            backgroundColor: 'white',
            padding: 10,
            color: 'pink',
            fontSize: 25,
          }}
        >
          {' '}
          Apple: {apple}{' '}
        </Text>
        <Text
          style={{
            backgroundColor: 'white',
            padding: 10,
            color: 'yellow',
            fontSize: 25,
          }}
        >
          {' '}
          Banana: {banana}{' '}
        </Text>
        <FruitChild />
      </View>
    </FruitContext.Provider>
  );
};

export default FruitParent;
