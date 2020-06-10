import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import { ThemeWrapper } from './ThemeWrapper'

test('App', async () => {
    const { getByText } = render(<ThemeWrapper />)
    getByText('Life game')
})
