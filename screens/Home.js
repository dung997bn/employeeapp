import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import moduleName, { Card } from 'react-native-paper';
const Home = () => {
  const data = [
    { id: 1, name: 'mukesh', position: 'Web dev' },
    { id: 2, name: 'kirin', position: 'Android dev' },
    { id: 3, name: 'ashton cox', position: 'IOS dev' },
    { id: 4, name: 'halo', position: 'Desktop dev' },
  ];
  const renderList = data.map((item) => {
    return (
      <Card style={styles.mycard} key={item.id}>
        <View style={styles.cardView}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 30 }}
            source={require('../assets/aziz.jpg')}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  });
  return <View>{renderList}</View>;
};
const styles = StyleSheet.create({
  mycard: {
    margin: 5,
  },
  cardView: {
    flexDirection: 'row',
    padding: 6,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
  },
});
export default Home;
