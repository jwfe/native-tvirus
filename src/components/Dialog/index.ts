/**
 * @file dialog
 * @author bikedawuwang
 */

import React, { ReactElement } from 'react';
import {
    PixelRatio,
    TextStyle
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

export default class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        return null
    }
}