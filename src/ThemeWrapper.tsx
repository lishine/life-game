import React from 'react'
import { ThemeProvider } from '@chakra-ui/core'
import { theme } from './theme'
import { App } from './App'
import { CSSReset } from '@chakra-ui/core'
import { Global } from '@emotion/core'

export const ThemeWrapper = () => (
    <ThemeProvider theme={theme}>
        <CSSReset />
        <Global
            styles={{
                '::-webkit-search-cancel-button': {
                    WebkitAppearance: 'none',
                },
                body: {
                    backgroundColor: '#4FD1C5',
                },
            }}
        />
        <App />
    </ThemeProvider>
)
