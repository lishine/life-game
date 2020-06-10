import React, { FC } from 'react'

import { ListIcon, ListItem } from '@chakra-ui/core'
export const RequirementsListItem: FC = ({ children }) => (
    <ListItem mt={1}>
        <ListIcon icon='check-circle' color='green.500' />
        {children}
    </ListItem>
)
