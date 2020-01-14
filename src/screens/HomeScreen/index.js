import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'native-base'
import styles from './styles'
import { LoadingButton } from '../../components';
import { SYSTEM_ROUTES } from '../../constants';
import SafeAreaView from 'react-native-safe-area-view';

export class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.content}>
                    <View style={styles.top}>
                        <Image
                            source={{ uri: 'https://www.areavip.com.br/wp-content/uploads/2018/09/eliana-1.jpg' }}
                            style={styles.profileImage}
                            resizeMode="cover"
                        />
                        <Text style={styles.nameText}>Gabriela Gomes</Text>
                        <Text style={styles.emailText}>gabriiela_g@hotmail.com</Text>
                    </View>
                    <View>
                        <LoadingButton
                            full
                            style={styles.purpleButton}
                            onPress={() => this.props.navigation.navigate(SYSTEM_ROUTES.SEND_MONEY_SCREEN.ROUTE)}
                            title="ENVIAR DINHEIRO"
                        />
                        <LoadingButton
                            full
                            style={styles.purpleButton}
                            onPress={() => this.props.navigation.navigate(SYSTEM_ROUTES.HISTORIC_SCREEN.ROUTE)}
                            title="HISTÓRICO DE ENVIOS"
                        />
                    </View>
                </View>
            </SafeAreaView>

        )
    }
}
