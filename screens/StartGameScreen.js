import { useState } from 'react'
import { TextInput, View, StyleSheet, Alert, useWindowDimensions, Dimensions, KeyboardAvoidingView, ScrollView } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButtons"
import Colors from '../const/colors'
import Title from '../components/ui/Title'
import InstructionText from '../components/ui/InstructionText'
import Card from '../components/ui/Card'


function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('')

    const { width, height } = useWindowDimensions()

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

    const marginTopDistance = height < 380 ? 30 : 100

    return <ScrollView style={styles.screen} >
        <KeyboardAvoidingView behavior='position'>
            <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
                <Title>Guess My Number</Title>
                <Card>
                    <InstructionText>Enter a Number:</InstructionText>
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
                </Card>
            </View>
        </KeyboardAvoidingView>
    </ScrollView>
}

export default StartGameScreen

const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center'
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