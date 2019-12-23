/**
 * @file varables.ts
 * @author bikedawuwang
 * @description 公共样式与品牌色
*/


import {StyleSheet, Platform} from 'react-native';


// 文字色调
const jwfeFontColor = {
    jwfeMainFontColor: '#333333',
    jwfeSecondaryFontColor: '#666666',
    jwfeAuxiliaryFontColor: '#999999',
    jwfeDarkFontColor: '#cccccc',
    jwfeLinkColor: '#108ee9',
    jwfeEmphasizeFontColor: '#f78941',
    jwfeCardFontColor: '#404763',
    jwfeWhiteBase: '#fff'
}

// 情感色
const jwfeEmotionalColor = {
    jwfeMainFontColor: '#333333',
    jwfeSecondaryFontColor: '#666666',
    jwfeAuxiliaryFontColor: '#999999',
    jwfeDarkFontColor: '#cccccc',
    jwfeLinkColor: '#108ee9',
    jwfeEmphasizeFontColor: '#f78941',
    jwfeCardFontColor: '#404763'
}

// 间距
const jwfeSpacing = {
    // 水平间距
    jwfeHSpacingS: 4,
    jwfeHSpacingM: 8,
    jwfeHSpacingL: 12,
    jwfeHSpacingXL: 16,
    jwfeHSpacingX2L: 20,
    // 垂直间距
    jwfeVSpacingXS: 2,
    jwfeVSpacingS: 4,
    jwfeVSpacingM: 8,
    jwfeVSpacingL: 10,
    jwfeVSpacingXL: 12,
    jwfeVSpacingX2L: 16,
    jwfeVSpacingX3L: 18,
    jwfeVSpacingX4L: 20
}

// 圆角尺寸
const jwfeRadius = {
    jwfeRadiusXS: 2,
    jwfeRadiusS: 4,
    jwfeRadiusM: 6,
    jwfeRadiusL: 8
}

// 字号
const jwfeFontSize = {
    jwfeFontSizeXS: 10,
    jwfeFontSizeS: 12,
    jwfeFontSizeM: 14,
    jwfeFontSizeL: 16,
    jwfeFontSizeXL: 18,
    jwfeFontSizeX2L: 20,
    jwfeFontSizeX3L: 22,
    jwfeFontSizeX4L: 24,
    jwfeFontSizeX5L: 28
}

// 边框
const jwfeBorder = {
    jwfeBorderWidth: StyleSheet.hairlineWidth,
    jwfeBorderColor: '#dadada',
    jwfeBorderColorDivision: '#ebebeb'
}

const jwfeOpacity = 0.3

// 按钮组件
const button = {
    buttonEnableAnimated: Platform.OS === 'ios',
    buttonBorderRadius: jwfeRadius.jwfeRadiusXS,
    buttonActiveOpacity: jwfeOpacity,

    buttonLFontSize: jwfeFontSize.jwfeFontSizeXL,
    buttonLHSpacing: 50,
    buttonLVSpacing: 14,

    buttonMFontSize: jwfeFontSize.jwfeFontSizeL,
    buttonMHSpacing: 46,
    buttonMVSpacing: 12,

    buttonSFontSize: jwfeFontSize.jwfeFontSizeM,
    buttonSHSpacing: jwfeSpacing.jwfeHSpacingXL,
    buttonSVSpacing: 8
}

const variables: any = {
    ...jwfeFontColor,
    ...jwfeEmotionalColor,
    ...jwfeSpacing,
    ...jwfeRadius,
    ...jwfeFontSize,
    ...jwfeBorder,

    ...button
}

function useTheme(args = {}) {
    Object.assign(variables, args)
    return variables
}

export default variables
export {
    useTheme
}