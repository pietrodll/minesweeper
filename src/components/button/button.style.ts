import { StyleSheet } from 'react-native';
import { closed } from '../../styles/colors';
import { defaultBorderRadius } from '../../styles/dimensions';

export default StyleSheet.create({
    container: {
        height: 60,
        width: 180,
        backgroundColor: closed,
        borderRadius: defaultBorderRadius,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});
