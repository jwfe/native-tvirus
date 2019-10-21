/**
 * @file dialog
 * @author bikedawuwang
 */

import React, { ReactElement } from 'react';
import {
    View,
    Text,
    TouchableOpactity,
    PixelRatio,
    TextStyle,
    ViewStyle
} from 'react-native';
import dialogStyles from './styles'
import variables from '../../common/styles/variables'
const px = 1 / PixelRatio.get();

interface Operation {
    label?: ReactElement<any>
    labelText?: string
    labelTextStyle?: TextStyle
    type?: 'cancel' | 'confirm'
    onPress: Function
}

export default class Dialog extends React.Components{
    constructor(props) {
        super(props);
    }
    
    render () {
        return null
    }
}