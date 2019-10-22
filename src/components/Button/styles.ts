
/**
 * @file button
 * @author bikedawuwang
 * @description 按钮
*/

import { StyleSheet } from 'react-native'
import variables from '../../common/styles/variables'

const defaultWrapper = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    color: variables.jwfeWhiteBase,
    paddingHorizontal: variables.jwfeHSpacingL,
    paddingVertical: variables.jwfeVSpacingM,

    borderRadius: variables.buttonBorderRadius,


    backgroundColor: variables.jwfeEmphasizeFontColor,
    overflow: 'hidden'
}

const defaultText = {
    fontSize: variables.jwfeFontSizeM,
    color: variables.jwfeWhiteBase
}

const PrimaryWrapper = {
    backgroundColor: variables.jwfeEmphasizeFontColor,
}





export default StyleSheet.create({
    defaultWrapper,
    defaultText
} as any)