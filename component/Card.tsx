import { StyleSheet, View, Text } from 'react-native';

import RoundImageWithCustomSize from './RoundImageWithCustomSize';

type Props = {
    label: string;
    imageSource: string;
    status: string;
    onPress: () => void
};

export default function Card({
    label,
    imageSource,
    status,
    onPress
}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <RoundImageWithCustomSize imageSource={imageSource} width={125} heigth={100} />
                <View style={styles.column}>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.label}>{status}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        borderRadius: 10,
        borderColor: '#97ce4c',
        borderWidth: 2,
        marginTop: 8,
        marginBottom: 8
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        height: '100%',
        marginStart: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    label: {
        width: '100%',
        color: '#fff',
        fontSize: 16,
    },
});
