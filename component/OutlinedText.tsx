import { StyleSheet, View, Text } from 'react-native';

type Props = {
    text: string;
};

export default function OutlinedText({
    text
}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 40,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
});
