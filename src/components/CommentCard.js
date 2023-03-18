import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { colors } from '../globels.js/colors'
import SvgImage from './icon'

const CommentCard = ({ data }) => {
    const { userName, imageUrl, comment, likes } = data
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imageUrl }}
                style={styles.img}
                resizeMode='contain'
            />
            <View style={{ flex: 1, paddingLeft: 6 }}>
                <View style={styles.commentContainer}>
                    <Text style={styles.name}>
                        {userName}
                    </Text>
                    <Text style={styles.comment}>
                        {comment}
                    </Text>
                </View>
                <View style={styles.row}>
                    <SvgImage
                        name='Like'
                        width={16}
                        height={14}
                        viewBox="0 0 21 19"
                        fill={colors.liked}
                        stroke={colors.liked}
                        style={{ alignSelf: 'center' }}
                    />
                    <Text style={styles.likeCount}>
                        {likes} Likes
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default CommentCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 16
    },
    img: {
        height: 32,
        width: 32,
        borderRadius: 16,
        marginTop: 14
    },
    commentContainer: {
        borderWidth: 1.5,
        borderColor: colors.commentBorder,
        borderRadius: 12,
        padding: 10
    },
    name: {
        fontSize: 13,
        fontFamily: 'WorkSans-SemiBold',
        color: colors.black
    },
    comment: {
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        color: colors.black,
        marginTop: 6
    },
    row: {
        flexDirection: 'row',
        paddingTop: 10
    },
    likeCount: {
        fontFamily: 'Poppins-SemiBold',
        color: colors.black,
        marginLeft: 8
    }
})