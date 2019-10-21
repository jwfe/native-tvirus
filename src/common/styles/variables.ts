/**
 * @file varables.ts
 * @author bikedawuwang
*/


import {StyleSheet} from 'react-native';

const jwfeFontColor = {
    jwfeMainFontColor: '#333333',
    jwfeSecondaryFontColor: '#666666',
    jwfeAuxiliaryFontColor: '#999999',
    jwfeDarkFontColor: '#cccccc',
    jwfeLinkColor: '#108ee9',
    jwfeEmphasizeFontColor: '#f78941',
    jwfeCardFontColor: '#404763'
}

const jwfeEmotionalColor = {
    jwfeMainFontColor: '#333333',
    jwfeSecondaryFontColor: '#666666',
    jwfeAuxiliaryFontColor: '#999999',
    jwfeDarkFontColor: '#cccccc',
    jwfeLinkColor: '#108ee9',
    jwfeEmphasizeFontColor: '#f78941',
    jwfeCardFontColor: '#404763'
}

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

const jwfeRadius = {
    jwfeRadiusXS: 2,
    jwfeRadiusS: 4,
    jwfeRadiusM: 6,
    jwfeRadiusL: 8
  }

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

const jwfeBorder = {
    jwfeBorderWidth: StyleSheet.hairlineWidth,
    jwfeBorderColor: '#F5F5F5',
    jwfeBorderColorDark: '#e5e5e5',
    jwfeBorderColorDarker: '#d5d5d5'
}

const variables: any = {
    ...jwfeFontColor,
    ...jwfeEmotionalColor,
    ...jwfeSpacing,
    ...jwfeRadius,
    ...jwfeFontSize,
    ...jwfeBorder
}

function useTheme(args = {}) {
    Object.assign(variables, args)
    return variables
}

export default variables
export {
    useTheme
}