import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";
const Home = ({ navigation }) => {
  const data = [
    {
      id: "1",
      name: "mukesh",
      salary: "45 lpa",
      email: "mukesh@gmail.com",
      phone: "0987453643",
      picture: "erik",
      position: "Web dev",
    },
    {
      id: "2",
      name: "kirin",
      position: "Android dev",
      salary: "35 lpa",
      email: "kirin@gmail.com",
      phone: "0987453643",
      picture: "aziz",
    },
    {
      id: "3",
      name: "ashton cox",
      position: "IOS dev",
      salary: "15 lpa",
      email: "ashton@gmail.com",
      phone: "0987453643",
      picture: "hafiz",
    },
    {
      id: "4",
      name: "halo",
      position: "Desktop dev",
      salary: "25 lpa",
      email: "halo@gmail.com",
      phone: "0987453643",
      picture: "christian",
    },
  ];
  const renderList = (item) => {
    return (
      <Card
        style={styles.mycard}
        onPress={() => navigation.navigate("Profile", { item })}
      >
        <View style={styles.cardView}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 30 }}
            source={require("../assets/aziz.jpg")}
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
        keyExtractor={(item) => item.id}
      />
      <FAB
        onPress={() => navigation.navigate("Create")}
        style={styles.fab}
        small
        icon="plus"
        theme={{ colors: { accent: "#066aff" } }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mycard: {
    margin: 5,
  },
  cardView: {
    flexDirection: "row",
    padding: 6,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default Home;
