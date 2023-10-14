import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colorStyle, useCustomFonts } from "../assets/componentStyleSheet";
import Svg, { SvgUri, SvgXml } from 'react-native-svg';
import { vw, vh, vmax, vmin } from 'react-native-expo-viewport-units';

import Home from '../screens/Home';
import PreLoad from '../screens/PreLoad';
import User from '../screens/User';
import Setting from '../screens/Setting';
import Notification from '../screens/Notification';
import NewJob from '../screens/NewJob';

function Tab({ navigation }) {
    const Tab = createBottomTabNavigator();

    const tabBarIcon = (iconXml, focused) => {
        // const fill = focused ? colorStyle.tan1 : 'none';
        return (
            <SvgXml
                xml={iconXml}
            // fill={fill} // Set the fill color based on whether the tab is focused or not
            />
        );
    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "black",
                tabBarStyle: [
                    {
                        display: "flex",
                        backgroundColor: colorStyle.blue1,
                    },
                    null
                ]

            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            !focused ?
                                `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.4996 7.7626C7.96094 6.30125 9.59314 5.18159 10.6971 4.50348C11.5017 4.00926 12.4975 4.00926 13.3021 4.50348C14.4061 5.18159 16.0382 6.30125 17.4996 7.7626C20.668 10.931 20.4996 12.7626 20.4996 15.7626C20.4996 17.1724 20.3892 18.3614 20.2721 19.2258C20.149 20.1352 19.3558 20.7626 18.438 20.7626H16.9996C15.895 20.7626 14.9996 19.8672 14.9996 18.7626V16.7626C14.9996 15.967 14.6835 15.2039 14.1209 14.6413C13.5583 14.0787 12.7952 13.7626 11.9996 13.7626C11.2039 13.7626 10.4409 14.0787 9.87828 14.6413C9.31567 15.2039 8.9996 15.967 8.9996 16.7626V18.7626C8.9996 19.8672 8.10417 20.7626 6.9996 20.7626H5.56115C4.64342 20.7626 3.85025 20.1352 3.72708 19.2257C3.61002 18.3614 3.4996 17.1724 3.4996 15.7626C3.4996 12.7626 3.3312 10.931 6.4996 7.7626Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                                :
                                `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.4996 7.7626C7.96095 6.30125 9.59314 5.18159 10.6971 4.50348C11.5017 4.00926 12.4975 4.00926 13.3021 4.50348C14.4061 5.18159 16.0382 6.30125 17.4996 7.7626C20.668 10.931 20.4996 12.7626 20.4996 15.7626C20.4996 17.1724 20.3892 18.3614 20.2721 19.2258C20.149 20.1352 19.3558 20.7626 18.438 20.7626H16.9996C15.895 20.7626 14.9996 19.8672 14.9996 18.7626V16.7626C14.9996 15.967 14.6835 15.2039 14.1209 14.6413C13.5583 14.0787 12.7952 13.7626 11.9996 13.7626C11.2039 13.7626 10.4409 14.0787 9.87828 14.6413C9.31567 15.2039 8.9996 15.967 8.9996 16.7626V18.7626C8.9996 19.8672 8.10417 20.7626 6.9996 20.7626H5.56115C4.64342 20.7626 3.85025 20.1352 3.72708 19.2257C3.61002 18.3614 3.4996 17.1724 3.4996 15.7626C3.4996 12.7626 3.3312 10.931 6.4996 7.7626Z" fill="#E2B647"/><path d="M6.4996 7.7626C7.96095 6.30125 9.59314 5.18159 10.6971 4.50348C11.5017 4.00926 12.4975 4.00926 13.3021 4.50348C14.4061 5.18159 16.0382 6.30125 17.4996 7.7626C20.668 10.931 20.4996 12.7626 20.4996 15.7626C20.4996 17.1724 20.3892 18.3614 20.2721 19.2258C20.149 20.1352 19.3558 20.7626 18.438 20.7626H16.9996C15.895 20.7626 14.9996 19.8672 14.9996 18.7626V16.7626C14.9996 15.967 14.6835 15.2039 14.1209 14.6413C13.5583 14.0787 12.7952 13.7626 11.9996 13.7626C11.2039 13.7626 10.4409 14.0787 9.87828 14.6413C9.31567 15.2039 8.9996 15.967 8.9996 16.7626V18.7626C8.9996 19.8672 8.10417 20.7626 6.9996 20.7626H5.56115C4.64342 20.7626 3.85025 20.1352 3.72708 19.2257C3.61002 18.3614 3.4996 17.1724 3.4996 15.7626C3.4996 12.7626 3.3312 10.931 6.4996 7.7626Z" stroke="#E2B647" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                            ,),
                }} />

            <Tab.Screen name="User" component={User}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            !focused ?
                                `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3093 21.7627C22.69 21.7627 23.8093 20.6434 23.8093 19.2627C23.8093 16.9352 21.8576 15.9615 19.8093 15.5544M15.8093 11.7627C18.0185 11.7627 19.8093 9.97183 19.8093 7.7627C19.8093 5.55356 18.0185 3.7627 15.8093 3.7627M4.30933 21.7628H15.3093C16.69 21.7628 17.8093 20.6435 17.8093 19.2628C17.8093 15.1821 11.8093 15.2628 9.80933 15.2628C7.80933 15.2628 1.80933 15.1821 1.80933 19.2628C1.80933 20.6435 2.92861 21.7628 4.30933 21.7628ZM13.8093 7.7627C13.8093 9.97183 12.0185 11.7627 9.80933 11.7627C7.60019 11.7627 5.80933 9.97183 5.80933 7.7627C5.80933 5.55356 7.60019 3.7627 9.80933 3.7627C12.0185 3.7627 13.8093 5.55356 13.8093 7.7627Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                                :
                                `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3093 21.7628H4.30933C2.92861 21.7628 1.80933 20.6435 1.80933 19.2628C1.80933 15.1821 7.80933 15.2628 9.80933 15.2628C11.8093 15.2628 17.8093 15.1821 17.8093 19.2628C17.8093 20.6435 16.69 21.7628 15.3093 21.7628Z" fill="#E2B647"/><path d="M9.80933 11.7627C12.0185 11.7627 13.8093 9.97183 13.8093 7.7627C13.8093 5.55356 12.0185 3.7627 9.80933 3.7627C7.60019 3.7627 5.80933 5.55356 5.80933 7.7627C5.80933 9.97183 7.60019 11.7627 9.80933 11.7627Z" fill="#E2B647"/><path d="M21.3093 21.7627C22.69 21.7627 23.8093 20.6434 23.8093 19.2627C23.8093 16.9352 21.8576 15.9615 19.8093 15.5544M15.8093 11.7627C18.0185 11.7627 19.8093 9.97183 19.8093 7.7627C19.8093 5.55356 18.0185 3.7627 15.8093 3.7627M4.30933 21.7628H15.3093C16.69 21.7628 17.8093 20.6435 17.8093 19.2628C17.8093 15.1821 11.8093 15.2628 9.80933 15.2628C7.80933 15.2628 1.80933 15.1821 1.80933 19.2628C1.80933 20.6435 2.92861 21.7628 4.30933 21.7628ZM13.8093 7.7627C13.8093 9.97183 12.0185 11.7627 9.80933 11.7627C7.60019 11.7627 5.80933 9.97183 5.80933 7.7627C5.80933 5.55356 7.60019 3.7627 9.80933 3.7627C12.0185 3.7627 13.8093 5.55356 13.8093 7.7627Z" stroke="#E2B647" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
                            ,),
                }} />

            <Tab.Screen name="NewJob" component={NewJob}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            !focused ?
                                `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 3.7627H13C13.5523 3.7627 14 4.21041 14 4.7627V5.33148C14 5.75928 14.2871 6.13094 14.6822 6.29498C15.0775 6.45908 15.5377 6.39654 15.8403 6.09392L16.2426 5.6916C16.6331 5.30108 17.2663 5.30108 17.6568 5.6916L19.071 7.10582C19.4616 7.49634 19.4615 8.12951 19.071 8.52003L18.6688 8.92229C18.3661 9.22493 18.3036 9.68516 18.4677 10.0804C18.6317 10.4756 19.0034 10.7627 19.4313 10.7627L20 10.7627C20.5523 10.7627 21 11.2104 21 11.7627V13.7627C21 14.315 20.5523 14.7627 20 14.7627H19.4312C19.0034 14.7627 18.6318 15.0498 18.4677 15.4449C18.3036 15.8402 18.3661 16.3004 18.6688 16.603L19.071 17.0053C19.4616 17.3958 19.4616 18.029 19.071 18.4195L17.6568 19.8337C17.2663 20.2243 16.6331 20.2243 16.2426 19.8337L15.8403 19.4315C15.5377 19.1288 15.0775 19.0663 14.6822 19.2304C14.2871 19.3944 14 19.7661 14 20.1939V20.7627C14 21.315 13.5523 21.7627 13 21.7627H11C10.4477 21.7627 10 21.315 10 20.7627V20.194C10 19.7661 9.71287 19.3944 9.31774 19.2304C8.92247 19.0663 8.46223 19.1288 8.1596 19.4315L7.75732 19.8337C7.36679 20.2243 6.73363 20.2243 6.34311 19.8337L4.92889 18.4195C4.53837 18.029 4.53837 17.3958 4.92889 17.0053L5.33123 16.603C5.63384 16.3004 5.69638 15.8402 5.53228 15.4449C5.36825 15.0498 4.99659 14.7627 4.56879 14.7627H4C3.44772 14.7627 3 14.315 3 13.7627V11.7627C3 11.2104 3.44772 10.7627 4 10.7627L4.56877 10.7627C4.99658 10.7627 5.36825 10.4756 5.53229 10.0805C5.6964 9.6852 5.63386 9.22498 5.33123 8.92236L4.92891 8.52003C4.53838 8.12951 4.53838 7.49634 4.92891 7.10582L6.34312 5.69161C6.73365 5.30108 7.36681 5.30108 7.75734 5.69161L8.15966 6.09393C8.46228 6.39655 8.9225 6.45909 9.31776 6.29499C9.71288 6.13095 10 5.75927 10 5.33146V4.7627C10 4.21041 10.4477 3.7627 11 3.7627Z" stroke="#FAFAFA" stroke-width="1.5"/><path d="M14 12.7627C14 13.8673 13.1046 14.7627 12 14.7627C10.8954 14.7627 10 13.8673 10 12.7627C10 11.6581 10.8954 10.7627 12 10.7627C13.1046 10.7627 14 11.6581 14 12.7627Z" stroke="#FAFAFA" stroke-width="1.5"/></svg>                                `
                                :
                                `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 5.33146V5.2627H12.5V5.33148C12.5 6.45729 13.2419 7.32115 14.1071 7.68033C14.9845 8.04462 16.1119 7.94363 16.9009 7.15458L16.9497 7.10582L17.6568 7.81292L17.6081 7.86163C16.819 8.65071 16.7181 9.77816 17.0824 10.6556L18.4677 10.0804L17.0824 10.6556C17.4415 11.5207 18.3054 12.2627 19.4313 12.2627L19.5 12.2627V13.2627H19.4312C18.3054 13.2627 17.4415 14.0046 17.0824 14.8698C16.7181 15.7472 16.819 16.8746 17.6081 17.6637L17.6568 17.7124L16.9497 18.4195L16.901 18.3708C16.1119 17.5817 14.9845 17.4808 14.1071 17.8451C13.2419 18.2042 12.5 19.0681 12.5 20.1939V20.2627H11.5V20.194C11.5 19.0681 10.758 18.2042 9.89292 17.8451L9.31774 19.2304L9.89292 17.8451C9.01546 17.4807 7.88801 17.5817 7.09894 18.3708L7.05021 18.4195L6.34311 17.7124L6.39189 17.6636C7.18093 16.8746 7.28192 15.7472 6.91763 14.8697C6.55846 14.0046 5.69459 13.2627 4.56879 13.2627H4.5V12.2627H4.56877C5.69459 12.2627 6.55846 11.5207 6.91764 10.6556C7.28194 9.77818 7.18095 8.65076 6.39189 7.8617L6.34312 7.81293L7.05023 7.10582L7.099 7.15459C7.88806 7.94365 9.01549 8.04463 9.89293 7.68033C10.758 7.32115 11.5 6.45728 11.5 5.33146ZM16.5962 18.7731C16.5964 18.7729 16.5966 18.7727 16.5968 18.7725L16.5962 18.7731ZM12.5 12.7627C12.5 13.0388 12.2761 13.2627 12 13.2627C11.7239 13.2627 11.5 13.0388 11.5 12.7627C11.5 12.4866 11.7239 12.2627 12 12.2627C12.2761 12.2627 12.5 12.4866 12.5 12.7627ZM12 16.2627C13.933 16.2627 15.5 14.6957 15.5 12.7627C15.5 10.8297 13.933 9.2627 12 9.2627C10.067 9.2627 8.5 10.8297 8.5 12.7627C8.5 14.6957 10.067 16.2627 12 16.2627Z" stroke="#E2B647" stroke-width="3"/></svg>`
                            ,),
                }} />
            <Tab.Screen name="Notification" component={Notification}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            !focused ?
                                `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_47_6880)"><path d="M22.1907 20.7627H2.19067V18.7627H3.19067V11.7937C3.19067 6.8057 7.22067 2.7627 12.1907 2.7627C17.1607 2.7627 21.1907 6.8057 21.1907 11.7937V18.7627H22.1907V20.7627ZM5.19067 18.7627H19.1907V11.7937C19.1907 7.9107 16.0567 4.7627 12.1907 4.7627C8.32467 4.7627 5.19067 7.9107 5.19067 11.7937V18.7627ZM9.69067 21.7627H14.6907C14.6907 22.4257 14.4273 23.0616 13.9584 23.5305C13.4896 23.9993 12.8537 24.2627 12.1907 24.2627C11.5276 24.2627 10.8917 23.9993 10.4229 23.5305C9.95407 23.0616 9.69067 22.4257 9.69067 21.7627Z" fill="#FAFAFA"/></g><defs><clipPath id="clip0_47_6880"><rect width="24" height="24" fill="white" transform="translate(0.190674 0.762695)"/></clipPath></defs></svg>`
                                :
                                `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_47_6928)"><path d="M22.1907 20.7627H2.19067V18.7627H3.19067V11.7937C3.19067 6.8057 7.22067 2.7627 12.1907 2.7627C17.1607 2.7627 21.1907 6.8057 21.1907 11.7937V18.7627H22.1907V20.7627ZM9.69067 21.7627H14.6907C14.6907 22.4257 14.4273 23.0616 13.9584 23.5305C13.4896 23.9993 12.8537 24.2627 12.1907 24.2627C11.5276 24.2627 10.8917 23.9993 10.4229 23.5305C9.95407 23.0616 9.69067 22.4257 9.69067 21.7627Z" fill="#E2B647"/></g><defs><clipPath id="clip0_47_6928"><rect width="24" height="24" fill="white" transform="translate(0.190674 0.762695)"/></clipPath></defs></svg>`
                            ,),
                }} />
            <Tab.Screen name="Setting" component={Setting}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            !focused ?
                                `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 3.7627H13C13.5523 3.7627 14 4.21041 14 4.7627V5.33148C14 5.75928 14.2871 6.13094 14.6822 6.29498C15.0775 6.45908 15.5377 6.39654 15.8403 6.09392L16.2426 5.6916C16.6331 5.30108 17.2663 5.30108 17.6568 5.6916L19.071 7.10582C19.4616 7.49634 19.4615 8.12951 19.071 8.52003L18.6688 8.92229C18.3661 9.22493 18.3036 9.68516 18.4677 10.0804C18.6317 10.4756 19.0034 10.7627 19.4313 10.7627L20 10.7627C20.5523 10.7627 21 11.2104 21 11.7627V13.7627C21 14.315 20.5523 14.7627 20 14.7627H19.4312C19.0034 14.7627 18.6318 15.0498 18.4677 15.4449C18.3036 15.8402 18.3661 16.3004 18.6688 16.603L19.071 17.0053C19.4616 17.3958 19.4616 18.029 19.071 18.4195L17.6568 19.8337C17.2663 20.2243 16.6331 20.2243 16.2426 19.8337L15.8403 19.4315C15.5377 19.1288 15.0775 19.0663 14.6822 19.2304C14.2871 19.3944 14 19.7661 14 20.1939V20.7627C14 21.315 13.5523 21.7627 13 21.7627H11C10.4477 21.7627 10 21.315 10 20.7627V20.194C10 19.7661 9.71287 19.3944 9.31774 19.2304C8.92247 19.0663 8.46223 19.1288 8.1596 19.4315L7.75732 19.8337C7.36679 20.2243 6.73363 20.2243 6.34311 19.8337L4.92889 18.4195C4.53837 18.029 4.53837 17.3958 4.92889 17.0053L5.33123 16.603C5.63384 16.3004 5.69638 15.8402 5.53228 15.4449C5.36825 15.0498 4.99659 14.7627 4.56879 14.7627H4C3.44772 14.7627 3 14.315 3 13.7627V11.7627C3 11.2104 3.44772 10.7627 4 10.7627L4.56877 10.7627C4.99658 10.7627 5.36825 10.4756 5.53229 10.0805C5.6964 9.6852 5.63386 9.22498 5.33123 8.92236L4.92891 8.52003C4.53838 8.12951 4.53838 7.49634 4.92891 7.10582L6.34312 5.69161C6.73365 5.30108 7.36681 5.30108 7.75734 5.69161L8.15966 6.09393C8.46228 6.39655 8.9225 6.45909 9.31776 6.29499C9.71288 6.13095 10 5.75927 10 5.33146V4.7627C10 4.21041 10.4477 3.7627 11 3.7627Z" stroke="#FAFAFA" stroke-width="1.5"/><path d="M14 12.7627C14 13.8673 13.1046 14.7627 12 14.7627C10.8954 14.7627 10 13.8673 10 12.7627C10 11.6581 10.8954 10.7627 12 10.7627C13.1046 10.7627 14 11.6581 14 12.7627Z" stroke="#FAFAFA" stroke-width="1.5"/></svg>                                `
                                :
                                `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 5.33146V5.2627H12.5V5.33148C12.5 6.45729 13.2419 7.32115 14.1071 7.68033C14.9845 8.04462 16.1119 7.94363 16.9009 7.15458L16.9497 7.10582L17.6568 7.81292L17.6081 7.86163C16.819 8.65071 16.7181 9.77816 17.0824 10.6556L18.4677 10.0804L17.0824 10.6556C17.4415 11.5207 18.3054 12.2627 19.4313 12.2627L19.5 12.2627V13.2627H19.4312C18.3054 13.2627 17.4415 14.0046 17.0824 14.8698C16.7181 15.7472 16.819 16.8746 17.6081 17.6637L17.6568 17.7124L16.9497 18.4195L16.901 18.3708C16.1119 17.5817 14.9845 17.4808 14.1071 17.8451C13.2419 18.2042 12.5 19.0681 12.5 20.1939V20.2627H11.5V20.194C11.5 19.0681 10.758 18.2042 9.89292 17.8451L9.31774 19.2304L9.89292 17.8451C9.01546 17.4807 7.88801 17.5817 7.09894 18.3708L7.05021 18.4195L6.34311 17.7124L6.39189 17.6636C7.18093 16.8746 7.28192 15.7472 6.91763 14.8697C6.55846 14.0046 5.69459 13.2627 4.56879 13.2627H4.5V12.2627H4.56877C5.69459 12.2627 6.55846 11.5207 6.91764 10.6556C7.28194 9.77818 7.18095 8.65076 6.39189 7.8617L6.34312 7.81293L7.05023 7.10582L7.099 7.15459C7.88806 7.94365 9.01549 8.04463 9.89293 7.68033C10.758 7.32115 11.5 6.45728 11.5 5.33146ZM16.5962 18.7731C16.5964 18.7729 16.5966 18.7727 16.5968 18.7725L16.5962 18.7731ZM12.5 12.7627C12.5 13.0388 12.2761 13.2627 12 13.2627C11.7239 13.2627 11.5 13.0388 11.5 12.7627C11.5 12.4866 11.7239 12.2627 12 12.2627C12.2761 12.2627 12.5 12.4866 12.5 12.7627ZM12 16.2627C13.933 16.2627 15.5 14.6957 15.5 12.7627C15.5 10.8297 13.933 9.2627 12 9.2627C10.067 9.2627 8.5 10.8297 8.5 12.7627C8.5 14.6957 10.067 16.2627 12 16.2627Z" stroke="#E2B647" stroke-width="3"/></svg>`
                            ,),
                }} />
        </Tab.Navigator>
    );
}

export default Tab;