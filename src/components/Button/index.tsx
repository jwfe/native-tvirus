/**
 * @file button
 * @author bikedawuwang
 * @description 按钮
*/

import React from 'react';
import {Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import buttonStyles from './styles'
export { buttonStyles }
import variables from '../../common/styles/variables'
import { FadeAnimated } from '../../common/animations'



const fontSizeMap = {
    large: variables.buttonLFontSize,
    medium: variables.buttonMFontSize,
    small: variables.buttonSFontSize
}

const paddingMap = {
    large: {
        paddingHorizontal: variables.buttonLHSpacing,
        paddingVertical: variables.buttonLVSpacing
    },
    medium: {
        paddingHorizontal: variables.buttonMHSpacing,
        paddingVertical: variables.buttonMVSpacing
    },
    small: {
        paddingHorizontal: variables.buttonSHSpacing,
        paddingVertical: variables.buttonSVSpacing
    }
}

export interface ButtonProps {
    // 自定义样式
    style?: ViewStyle | ViewStyle[]
    // 自定义文本样式
    textStyle?: TextStyle | TextStyle[]
    // 按钮样式
    type?: 'default' | 'success' | 'dashed' | 'danger' | 'warning'
    // 按钮显示尺寸
    size?: 'small' | 'medium' | 'large'
    // 显示icon
    icon?: string
    // 是否禁用
    disabled?: boolean
    // 是否正在加载
    loading?: boolean
    // 显示内容
    children?: any
    // onPress方法
    onPress?: Function
}

export class Button extends React.Component<ButtonProps, any> {
    private animated = null
    private containerRef = null

    static defaultProps = {
        style: {},
        textStyle: {},
        textColorInverse: false,
        type: 'default',
        size: 'medium',
        disabled: false,
        onPress: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            buttonWidth: 0
        }

        if (variables.buttonEnableAnimated) {
            this.animated = new FadeAnimated({
                scaleList: [0, 1],
                opacityList: [1, 0],
                opacityDuration: 1000,
            })
        }
    }


    handlePress () {
        const {disabled, onPress} = this.props;
        if (disabled) {
            return
        }
        this.animated && this.animated.toIn();
        if (typeof onPress === 'function') {
            onPress();
        }
    }

    handleLayout = e => {
        const {width} = e.nativeEvent.layout
        this.setState({
          buttonWidth: width
        })
    }
    
    
    render() {
        const {type, disabled, size, children, textStyle} = this.props;
        const styleWrapper = buttonStyles[type + 'Wrapper'] || buttonStyles.defaultWrapper
        const styleText = buttonStyles[type + 'Text'] || buttonStyles.defaultText
        return (
            <TouchableOpacity
                ref={c => (this.containerRef = c)}
                style={[
                    styleWrapper,
                    {
                        opacity: disabled ? variables.buttonActiveOpacity : 1,
                        ...(paddingMap[size] || paddingMap['medium'])
                    }
                ]}
                onLayout={this.handleLayout}
            >
                {
                    React.isValidElement(children) ? children :
                    <Text
                        style={[
                            styleText,
                            {
                                fontSize: fontSizeMap[size] || fontSizeMap['medium']
                            },
                            textStyle
                        ]}
                    >
                        {children}
                    </Text>
                }
            </TouchableOpacity>
        )
    }
}


