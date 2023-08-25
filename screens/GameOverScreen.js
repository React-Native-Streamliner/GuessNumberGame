import { View, Image, StyleSheet, Dimensions } from "react-native"
import Title from '../components/ui/Title'
import Colors from '../const/colors'

function GameOverScreen({roundsNumber, userNmber, onRestart, onStartNewGame}) {
    return <View style={styles.rootContainer}>
        <View style={styles.imageContainer}>
            <Title>GAME OVER!</Title>
            <Image 
                style={styles.image}
                source={require('../assets/images/success.png')}
            />
        </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number<Text style={styles.highlight}>{userNmber}</Text>.</Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
}

export default GameOverScreen

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: 150,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})
