import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
export default function Screen3({ navigation, route }) {
  const [name, setName] = useState("")
  const [job, setJob] = useState("")
  const [isUpdate, setIsUpdate] = useState(false)

  useEffect(() => {
    setName(route.params.name)
  },[route.params.name])

  useEffect(() => {
      setJob(route.params.job)
      setIsUpdate(route.params.isUpdate)
  }, [JSON.stringify(route.params)])

  let pressBtnFinish = () => {
    navigation.navigate("Screen3", {job : {job : job, isChecked : false}})
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewAvatar}>
        <Pressable style={{  }} onPress={() => navigation.navigate('Screen2')}>      
          <Image
            source={require("../assets/BackIcon.png")}
            style={{width:40,height:40}}
          />
        </Pressable>
        <Image
          source={require("../assets/Avatar.png")}
          resizeMode="contain"
          style={{ height: 50, width: 50 }}
        ></Image>
        <View style={styles.viewTextAvatar}>
          <Text
            style={{
              width: 101,
              height: 30,
              marginLeft: 10,
              fontFamily: "Epilogue",
              fontSize: 20,
              fontWeight: 700,
              marginTop: 10,
            }}
          >
          Hi {name}
          </Text>
          <Text style={{marginLeft:10, marginTop: -5, fontSize: 14, fontWeight:700, color:"grey"}}>
            Have agrate day a head
          </Text>
        </View>
      </View>

      <Text
        style={{
          width: "80%",
          height: 48,
          fontFamily: "Epilogue",
          fontSize: 32,
          fontWeight: 700,
          textAlign: "center",
          marginTop: 30,
        }}
      >
        {isUpdate ? "EDIT YOUR JOB" : "ADD YOUR JOB"}
      </Text>

      <View style={styles.viewInputJob}>
        <Image
          source={require("../assets/InputIcon.png")}
          style={{ width: 20, height: 20, marginLeft: -100 }}
        ></Image>
        <TextInput
          placeholder="input your job"
          style={{ marginLeft: 10 }}
          value={job}
          onChangeText={setJob}
        ></TextInput>
      </View>
      <Pressable style={styles.btn} onPress={pressBtnFinish}>
        <Text style={{fontSize:20, fontWeight:700, color:"#fff"}}>FINISH</Text>
      </Pressable>
      <Image
        source={require("../assets/PenNote.png")}
        style={{ width: 190, height: 170, marginTop: 50 }}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  btn: {
    marginTop: 40,
    width: 190,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BDD6",
    color: "white",
    borderRadius: 15,
  },
  viewAvatar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 100,
  },
  viewInputJob: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "grey",
    width: 310,
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});