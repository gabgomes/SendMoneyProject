import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'native-base';
import styles from './styles';
import { View, TextInput } from 'react-native';
import _ from 'lodash';
import theme from "../../style/theme";

export class TextField extends Component {

    render() {
        const { placeholder, errorMessage, value, label, keyboardType, style, onChangeText, onBlur, ...custom } = this.props;

        return (
            <View>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    label={label}
                    keyboardType={keyboardType}
                    style={style}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                />
                {!_.isEmpty(errorMessage) ? <Text note style={styles.errorMessage}> {errorMessage} </Text> : null}
            </View>
        );
    }
}