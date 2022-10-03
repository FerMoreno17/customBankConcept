import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import AppButton from '../components/appButton.component';
import AppInput from '../components/appInput.component';
import AppModal from '../components/appModal.component';
import { RootStackParamList } from '../navigator/Navigator';
import AppStyle from '../styles/styles';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

function LoginScreen({ navigation }: ScreenProps) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [disabledButton, setDisabledButton] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (user.length >= 4 && password.length >= 4) {
            setDisabledButton(false);
            return;
        }
        setDisabledButton(true);
    }, [user, password]);

    function handlerEntrarPress() {
        if (!disabledButton) {
            if (user.toLocaleUpperCase() === 'LUCAS' && password === '1234') {
                navigation.navigate('DrawerNavigator');
            } else {
                setModalVisible(true);
            }
        }
    }

    return (
        <SafeAreaView style={AppStyle.container}>
            <View style={[AppStyle.body, AppStyle.centerItems]}>
                <AppInput label="Usuario" placeholder="Usuario" onChange={setUser} />
                <AppInput label="Contraseña" placeholder="Contraseña" onChange={setPassword} />
            </View>
            <View style={AppStyle.actions}>
                <AppButton onPress={handlerEntrarPress} disabled={disabledButton} label="Ingresar" />
            </View>
            <AppModal
                title="¡Usuario o contraseña incorrectos!"
                modalVisible={setModalVisible}
                visible={modalVisible}
            />
        </SafeAreaView>
    );
};

export default LoginScreen;
