export { View, Image, StyleSheet } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../const/colors'

function GameOverScreen() {
    return <View style={styles.rootContainer}>
        <View style={styles.imageContainer}>
            <Title>GAME OVER!</Title>
            <Image 
                style={styles.image}
                source={require('../assets/images/success.png')}
            />
        </View>
        <Text>Your phone needed X rounds to guess the number Y.</Text>
    </View>
}

export default GameOverScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    }
})