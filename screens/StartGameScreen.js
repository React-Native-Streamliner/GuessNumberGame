import { useState } from 'react'
import { TextInput, View, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButtons"


function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(inputText) {
        setEnteredNumber(enteredNumber)
    }

    function confirmInputHandler() {

    }

    return <View style={styles.inputContainer}>
        <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad" 
            autoCapitalize="none"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 4, //shadow for android only
        shadowColor: 'black', // ios only
        shadowOffset: { width: 0, height: 2}, // ios only
        shadowRadius: 6, // ios only
        shadowOpacity: 0.25 // ios only
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})