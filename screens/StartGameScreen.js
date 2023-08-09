import { useState } from 'react'
import { TextInput, View, StyleSheet, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButtons"
import Colors from '../const/colors'


function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('')

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function numberInputHandler(inputText) {
        setEnteredNumber(inputText)
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // show alert
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [
                    {
                        text: 'Okay',
                        style: 'destructive'
                        //onPress: resetInputHandler
                    }
                ]
            )
            return
        }
        onPickNumber(chosenNumber)
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
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
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
        backgroundColor: Colors.primary800,
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
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
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