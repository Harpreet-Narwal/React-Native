import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";


export default function Onboarding(){
    return <View className="flex-1 justify-center items-center">
        <Text>Welcome to Onboarding</Text>
        <Link href={"/(auth)/signin"} className=" mt-4 rounded-md bg-primary text-white p-4">Sign In</Link>
    </View>
}