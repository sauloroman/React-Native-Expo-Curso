import { View, Text } from 'react-native'
import { globalStyles } from '@/styles/global-styles'
import { ThemeText } from '@/components/ThemeText'
import { CalculatorButton } from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp = () => {

  const { 
    formula, prevNumber, 
    buildNumber, clean, toggleSign, deleteLast, 
    divideOperation, multiplyOperation, addOperation, subtractOperation, calculateResult
  } = useCalculator()

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant='h1'>{formula}</ThemeText>
        
        {
          formula === prevNumber
          ? (<ThemeText variant='h2'> </ThemeText>)
          : (<ThemeText variant='h2'>{prevNumber}</ThemeText>)
        }
      </View>

      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton 
          blackText
          color={Colors.lightGray} 
          onPress={clean} label='C' />
        <CalculatorButton 
          blackText
          color={Colors.lightGray} 
          onPress={toggleSign} label='+/-' />
        <CalculatorButton 
          blackText
          color={Colors.lightGray} 
          onPress={deleteLast} label='del' />
        <CalculatorButton 
          color={Colors.orange}
          onPress={divideOperation} 
          label='/' 
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton 
          onPress={() => buildNumber('7')} label='7' />
        <CalculatorButton 
          onPress={() => buildNumber('8')} label='8' />
        <CalculatorButton 
          onPress={() => buildNumber('9')} label='9' />
        <CalculatorButton 
          color={Colors.orange}
          onPress={multiplyOperation} 
          label='X' 
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton 
          onPress={() => buildNumber('4')} label='4' />
        <CalculatorButton 
          onPress={() => buildNumber('5')} label='5' />
        <CalculatorButton 
          onPress={() => buildNumber('6')} label='6' />
        <CalculatorButton 
          color={Colors.orange}
          onPress={subtractOperation} 
          label='-' 
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton 
          onPress={() => buildNumber('1')} label='1' />
        <CalculatorButton 
          onPress={() => buildNumber('2')} label='2' />
        <CalculatorButton 
          onPress={() => buildNumber('3')} label='3' />
        <CalculatorButton 
          color={Colors.orange}
          onPress={addOperation} 
          label='+' 
        />
      </View>
      
      <View style={globalStyles.row}>
        <CalculatorButton 
          doubleSize
          onPress={() => buildNumber('0')} label='0' />
        <CalculatorButton 
          onPress={() => buildNumber('.')} label='.' />
        <CalculatorButton 
          onPress={calculateResult} label='=' />
      </View>

    </View>
  )
}

export default CalculatorApp