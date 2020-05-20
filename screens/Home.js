import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';
const Home = ({ navigation }) => {
  const data = [
    { id: 1, name: 'mukesh', position: 'Web dev' },
    { id: 2, name: 'kirin', position: 'Android dev' },
    { id: 3, name: 'ashton cox', position: 'IOS dev' },
    { id: 4, name: 'halo', position: 'Desktop dev' },
    // { id: 5, name: 'dao', position: 'Android dev' },
    // { id: 6, name: 'bich', position: 'Web dev' },
    // { id: 7, name: 'quynh', position: 'Web dev' },
    // { id: 8, name: 'name', position: 'Android dev' },
    // { id: 9, name: 'hung', position: 'Android dev' },
  ];
  const renderList = (item) => {
    return (
      <Card style={styles.mycard}>
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
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={(item) => {
          return renderList(item.item);
        }}
        keyExtractor={(item) => `${item.id}`}
      />
      <FAB
        onPress={() => navigation.navigate('Create')}
        style={styles.fab}
        small
        icon='plus'
        theme={{ colors: { accent: '#066aff' } }}
      />
    </View>
  );
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default Home;
