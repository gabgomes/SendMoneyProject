import React, { Component } from 'react'
import styles from './styles'
import { Text, Button, View } from 'native-base'
import { Modal, TouchableHighlight, Image, TextInput } from "react-native";
import { LoadingButton } from '../../components';

export class SendMoneyModal extends Component {

    state = {
        inputValue: ''
    }

    _onChangeText = (value) => {
        this.setState({ inputValue: value })
    }

    render() {
        const { isVisible, modalClose, selectedContact } = this.props;
        const { inputValue } = this.state;

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
            >
                <TouchableHighlight
                    style={styles.touchable}
                    onPress={() => modalClose()}
                >
                    <View style={styles.modal}>
                        <View style={styles.top}>
                            <Image
                                source={{ uri: selectedContact.image }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                            <Text style={styles.h1}>{selectedContact.name}</Text>
                            <Text style={styles.h2}>{selectedContact.phone}</Text>
                        </View>
                        <Text style={styles.h2}>Valor a enviar:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={value => this._onChangeText(value)}
                            value={inputValue}
                            keyboardType="numeric"
                        />
                        <LoadingButton
                            full
                            style={styles.sendButton}
                            onPress={() => modalClose()}
                            title="ENVIAR"
                        />
                    </View>
                </TouchableHighlight>
            </Modal>
        )
    }
}
