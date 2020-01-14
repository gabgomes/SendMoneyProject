import React, { Component } from 'react'
import { Button, Text } from 'native-base'
import { View, ActivityIndicator } from 'react-native'
import styles from './styles'

export class LoadingButton extends Component {

    constructor(props) {
        super(props);
        this._renderCustomTitle = this._renderCustomTitle.bind(this);
    }

    _renderCustomTitle() {
        const {
            spinnerColor,
            title,
            size,
            loadingButton,
            textButtonText,
            ...custom
        } = this.props;

        if (this.props.children) {
            return this.props.children
        }

        return (
            <View>
                {loadingButton ?
                    <ActivityIndicator size={size || 'small'} color={spinnerColor || '#fff'}
                        hidesWhenStopped animating={loadingButton} /> :
                    <Text style={textButtonText ? textButtonText : styles.buttonText}>{title}</Text>}

            </View>
        )
    }

    render() {

        const {
            style,
            onPress,
            loadingButton,
            disable,
            ...custom
        } = this.props;

        let styleLoading = loadingButton ? {...styles.loadingBackground, ...style } : style
        let styleDisable = disable ? { ...styleLoading, opacity: 0.6} : styleLoading

        return (
            <Button
                {...custom}
                rounded
                onPress={onPress}
                disabled={disable}
                style={styleDisable}
            >
                {this._renderCustomTitle()}
            </Button>
        )
    }
}