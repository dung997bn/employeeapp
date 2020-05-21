import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

const CreateEmployee = () => {
  const [Name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);

  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      console.log(data);
    } else {
      Alert.alert("you need to give up permission to work");
    }
  };

  const pickFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      console.log(data);
    } else {
      Alert.alert("you need to give up permission to work");
    }
  };

  return (
    <View style={styles.root}>
      <TextInput
        label="Name"
        value={Name}
        style={styles.inputStyles}
        onChangeText={(text) => this.setName(text)}
        mode="outlined"
        theme={theme}
      />
      <TextInput
        label="Email"
        value={email}
        style={styles.inputStyles}
        onChangeText={(text) => this.setEmail(text)}
        mode="outlined"
        theme={theme}
      />
      <TextInput
        label="Phone"
        value={phone}
        style={styles.inputStyles}
        keyboardType="number-pad"
        onChangeText={(text) => this.setPhone(text)}
        mode="outlined"
        theme={theme}
      />
      <TextInput
        label="Salary"
        value={salary}
        style={styles.inputStyles}
        onChangeText={(text) => this.setSalary(text)}
        mode="outlined"
        theme={theme}
      />
      <Button
        icon="camera"
        mode="contained"
        theme={theme}
        style={styles.inputStyles}
        onPress={() => setModal(true)}
      >
        Upload Image
      </Button>
      <Button
        icon="content-save"
        mode="contained"
        theme={theme}
        style={styles.inputStyles}
        onPress={() => console.log("save")}
      >
        Save
      </Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose
      >
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <Button
              icon="camera"
              style={styles.inputStyles}
              mode="contained"
              onPress={() => pickFromCamera()}
            >
              Camera
            </Button>
            <Button
              icon="image-area"
              mode="contained"
              style={styles.inputStyles}
              onPress={() => pickFromGallery()}
            >
              Gallery
            </Button>
          </View>
          <Button onPress={() => setModal(false)}>Cancel</Button>
        </View>
      </Modal>
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
  inputStyles: {
    margin: 5,
  },
  modalButtonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  modalView: {
    position: "absolute",
    bottom: 2,
    width: "100%",
    backgroundColor: "#b8e6ff",
  },
});

export default CreateEmployee;
