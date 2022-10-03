import { StyleSheet } from 'react-native';
import theme from './theme.style';

const AppStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: theme.WHITE,
    },
    title: {
        flex: 1,
        width: '100%',
    },
    body: {
        flex: 8,
        width: '100%',
    },
    actions: {
        flex: 2,
        width: '100%',
    },
    centerItems: {
        justifyContent: 'center',
    },
    textLarge: {
        fontSize: theme.FONT_SIZE_LARGE,
    },
    textMedium: {
        fontSize: theme.FONT_SIZE_MEDIUM,
    },
    textSmall: {
        fontSize: theme.FONT_SIZE_SMALL,
    },
});

export default AppStyle;
