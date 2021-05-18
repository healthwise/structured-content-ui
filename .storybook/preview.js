import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { create } from '@storybook/theming'

import CssBaseline from '@healthwise-ui/core/CssBaseline'

addDecorator(story => {
  return (
    <div
      style={{
        padding: '16px',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      {story()}
    </div>
  )
})

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Healthwise Structured Content UI',
      brandUrl: 'https://github.com/healthwise/structured-content-ui',
    }),
  },
})
