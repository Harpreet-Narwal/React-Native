import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Signin(){
    return <View>
        <Text>Welcome to Sign Up</Text>
        <Link href={"/(auth)/sign-up"}>Sign Up</Link>
    </View>
}