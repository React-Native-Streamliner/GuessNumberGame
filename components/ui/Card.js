import { View, StyleSheet} from "react-native"
import Colors from "../../const/colors"

function Card({children}) {
    return <View style={styles.card}>
        {children}
    </View>
}

export default Card

const styles = StyleSheet.create({
    card: {
        marginTop: 36,
        marginHorizontal: 24,
        alignItems: 'center',
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, //shadow for android only
        shadowColor: 'black', // ios only
        shadowOffset: { width: 0, height: 2}, // ios only
        shadowRadius: 6, // ios only
        shadowOpacity: 0.25 // ios only
    }
})