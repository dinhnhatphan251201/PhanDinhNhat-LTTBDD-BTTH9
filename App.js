import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import icon from "./assets/donut_red.png";
import Bai1 from "./Bai1";

export default function App() {
    return (
        <View style={styles.container}>
            <Bai1 />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
