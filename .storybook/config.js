import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { create } from '@storybook/theming'
import CssBaseline from '@healthwise-ui/core/CssBaseline'

addDecorator(withInfo)
addDecorator(story => {
  return (
    <div
      style={{
        padding: '16px',
        minHeight: '100vh'
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

// Automatically import all files ending in *.stories.js
const req = require.context(
  '../src',
  true,
  /^((?![/\\\\]node_modules[/\\\\]).)*\.stories\.js$/
)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
