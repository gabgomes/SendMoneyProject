import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import { SendMoneyModal } from './../../components'
import { SYSTEM_ROUTES } from '../../constants'

CONTACTS = [
    {
        id: 1,
        name: 'Robson Paiva',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028'
    },
    {
        id: 1,
        name: 'Guilherme de Sá',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028'
    },
    {
        id: 1,
        name: 'Arlindo Cruz',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028'
    },
    {
        id: 1,
        name: 'Maria da Paz',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028'
    },
    {
        id: 1,
        name: 'Jorge Amado',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028'
    },
    {
        id: 1,
        name: 'Suzana Gomes',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028'
    },
    {
        id: 1,
        name: 'Dolarice Galvão',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028'
    },
    {
        id: 1,
        name: 'Antônio Felix',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028'
    },
    {
        id: 1,
        name: 'Dolarice Galvão',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028'
    },
    {
        id: 1,
        name: 'Antônio Felix',
        image: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg',
        phone: '(19) 995389028'
    },
]

export class SendMoneyScreen extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        sendMoneyModalVisible: false, 
        selectedContact: {}
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => this._onSelectContact(item)}
                style={styles.itemView}
            >
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View>
                    <Text style={styles.h1}>{item.name}</Text>
                    <Text style={styles.h2}>{item.phone}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _onSelectContact = (item) => { 
        this.setState({ 
            sendMoneyModalVisible: true, 
            selectedContact: item
        })
    }

    _onClickClose = () => { 
        this.setState({ sendMoneyModalVisible: false })
        this.props.navigation.navigate(SYSTEM_ROUTES.HISTORIC_SCREEN.ROUTE)
    }

    render() {
        const { sendMoneyModalVisible, selectedContact } = this.state;

        return (
            <View>
                <SendMoneyModal
                    isVisible={sendMoneyModalVisible}
                    selectedContact={selectedContact}
                    modalClose={() => this._onClickClose()}
                />
                <View style={styles.content}>
                    <FlatList
                        data={CONTACTS}
                        style={styles.flatlist}
                        keyExtractor={(item, index) => `${index}_not`}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
        )
    }
}
