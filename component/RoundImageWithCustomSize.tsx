
import { StyleSheet, View } from 'react-native';

type Props = {
    imageSource: string;
    width: number;
    heigth: number;
};

export default function RoundImageWithCustomSize({
    imageSource,
    width,
    heigth
}: Props) {
    return (
        <View style={styles.container}>
            <img style={styles.image} src={imageSource} width={width} height={heigth}></img>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    image: {
        borderRadius: 10,
    },
});
