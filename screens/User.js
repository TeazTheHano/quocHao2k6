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

function User({ navigation }) {
    const { currentUser } = DATA();
    return (
        <SafeAreaView style={[styles.flex1, { backgroundColor: colorStyle.white }]}>
            <StatusBar   backgroundColor="transparent" barStyle="dark-content" />
            <LinearGradient
                colors={['#E2EAFF', '#FFE7AB']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ height: vh(100), position: 'absolute', left: 0, right: 0, top: 0, zIndex: -1 }}
            >
            </LinearGradient>

            <ScrollView style={[styles.flex1, styles.flexCol, styles.gap5vw, styles.w90, styles.alignSelfCenter]}>
                <View style={[styles.flexRow, styles.alignItemsCenter, styles.gap4vw, { paddingVertical: vw(2.75), paddingHorizontal: vw(4), borderRadius: vw(5), backgroundColor: colorStyle.white }]}>
                    <Image source={require('../assets/images/placeholder.jpg')} style={[{ width: vw(17.5), height: vw(17.5), borderRadius: vw(100), borderWidth: vw(0.5), borderColor: colorStyle.blue2 }]} />
                    <View style={[styles.flexCol, styles.gap2vw]}>
                        <Text style={[componentStyle.Os20Bold, { color: colorStyle.blue4, }]}>{currentUser.name}</Text>
                        <Text style={[componentStyle.Mon12Bold, { color: colorStyle.darkGray, }]}>{currentUser.id}</Text>
                        <Text style={[componentStyle.Mon10Reg, { color: colorStyle.darkGray, }]}>Tham gia từ: {currentUser.joinDate}</Text>
                    </View>
                </View>

                <View style={[styles.flexRow, styles.justifyContentSpaceBetween, styles.alignItemsCenter, { paddingVertical: vw(2.5) }]}>
                    <Text style={[componentStyle.Os20Bold, { color: colorStyle.blue4, }]}>Hồ sơ của bạn</Text>
                    <View style={[styles.flexRow, styles.justifyContentSpaceBetween, styles.alignItemsCenter,]}>
                        <Text style={[componentStyle.Mon10Bold, { color: colorStyle.black }]}>Chỉnh sửa hồ sơ</Text>
                        {editable(vw(6), vw(6))}
                    </View>
                </View>

                <View style={[styles.flexRow, { gap: vw(2), borderRadius: vw(5), borderWidth: vw(0.5), borderColor: colorStyle.blue4, paddingVertical: vw(4), paddingHorizontal: vw(5), backgroundColor: colorStyle.white }]}>
                    <View style={[styles.w60, styles.flexCol, styles.gap5vw,]}>
                        <Image source={currentUser.avatar} style={[styles.alignSelfCenter, { width: vw(25), height: vw(25), borderRadius: vw(2.5) }]} />
                        <Text style={[componentStyle.Os20Bold, styles.alignSelfCenter, { color: colorStyle.black, }]}>{currentUser.name}</Text>
                        <Text style={[componentStyle.Mon12Bold, { color: colorStyle.grey }]}>{currentUser.intro}</Text>
                        <Text style={[componentStyle.Os20Bold, { color: colorStyle.blue4, }]}>Kinh nghiệm làm việc</Text>
                        {currentUser.exp.map((item, index) => {
                            return (
                                <View key={index}>
                                    <Text style={[componentStyle.Mon12Bold, { color: colorStyle.black, }]}>Từ năm {item.from.slice(-4)} đến {item.to.slice(-4)}</Text>
                                    <Text style={[componentStyle.Mon12Reg, { color: colorStyle.black, }]}>{item.company}</Text>
                                </View>
                            )
                        })}

                        <Text style={[componentStyle.Os20Bold, { color: colorStyle.blue4, }]}>Tình trạng bản thân</Text>
                        <View style={[styles.flexRow, styles.alignItemsCenter]}>
                            <Text style={[componentStyle.Mon12Bold, { color: colorStyle.black, }]}>Dạng tật: </Text>
                            {currentUser.disable.map((item, index) => {
                                return (
                                    <View key={index} style={{ borderWidth: vw(0.25), borderRadius: vw(1), borderColor: colorStyle.grey, paddingHorizontal: vw(2.5), paddingVertical: vw(1) }}><Text style={[componentStyle.Mon10Reg, { color: colorStyle.blue4 }]}>{item}</Text></View>
                                )
                            })}
                        </View>
                        <Text style={[componentStyle.Mon12Bold, { color: colorStyle.black, }]}>Nguyện vọng bản thân: </Text>
                        <Text style={[componentStyle.Mon12Reg, { color: colorStyle.black, }]}>{currentUser.wishness}</Text>
                    </View>

                    <View style={[styles.flexCol, styles.gap5vw, styles.flex1]}>
                        <Text style={[componentStyle.Os14Bold, { color: colorStyle.grey }]}>Số điện thoại</Text>
                        <Text style={[componentStyle.Mon12Reg, { color: colorStyle.black, }]}>{currentUser.phone}</Text>
                        <Text style={[componentStyle.Os14Bold, { color: colorStyle.grey }]}>Email</Text>
                        <Text style={[componentStyle.Mon12Reg, { color: colorStyle.black, }]}>{currentUser.email}</Text>
                        <Text style={[componentStyle.Os14Bold, { color: colorStyle.grey }]}>Địa chỉ</Text>
                        <Text style={[componentStyle.Mon12Reg, { color: colorStyle.black, }]}>{currentUser.address}</Text>
                        <Text style={[componentStyle.Os14Bold, { color: colorStyle.grey }]}>Ngày sinh</Text>
                        <Text style={[componentStyle.Mon12Reg, { color: colorStyle.black, }]}>{currentUser.dob}</Text>
                        <Text style={[componentStyle.Os14Bold, { color: colorStyle.grey }]}>Giới tính</Text>
                        <Text style={[componentStyle.Mon12Reg, { color: colorStyle.black, }]}>{currentUser.sex}</Text>
                        <Text style={[componentStyle.Os20Bold, { color: colorStyle.blue4, }]}>Học vấn</Text>
                        <View style={[styles.flexRow, styles.flexWrap, styles.gap2vw]}>
                            {currentUser.education.map((item, index) => {
                                return (
                                    <Text key={index} style={[componentStyle.Mon12Reg, { color: colorStyle.black, }]}>{item}</Text>
                                )
                            })}
                        </View>
                        <Text style={[componentStyle.Os20Bold, { color: colorStyle.blue4, }]}>Kĩ năng</Text>
                        <View style={[styles.flexRow, styles.flexWrap, styles.gap2vw]}>
                            {currentUser.skill.map((item, index) => {
                                return (
                                    <Text key={index} style={[componentStyle.Mon12Reg, { color: colorStyle.black, }]}>{item}</Text>
                                )
                            })}
                        </View>
                    </View>
                </View>

                {/* <TouchableOpacity style={[styles.flex1, styles.borderRadius16, { backgroundColor: colorStyle.blue1, paddingVertical: vw(2.5), marginTop:vw(5) }]}>
                    <Text style={[styles.textCenter, componentStyle.Os20Bold, { color: colorStyle.tan1, }]}>Lưu hồ sơ</Text>
                </TouchableOpacity> */}
                {marginBottomForScrollView()}
            </ScrollView>
        </SafeAreaView>
    )
}
export default User;