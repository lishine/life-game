import React, { FC } from 'react'
import {
    NumberInput as _NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputProps,
} from '@chakra-ui/core'

export const NumberInput: FC<NumberInputProps> = (props) => {
    return (
        <_NumberInput {...props}>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </_NumberInput>
    )
}
