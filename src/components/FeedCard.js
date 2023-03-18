import React, { useState } from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import { colors } from '../globels.js/colors'
import SvgImage from './icon'

const FeedCard = () => {
    const [liked, setLiked] = useState(false);
    const [showComments, setShowComments] = useState(false);

    const FeedAction = ({ label, onPress, icon, width, height }) => <Pressable style={{ flexDirection: 'row' }} onPress={onPress}>
        <SvgImage
            name={icon}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            stroke={liked && label === 'Like' ? colors.liked : colors.text}
            fill={liked && label === 'Like' ? colors.liked : colors.white}
        />
        <Text style={{ fontFamily: 'Poppins-SemiBold', color: colors.black, marginLeft: 6 }}>
            {label}
        </Text>
    </Pressable>

    return (
        <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}
                    style={{ height: 38, width: 38, borderRadius: 17, alignSelf: 'center' }}
                />
                <View style={{ marginLeft: 12 }}>
                    <Text style={{ fontSize: 15, fontFamily: 'WorkSans-SemiBold', color: colors.text }}>
                        Olivia Emma
                    </Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: colors.text, opacity: 0.5 }}>
                        5 min
                    </Text>
                </View>
            </View>
            <Text style={{ fontFamily: 'Poppins-SemiBold', color: colors.text, marginTop: 12, fontSize: 14 }}>
                Lorem Ipsum is simply dummy text the printing and typesetting industry!
                <Text style={{ fontFamily: 'Poppins-Medium', color: colors.textLight }}>
                    {' '}more
                </Text>
            </Text>
            <Image
                source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}
                style={{ height: 190, width: '100%', borderRadius: 12, alignSelf: 'center', marginTop: 14 }}
                resizeMode='contain'
            />
            <View style={{ paddingVertical: 18, borderTopWidth: 0.5, borderTopColor: colors.divider, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 6 }}>
                <FeedAction
                    label={'Like'}
                    icon={'Like'}
                    width={21}
                    height={19}
                    onPress={() => setLiked(!liked)}
                />
                <FeedAction
                    label={'Comment'}
                    icon={'Comment'}
                    width={20}
                    height={19}
                    onPress={() => setShowComments(!showComments)}
                />
                <FeedAction
                    label={'Share'}
                    icon={'Share'}
                    width={18}
                    height={17}
                    onPress={() => console.log('On press like')}
                />
                <FeedAction
                    label={''}
                    icon={'Save'}
                    width={16}
                    height={19}
                    onPress={() => console.log('On press like')}
                />
            </View>
            <View style={{ paddingVertical: 18, borderTopWidth: 0.5, borderTopColor: colors.divider, marginTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}
                        style={{ height: 32, width: 32, borderRadius: 16, marginTop: 14 }}
                        resizeMode='contain'
                    />
                    <View style={{ flex: 1, paddingLeft: 6 }}>
                        <View style={{ borderWidth: 1.5, borderColor: colors.commentBorder, borderRadius: 12, padding: 10, flex: 1 }}>
                            <Text style={{ fontSize: 13, fontFamily: 'WorkSans-SemiBold', color: colors.black }}>
                                John_smith
                            </Text>
                            <Text style={{ fontSize: 13, fontFamily: 'Poppins-Medium', color: colors.black, marginTop: 6 }}>
                                {'Nice Product :-)'}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <SvgImage
                                name='Like'
                                width={16}
                                height={14}
                                viewBox="0 0 21 19"
                                fill={colors.liked}
                                stroke={colors.liked}
                                style={{ alignSelf: 'center' }}
                            />
                            <Text style={{ fontFamily: 'Poppins-SemiBold', color: colors.black, marginLeft: 8 }}>
                                12 Likes
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}
                        style={{ height: 32, width: 32, borderRadius: 16, marginTop: 14 }}
                        resizeMode='contain'
                    />
                    <TextInput
                        style={{ borderWidth: 1.5, borderColor: colors.commentBorder, fontFamily: 'Inter-Regular', borderRadius: 12, padding: 10, flex: 1, marginLeft: 6 }}
                        placeholder={'Write Comment...'}
                        placeholderTextColor={colors.placeHolder}
                    />
                </View>
            </View>
        </View>
    )
}

export default FeedCard