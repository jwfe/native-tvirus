/**
 * @file modal.ts
 * @author bikedawuwang
*/

import React from 'react';

import {
    View,
    TouchableOpacity,
    Animated,
    Dimensions,
    StyleSheet,
    ScrollView,
    ViewStyle
} from 'react-native';
import {FadeAnimated} from '../../common/animations'
import variables from '../../common/styles/variables'
import modalStyles from './styles'
export {modalStyles}
const window = Dimensions.get('window');

export interface ModalProps {
    style?: ViewStyle | ViewStyle[]
    containerStyle?: ViewStyle | ViewStyle[]
  
    cancelable?: boolean
    scrollable?: boolean
    backdropColor?: string
  
    screenWidth?: number
    screenHeight?: number
  
    offsetX?: number
    offsetY?: number
  
    animatedTranslateX?: number | null
    animatedTranslateY?: number | null
  
    onOpen?: any
    onOpened?: any
    onClose?: any
    onClosed?: any
}

export class Modal<T extends ModalProps,> extends React.Component<T, any> {

}