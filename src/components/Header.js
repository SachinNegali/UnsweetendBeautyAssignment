import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { colors } from '../globels.js/colors'
import SvgImage from './icon'

const Header = () => {
    return (
        <View style={styles.row}>
            <Text style={styles.title}>
                Unsweetened Beauty
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <Pressable onPress={() => console.log('Questions?')}>
                    <SvgImage
                        name='Questions'
                        width={20}
                        height={22}
                        viewBox="0 0 20 22"
                        fill="none"
                    />
                </Pressable>
                <Pressable style={{ marginLeft: 20 }} onPress={() => console.log('notifications')}>
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
    )
}

export default Header

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: colors.primary
    },
    title: {
        fontSize: 20,
        fontFamily: 'Rajdhani-Bold',
        color: colors.headerFont
    }
})