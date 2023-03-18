import React from 'react'
import { View, Image, Pressable, TextInput, StyleSheet } from 'react-native'
import { colors } from '../globels.js/colors'
import SvgImage from './icon'

const HeaderSearchBar = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}
                style={styles.img}
            />
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    placeholder='Ask a question'
                    placeholderTextColor={colors.white}
                />
                <Pressable style={styles.wrapIcon} onPress={() => console.log('upload image maybe...')}>
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
    )
}

export default HeaderSearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 18,
        backgroundColor: colors.primary
    },
    img: {
        height: 38,
        width: 38,
        borderRadius: 18,
        alignSelf: 'center',
        borderWidth: 1.5,
        borderColor: colors.white
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: colors.inputBorder,
        borderRadius: 8,
        flex: 1,
        marginLeft: 6,
        backgroundColor: colors.primary
    },
    input: {
        padding: 10,
        paddingLeft: 12,
        fontFamily: 'Rajdhani-Medium',
        fontSize: 12,
        flex: 1,
        color: colors.white
    },
    wrapIcon: {
        alignSelf: 'center',
        margin: 10
    }
})