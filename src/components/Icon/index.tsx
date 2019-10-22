/**
 * @file icon
 * @author bikedawuwang
 * @description icon
*/

import React from 'react';
import {ImageStyle, ImageSourcePropType ,Image, View} from 'react-native';
// import variables from '../../common/styles/variables';
import path from './path';

export interface IconProps {
    style?: ImageStyle
    type?: string
    size?: number | string | null | undefined
    // tintColor?: string | null | undefined // Android 平台无效
    source?: ImageSourcePropType
}

export class Icon extends React.Component<IconProps, any> {

    static defaultProps = {
        type: 'icon01',
        size: 14,
        style: {},
        // tintColor: variables.jwfeDarkFontColor,
        source: null
    }

    render() {
        let {type, size, style, source} = this.props;
        const mainStyle = {
            width: size,
            height: size
        }

        if (size == null) {
            delete mainStyle.width
            delete mainStyle.height
        }

        if (!source) {
            source = path[type];
        }

        return (
            <Image
                style={[
                    style,
                    {
                        ...mainStyle
                    }
                ]}
                source={source}
            />
        )
    }
}