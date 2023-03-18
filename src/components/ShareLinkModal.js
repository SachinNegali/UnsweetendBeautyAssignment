import React from 'react'
import { Modal, View, StyleSheet, Text, Pressable, ToastAndroid } from 'react-native'
import { colors } from '../globels.js/colors';
import SvgImage from './icon';
import Clipboard from '@react-native-clipboard/clipboard';

const ShareLinkModal = ({ show, close }) => {
    const url = 'http//www.figma.comdccecid=467'

    const copyUrl = () => {
        Clipboard.setString(url)
        ToastAndroid.show('Link copied to clipboard', ToastAndroid.SHORT)
        close()
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={close}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Pressable style={{ padding: 10 }} onPress={close}>
                        <SvgImage
                            name='Close'
                            width={10}
                            height={9}
                            viewBox="0 0 10 9"
                            style={{ alignSelf: 'flex-end' }}
                        />
                    </Pressable>
                    <Text style={styles.title}>
                        Share with link
                    </Text>
                    <View style={styles.linkInput}>
                        <Text style={styles.link} numberOfLines={1}>
                            {url}
                        </Text>
                        <Pressable onPress={copyUrl}>
                            <SvgImage
                                name='CopyToClipboard'
                                width={19}
                                height={20}
                                viewBox="0 0 19 20"
                            />
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ShareLinkModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.modalOffset,
    },
    modalView: {
        backgroundColor: "white",
        padding: 16,
        paddingTop: 6,
        elevation: 5,
        marginHorizontal: 20,
        borderRadius: 12,
    },
    linkInput: {
        paddingHorizontal: 12,
        paddingVertical: 14,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: colors.commentBorder,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'WorkSans-SemiBold',
        fontSize: 18,
        color: colors.modalHeader,
        alignSelf: 'center',
        marginBottom: 16
    },
    link: {
        fontFamily: 'WorkSans-Medium',
        fontSize: 14,
        color: colors.link
    }
})