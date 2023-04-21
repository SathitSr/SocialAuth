import { View, Text, Pressable, Image } from "react-native";
import AuthenButton from "../../component/AuthenButton";

const Home = () => {
  const GoogleAuth = () => {
    console.log("google");
  };
  const FacebookAuth = () => {
    console.log("facebook");
  };
  const AppleAuth = () => {
    console.log("apple");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <AuthenButton
        imageURI="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
        title="Google"
        action={GoogleAuth}
      />
      <AuthenButton
        imageURI="https://i.pinimg.com/originals/ce/d6/6e/ced66ecfc53814d71f8774789b55cc76.png"
        title="Facebook"
        action={FacebookAuth}
      />

      <AuthenButton
        imageURI="https://alchemyimmersive.com/wp-content/uploads/sites/4/2020/04/apple-logo-transparent.png"
        title="Apple"
        action={AppleAuth}
      />
    </View>
  );
};
export default Home;
