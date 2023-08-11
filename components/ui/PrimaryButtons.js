import { View, Text, Pressable, StyleSheet } from "react-native"
import Colors from "../../const/colors"

function PrimaryButton({children, onPress}) {
    function pressHandler(){
        onPress()
    }

    return <View style={styles.buttonOuterContainer}>
        <Pressable onPress={pressHandler} android_ripple={{color: Colors.primary600 }} style={({pressed}) => 
                pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: Colors.primary500,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})