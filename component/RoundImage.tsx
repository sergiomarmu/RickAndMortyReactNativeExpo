
import { StyleSheet, View } from 'react-native';

type Props = {
    imageSource: string;
};

export default function RoundImage({
    imageSource
}: Props) {
    return (
        <View style={styles.container}>
            <img style={styles.image} src={imageSource}></img>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    image: {
        borderRadius: 10,
    },
});
