import { View, Text, Pressable, StyleSheet } from "react-native"

function PrimaryButton({children}) {
    function click(){}

    return <View style={styles.buttonOuterContainer}>
        <Pressable onPress={click} android_ripple={{color: '#640233'}} style={({pressed}) => 
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
        backgroundColor: '#72063c',
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