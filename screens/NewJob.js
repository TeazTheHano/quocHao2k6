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

function NewJob({ navigation }) {
    const { currentUser } = DATA();

    const [KTnghe, setKTnghe] = React.useState(false);
    const [KTnhin, setKTnhin] = React.useState(false);
    const [KTvandong, setKTvandong] = React.useState(false);
    const [KTtritue, setKTtritue] = React.useState(false);
    const [KTthankinh, setKTthankinh] = React.useState(false);
    const [KTkhac, setKTkhac] = React.useState(false);


    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: colorStyle.white }]}>
            <StatusBar translucent backgroundColor={colorStyle.white} barStyle="dark-content" />
            <ScrollView style={[styles.positionRelative, styles.marginVertical6vw, styles.flex1]}>
                <View style={[styles.flexRow, styles.alignItemsCenter, styles.borderRadius16, styles.wfit, styles.positionAbsolute, { zIndex: 1, gap: vw(2.5), paddingVertical: vw(2.5), paddingHorizontal: vw(5), backgroundColor: colorStyle.blue1, marginLeft: vw(6.5) }]}>
                    <Text style={[componentStyle.Os20Bold, { color: colorStyle.tan1, }]}>Bộ lọc thông minh</Text>
                </View>
                <View style={[styles.w100, styles.flex1, { borderTopLeftRadius: vw(7.5), borderTopWidth: vw(0.5), borderColor: colorStyle.blue1, borderLeftWidth: 1, top: vw(8), paddingHorizontal: vw(7.5), }]}>
                    <View style={{ marginTop: vw(5), }}>
                        <View style={{ paddingHorizontal: vw(2.5) }}><Text style={[componentStyle.Os20Bold, { color: colorStyle.blue4 }]}>Dạng tật:</Text></View>
                        <View style={[styles.flexRow, styles.flexWrap, styles.flex1, styles.shadowW0H025Color, { paddingHorizontal: vw(1.5), paddingBottom: vw(4), gap: vw(2.5), marginTop: vw(4), rowGap: vw(2.5), backgroundColor: colorStyle.white, borderBottomEndRadius: vw(4) }]}>
                            <TouchableOpacity
                                onPress={() => { setKTnghe(!KTnghe) }}
                                style={{ borderWidth: vw(0.25), borderRadius: vw(1), borderColor: colorStyle.grey, paddingHorizontal: vw(2.5), paddingVertical: vw(1), backgroundColor: KTnghe ? colorStyle.blue1 : null }}><Text style={[!KTnghe ? componentStyle.Mon12Reg : componentStyle.Mon12Bold, { color: KTnghe ? colorStyle.tan1 : colorStyle.black }]}>KT nghe</Text></TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { setKTnhin(!KTnhin) }}
                                style={{ borderWidth: vw(0.25), borderRadius: vw(1), borderColor: colorStyle.grey, paddingHorizontal: vw(2.5), paddingVertical: vw(1), backgroundColor: KTnhin ? colorStyle.blue1 : null }}><Text style={[!KTnhin ? componentStyle.Mon12Reg : componentStyle.Mon12Bold, { color: KTnhin ? colorStyle.tan1 : colorStyle.black }]}>KT nhìn</Text></TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { setKTvandong(!KTvandong) }}
                                style={{ borderWidth: vw(0.25), borderRadius: vw(1), borderColor: colorStyle.grey, paddingHorizontal: vw(2.5), paddingVertical: vw(1), backgroundColor: KTvandong ? colorStyle.blue1 : null }}><Text style={[!KTvandong ? componentStyle.Mon12Reg : componentStyle.Mon12Bold, { color: KTvandong ? colorStyle.tan1 : colorStyle.black }]}>KT vận động</Text></TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { setKTtritue(!KTtritue) }}
                                style={{ borderWidth: vw(0.25), borderRadius: vw(1), borderColor: colorStyle.grey, paddingHorizontal: vw(2.5), paddingVertical: vw(1), backgroundColor: KTtritue ? colorStyle.blue1 : null }}><Text style={[!KTtritue ? componentStyle.Mon12Reg : componentStyle.Mon12Bold, { color: KTtritue ? colorStyle.tan1 : colorStyle.black }]}>KT trí tuệ</Text></TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { setKTthankinh(!KTthankinh) }}
                                style={{ borderWidth: vw(0.25), borderRadius: vw(1), borderColor: colorStyle.grey, paddingHorizontal: vw(2.5), paddingVertical: vw(1), backgroundColor: KTthankinh ? colorStyle.blue1 : null }}><Text style={[!KTthankinh ? componentStyle.Mon12Reg : componentStyle.Mon12Bold, { color: KTthankinh ? colorStyle.tan1 : colorStyle.black }]}>KT thần kinh</Text></TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { setKTkhac(!KTkhac) }}
                                style={{ borderWidth: vw(0.25), borderRadius: vw(1), borderColor: colorStyle.grey, paddingHorizontal: vw(2.5), paddingVertical: vw(1), backgroundColor: KTkhac ? colorStyle.blue1 : null }}><Text style={[!KTkhac ? componentStyle.Mon12Reg : componentStyle.Mon12Bold, { color: KTkhac ? colorStyle.tan1 : colorStyle.black }]}>KT khác</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}
export default NewJob;