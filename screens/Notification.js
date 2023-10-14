import { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, StatusBar, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { vw, vh, vmax, vmin } from "react-native-expo-viewport-units";
import componentStyle from "../assets/componentStyleSheet";
import styles from "../assets/stylesheet";
import { gradientRectangle, jobNews1, marginBottomForScrollView, mostCompany, searchNav, suitableJob } from "../assets/component";
import { editable, heartDouble } from "../assets/svgXml";
import DATA from "../assets/DATA";

function Notification({ navigation }) {
    const { currentUser } = DATA();
    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: colorStyle.white }]}>
            <StatusBar translucent backgroundColor={colorStyle.white} barStyle="dark-content" />

        </SafeAreaView>
    )
}
export default Notification;