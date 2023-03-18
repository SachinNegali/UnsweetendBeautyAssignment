import React from 'react'
import { View, Text, Image, TextInput, Pressable, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import FeedCard from '../components/FeedCard'
import SvgImage from '../components/icon'
import { colors } from '../globels.js/colors'

const feed = [1, 2, 3, 4]

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: colors.primary }}>
                <Text style={{ fontSize: 20, fontFamily: 'Rajdhani-Bold', color: colors.headerFont }}>
                    Unsweetened Beauty
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable>
                        <SvgImage
                            name='Questions'
                            width={20}
                            height={22}
                            viewBox="0 0 20 22"
                            fill="none"
                        />
                    </Pressable>
                    <Pressable style={{ marginLeft: 20 }}>
                        <SvgImage
                            name='Notification'
                            width={18}
                            height={22}
                            viewBox="0 0 18 22"
                            fill="none"
                        />
                    </Pressable>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingBottom: 18, backgroundColor: colors.primary }}>
                <Image
                    source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}
                    style={{ height: 38, width: 38, borderRadius: 18, alignSelf: 'center', borderWidth: 1.5, borderColor: colors.white }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: colors.inputBorder, borderRadius: 8, flex: 1, marginLeft: 6, backgroundColor: colors.primary }}>
                    <TextInput
                        style={{ padding: 10, paddingLeft: 12, fontFamily: 'Rajdhani-Medium', fontSize: 12, flex: 1 }}
                        placeholder='Ask a question'
                        placeholderTextColor={colors.white}
                    />
                    <Pressable style={{ alignSelf: 'center', margin: 10 }}>
                        <SvgImage
                            name='UploadImage'
                            width={23}
                            height={22}
                            viewBox="0 0 23 22"
                            fill="none"
                        />
                    </Pressable>
                </View>
            </View>
            <FlatList
                data={feed}
                renderItem={({ item }) => <FeedCard />}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({

})