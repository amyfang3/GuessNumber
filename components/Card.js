import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  // Gives ability to add additional styles from outside the Card component
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black', // iOS shadow
    shadowOffset: { width: 0, height: 2 }, // iOS shadow
    shadowRadius: 6, // iOS shadow
    shadowOpacity: 0.26, // iOS shadow
    elevation: 5, // Android shadow
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
