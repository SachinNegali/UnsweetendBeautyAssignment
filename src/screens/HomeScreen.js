import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import FeedCard from '../components/FeedCard'
import Header from '../components/Header'
import HeaderSearchBar from '../components/HeaderSearchBar'
import { colors } from '../globels.js/colors'

const feed = [{
    caption: 'Lorem Ipsum is simply dummy text the printing and typesetting industry!',
    imageUrl: 'https://picsum.photos/id/15/200/300',
    profileImageUrl: 'https://picsum.photos/id/100/200/300',
    userName: 'Olivia Emma',
    postedOn: '5 min',
    likes: 10,
}, {
    caption: 'Lorem Ipsum is simply dummy text the printing and typesetting industry!',
    profileImageUrl: 'https://picsum.photos/id/101/200/300',
    userName: 'charlotte_amelia',
    postedOn: '2 days ago',
    likes: 0,
}, {
    caption: 'Lorem Ipsum is simply dummy text the printing and typesetting industry!',
    imageUrl: 'https://picsum.photos/id/123/200/300',
    profileImageUrl: 'https://picsum.photos/id/102/200/300',
    userName: 'sofia_avery',
    postedOn: '3 days ago',
    likes: 10,
},]

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: colors.white }}>
            <Header />
            <FlatList
                data={feed}
                contentContainerStyle={{ paddingBottom: 100 }}
                ListHeaderComponent={<HeaderSearchBar />}
                renderItem={({ item }) => <FeedCard data={item} />}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;
