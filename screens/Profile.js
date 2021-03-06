import React from "react";
import { StyleSheet, View, Text, Image, Linking, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

export const Profile = (props) => {
  const {
    id,
    name,
    email,
    phone,
    picture,
    position,
    salary,
  } = props.route.params.item;

  const openDial = (phone) => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${phone}`);
    } else {
      Linking.openURL(`telprompt:${phone}`);
    }
  };
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#0033ff", "#6bc1ff"]}
        style={{ height: "20%" }}
      />
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 140,
            height: 140,
            borderRadius: 140 / 2,
            marginTop: -50,
          }}
          source={require(`../assets/aziz.jpg`)}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 2 }}>
        <Title style={{ fontSize: 22 }}>{name}</Title>
        <Title style={{ fontSize: 15 }}>{position}</Title>
      </View>

      <Card
        style={styles.myCard}
        onPress={() => {
          Linking.openURL(`mailto:${email}`);
        }}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color="#b8e6ff" />
          <Text style={styles.myText}>{email}</Text>
        </View>
      </Card>

      <Card
        style={styles.myCard}
        onPress={() => {
          openDial({ phone });
        }}
      >
        <View style={styles.cardContent}>
          <Entypo name="phone" size={32} color="#b8e6ff" />
          <Text style={styles.myText}>{phone}</Text>
        </View>
      </Card>

      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={32} color="#b8e6ff" />
          <Text style={styles.myText}>{salary}</Text>
        </View>
      </Card>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 5,
        }}
      >
        <Button
          icon="account-edit"
          mode="contained"
          style={styles.inputStyles}
          theme={theme}
          onPress={() => setModal(false)}
        >
          Edit
        </Button>
        <Button
          icon="delete"
          mode="contained"
          style={styles.inputStyles}
          theme={theme}
          onPress={() => setModal(false)}
        >
          Fire Employee
        </Button>
      </View>
    </View>
  );
};

const theme = {
  colors: {
    primary: "#066aff",
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  myCard: {
    margin: 3,
  },
  cardContent: {
    flexDirection: "row",
    padding: 8,
  },
  myText: {
    fontSize: 18,
    marginTop: 3,
    marginLeft: 5,
  },
});

export default Profile;
