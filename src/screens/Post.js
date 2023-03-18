import React, { useEffect, useState } from 'react'
import { View, Image, TextInput, KeyboardAvoidingView, Keyboard, Pressable, StyleSheet, FlatList } from 'react-native'
import CommentCard from '../components/CommentCard'
import FeedCard from '../components/FeedCard'
import Header from '../components/Header'
import HeaderSearchBar from '../components/HeaderSearchBar'
import SvgImage from '../components/icon'
import { colors } from '../globels.js/colors'
import { useRoute } from '@react-navigation/native';

const Post = () => {
    const [inputFocused, setInputFocused] = useState(false);
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const route = useRoute()
    const data = route.params.data

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardOpen(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardOpen(false);
        });
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    const expandInput = inputFocused && keyboardOpen

    const comments = [{
        userName: 'John_smith',
        comment: 'Nice Product :-)',
        likes: 12,
        imageUrl: 'https://picsum.photos/seed/picsum/200/300'
    }]

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, backgroundColor: colors.white }}
        >
            <Header />
            <FlatList
                data={comments}
                ListHeaderComponent={<>
                    <HeaderSearchBar />
                    <FeedCard data={data} />
                </>}
                renderItem={({ item, index }) => <>
                    {index === 0 && <View style={styles.divider} />}
                    <CommentCard data={item} />
                </>}
            />
            <View style={styles.row}>
                <Image
                    source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}
                    style={styles.commentIcon}
                    resizeMode='contain'
                />
                <View style={[styles.inputWrap, { marginBottom: expandInput ? 30 : 0 }]}>
                    <TextInput
                        style={[
                            styles.input, {
                                textAlignVertical: expandInput ? 'top' : 'center',
                            }]
                        }
                        multiline={true}
                        numberOfLines={expandInput ? 8 : 1}
                        onFocus={() => setInputFocused(true)}
                        onBlur={() => setInputFocused(false)}
                        placeholder={expandInput ? '1800 character limit...' : 'Write Comment...'}
                        placeholderTextColor={colors.placeHolder}
                    />
                    {expandInput &&
                        <Pressable
                            style={{ alignSelf: 'center' }}
                            onPress={() => console.log('post comment')}
                        >
                            <SvgImage
                                name='PostComment'
                                width={18}
                                height={19}
                                viewBox="0 0 18 19"
                                style={{ marginLeft: 16 }}
                            />
                        </Pressable>}
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Post

const styles = StyleSheet.create({
    divider: {
        height: 0.5,
        backgroundColor: colors.divider,
        marginHorizontal: 20,
        marginBottom: 18
    },
    input: {
        borderWidth: 1.5,
        backgroundColor: colors.white,
        borderColor: colors.commentBorder,
        fontFamily: 'Inter-Regular',
        borderRadius: 12,
        padding: 12,
        flex: 1,
        marginLeft: 6,
    },
    inputWrap: {
        flexDirection: 'row',
        flex: 1,
    },
    commentIcon: {
        height: 32,
        width: 32,
        borderRadius: 16,
        marginTop: 14
    },
    row: {
        flexDirection: 'row',
        padding: 20
    }
})