import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../globels.js/colors'
import SvgImage from './icon'
import ShareLinkModal from './ShareLinkModal';

const FeedCard = ({ data }) => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [show, setShow] = useState(false);
    const navigation = useNavigation();

    const { caption, imageUrl, profileImageUrl, userName, postedOn, likes } = data

    const feedActions = [{
        label: likes > 0 ? `${likes} Like ` : 'Like',
        icon: 'Like',
        width: 21,
        height: 19,
        onPress: () => setLiked(!liked)
    },
    {
        label: 'Comment',
        icon: 'Comment',
        width: 20,
        height: 19,
        onPress: () => navigation.navigate('Post', { data })
    },
    {
        label: 'Share',
        icon: 'Share',
        width: 18,
        height: 17,
        onPress: () => setShow(true)
    },
    {
        label: '',
        icon: saved ? 'Saved' : 'Save',
        width: 16,
        height: 19,
        onPress: () => setSaved(!saved)
    }
    ]

    const FeedAction = ({ label, onPress, icon, width, height }) =>
        <Pressable style={{ flexDirection: 'row' }} onPress={onPress}>
            <SvgImage
                name={icon}
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                stroke={liked && icon === 'Like' ? colors.liked : colors.text}
                fill={liked && icon === 'Like' ? colors.liked : colors.white}
            />
            <Text style={{ fontFamily: 'Poppins-SemiBold', color: colors.black, marginLeft: 6 }}>
                {label}
            </Text>
        </Pressable>

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={{ uri: profileImageUrl }}
                    style={styles.profileImg}
                />
                <View style={{ marginLeft: 12 }}>
                    <Text style={styles.name}>
                        {userName}
                    </Text>
                    <Text style={styles.time}>
                        {postedOn}
                    </Text>
                </View>
            </View>
            <Text style={styles.caption}>
                {caption}
                <Text style={styles.more}>
                    {' '}more
                </Text>
            </Text>
            {imageUrl && <Image
                source={{ uri: imageUrl }}
                style={styles.img}
                resizeMode='contain'
            />}
            <View style={styles.actionsContainer}>
                {feedActions.map(item => {
                    const { label, icon, width, height, onPress } = item;
                    return <FeedAction
                        label={label}
                        icon={icon}
                        width={width}
                        height={height}
                        onPress={onPress}
                        key={label}
                    />
                })}
            </View>
            <ShareLinkModal show={show} close={() => setShow(false)} />
        </View>
    )
}

export default FeedCard

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 0
    },
    actionsContainer: {
        paddingVertical: 18,
        borderTopWidth: 0.5,
        borderTopColor: colors.divider,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 6
    },
    caption: {
        fontFamily: 'Poppins-SemiBold',
        color: colors.text,
        marginTop: 12,
        fontSize: 14
    },
    name: {
        fontSize: 15,
        fontFamily: 'WorkSans-SemiBold',
        color: colors.text
    },
    time: {
        fontFamily: 'Poppins-Medium',
        color: colors.text,
        opacity: 0.5,
        marginTop: 3
    },
    profileImg: {
        height: 38,
        width: 38,
        borderRadius: 38,
        alignSelf: 'center'
    },
    img: {
        height: 190,
        width: '100%',
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: 14
    },
    more: {
        fontFamily: 'Poppins-Medium',
        color: colors.textLight
    }
})