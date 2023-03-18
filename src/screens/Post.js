import React from 'react'
import { SafeAreaView, View, Pressable, } from 'react-native'
import FeedCard from '../components/FeedCard'

const Post = () => {
    return (
        <SafeAreaView>
            <View style={{ flex: 1 }}>
                <FeedCard />
            </View>
        </SafeAreaView>
    )
}

export default Post