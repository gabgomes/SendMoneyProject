import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import { BarGraphic } from '../../components';

const CONTACTS = [
    {
        id: 1,
        name: 'Robson Paiva',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '130,00'
    },
    {
        id: 1,
        name: 'Guilherme de Sá',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '110,00'
    },
    {
        id: 1,
        name: 'Arlindo Cruz',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '20,00'
    },
    {
        id: 1,
        name: 'Jorge Amado',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '860,00'
    },
    {
        id: 1,
        name: 'Suzana Gomes',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '150,00'
    },
    {
        id: 1,
        name: 'Antônio Felix',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '109,00'
    },
]

const HISTORIC = [
    {
        id: 1,
        name: 'Robson Paiva',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '1200,00'
    },
    {
        id: 2,
        name: 'Antônio Felix',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '1000,00'
    },
    {
        id: 3,
        name: 'Arlindo Cruz',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '950,00'
    },
    {
        id: 4,
        name: 'Jorge Amado',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '900,00'
    },
    {
        id: 5,
        name: 'Cristina Paiva',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '900,00'
    },
    {
        id: 6,
        name: 'Alípio Silva',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '900,00'
    },
    {
        id: 7,
        name: 'Janaína Souza',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '900,00'
    },
    {
        id: 8,
        name: 'João Henrique',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '900,00'
    },
    {
        id: 9,
        name: 'Laura Cardoso',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028',
        value: '900,00'
    },
]

export class HistoricScreen extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        sendMoneyModalVisible: false,
        selectedContact: {}
    }

    _renderItem = ({ item }) => {
        return (
            <View style={styles.itemView}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View>
                    <Text style={styles.h1}>{item.name}</Text>
                    <Text style={styles.h2}>{item.phone}</Text>
                    <Text style={styles.valueText}>R$ {item.value}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <ScrollView style={styles.safearea}>
                <BarGraphic
                    historic={HISTORIC}
                />
                <View style={styles.content}>
                    <FlatList
                        data={CONTACTS}
                        style={styles.flatlist}
                        keyExtractor={(item, index) => `${index}_not`}
                        renderItem={this._renderItem}
                    />
                </View>
            </ScrollView>
        )
    }
}
