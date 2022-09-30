import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import AppButton from '../components/appButton.component';
import AppInput from '../components/appInput.component';
import AppModal from '../components/appModal.component';
import { RootStackParamList } from '../navigator/Navigator';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

function LoginScreen({ navigation }: ScreenProps) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [disabledButton, setDisabledButton] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: '#fff',
        },
        title: {
            flex: 1,
            width: '100%',
        },
        h1: {
            fontSize: 24,
            fontWeight: '700',
        },
        body: {
            flex: 8,
            width: '100%',
        },
        centerItems: {
            justifyContent: 'center',
        },
        action: {
            flex: 2,
            width: '100%',
        },
    });

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
        <SafeAreaView style={styles.container}>
            <View style={[styles.body, styles.centerItems]}>
                <AppInput label="Usuario" placeholder="Usuario" onChange={setUser} />
                <AppInput label="Contraseña" placeholder="Contraseña" onChange={setPassword} />
            </View>
            <View style={styles.action}>
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
