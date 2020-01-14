import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { AuthSwitchNavigator } from '../../navigators'
import { Root } from 'native-base'
// import reducers from '../../reducers'
import { StatusBar } from 'react-native';
import theme from "../../style/theme";

// const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

// const store = createStoreWithMiddleware(reducers);

export class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <Provider store={store}>
        <Root>
          <StatusBar backgroundColor={theme.primary.default} barStyle='light-content' />
          <AuthSwitchNavigator />
          {/* <Text>ewfwerf</Text> */}
        </Root>
      // </Provider>
    )
  }
}

// import _ from 'lodash';
// import React, { Component } from 'react';
// import { PermissionsAndroid, Platform, Text, View } from 'react-native';
// import BluetoothSerial from 'react-native-bluetooth-serial-next';

// export class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       infoDevice: {
//         address: '',
//         name: '',
//       },
//       conectadoDevice: {},
//       itemLidos: '',
//     };
//   }

//   componentDidMount() {
//     if (Platform.OS === 'android' && Platform.Version >= 23) {
//       PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
//         if (result) {
//           console.log("Permission is OK");
//         } else {
//           PermissionsAndroid.requestPermission(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
//             if (result) {
//               console.log("User accept");
//             } else {
//               console.log("User refuse");
//             }
//           });
//         }
//       });
//     }
//     this.loadAll();
//   }

//   loadAll() {
//     BluetoothSerial.enable()
//       .then((r) => {
//         console.log('enable: ', r);
//         return BluetoothSerial.discoverUnpairedDevices();
//       })
//       .then((r) => {
//         console.log('discoverUnpairedDevices: ', r);
//         return BluetoothSerial.list();
//       })
//       .then((r) => {
//         console.log('list: ', r);
//         let devices = _.filter(r, (o) => {
//           return String(o.name).substr(0, 11) === String('Trans-Logik');
//         })
//         console.log('filter: ', devices);
//         return this.setState({ infoDevice: devices[0] }, () => {
//           console.log('devices: ', this.state.infoDevice)
//         });
//       })
//       .then((r) => {
//         console.log('setState: ', r);
//         return BluetoothSerial.disconnectAll();
//       })
//       .then((r) => {
//         console.log('disconnectAll: ', r);
//         console.log('infoDevice: ', this.state.infoDevice.id);
//         return BluetoothSerial.connect(this.state.infoDevice.id);
//       })
//       .then((r) => {
//         console.log('connect: ', r);
//         this.setState({ conectadoDevice: r }, () => {
//           console.log('devices: ', this.state.conectadoDevice);
//           this.ler();
//         });
//       })
//       .catch((e) => {
//         console.error(e);
//       })
//   }

//   _write(dataString) {
//     return dataString;
//     /*let data = new Uint8Array(dataString.length);
//     for (let i = 0; i < data.length; i++) {
//       data[i] = dataString.charCodeAt(i);
//     }
//     return data;*/
//   }

//   ler() {
//     BluetoothSerial.write(this._write('ER'), this.state.conectadoDevice.id)
//       .then((r) => {
//         console.log('write: ER: ', r);
//         return BluetoothSerial.write(this._write('NTE'), this.state.conectadoDevice.id)
//       })
//       .then((r) => {
//         console.log('write: NTE: ', r);
//         return BluetoothSerial.write(this._write('R1'), this.state.conectadoDevice.id)
//       })
//       .then((r) => {
//         console.log('write: R1: ', r);
//         return BluetoothSerial.write(this._write('P'), this.state.conectadoDevice.id)
//       })
//       .then((r) => {
//         console.log('write: P: ', r);
//         BluetoothSerial.read(
//           (_data, intervalId) => {
//             //console.log('retorno: ', _data);
//             //console.log('intervalId: ', intervalId);
//             if (_.trim(_data) !== '') {
//               console.log('_data: ', _data);
//               _data = _data.replace("T", "");
//               console.log('_data: ', _data);
//               _data = _data.replace("N1", "");
//               console.log('_data: ', _data);
//               _data = Number(Number(_data) / 100.0).toFixed(2);
//               console.log('_data: ', _data);
//               //if (_data != '1' && _data != 'N') {
//               this.setState({ itemLidos: _data }, () => {
//                 console.log('itemLidos: ', this.state.itemLidos);
//               });
//               //}
//             }
//           },
//           "N1"
//         );
//       })
//       .catch((e) => {
//         console.log(e);
//       })

//   }

//   render() {
//     const { itemLidos } = this.state;
//     return (
//       <View>
//         <Text>Device: {this.state.infoDevice.address}</Text>
//         <Text>Nome: {this.state.infoDevice.name}</Text>
//         <Text>Leitura: {itemLidos}</Text>
//       </View>
//     );
//   }
// }