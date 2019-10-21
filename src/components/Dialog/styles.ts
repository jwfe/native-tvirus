/**
 * @file dialog.styles
 * @author bikedawuwang
*/
import {
    StyleSheet,
    PixelRatio,
    ViewStyle
} from 'react-native'
import variables from '../../common/styles/variables';

const px = 1/PixelRatio.get();

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadios: variables.jwfeRadiusXS,
        overflow: 'hidden'
    },
    header: {
        alignItems: 'center',
        paddingTop: 25
    },
    title: {
        fontSize: variables.mtdFontSizeL,
        fontWeight: 'bold',
        color: variables.mtdGrayDarker
    },
    body: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingTop: 10,
        paddingBottom: 24
        // paddingVertical: padding.verticalBase,
    },
})