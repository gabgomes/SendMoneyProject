import React, { Component } from 'react'
import { Button, Text } from 'native-base'
import { View, Image, FlatList } from 'react-native'
import styles from './styles'

export class BarGraphic extends Component {

    constructor(props) {
        super(props);
    }

    _renderItem = ({item}) => {
        return (
            <View style={styles.item}>
                <Text style={styles.valueText}>{item.value}</Text>
                <View style={styles.circle} />
                <View style={styles.bar} />
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
        )
    }

    render() {
        const {
            style,
            historic,
            ...custom
        } = this.props;

        return (
            <FlatList
                data={historic}
                style={styles.flatlist}
                keyExtractor={(item, index) => `${index}_not`}
                renderItem={this._renderItem}
                horizontal={true}
            />
        )
    }
}