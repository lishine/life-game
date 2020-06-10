import React from 'react'

import { StateInspector } from 'reinspect'
import { CustomizeProvider } from './lifeGame/customize/_customize'

import { LifeGame } from './lifeGame/LifeGame'

export const App = () => (
    <StateInspector name='Life Game App'>
        <CustomizeProvider init={{ tickInterval: 4000, dimensionNCells: 50, cellWidth: 10 }}>
            <LifeGame />
        </CustomizeProvider>
    </StateInspector>
)
