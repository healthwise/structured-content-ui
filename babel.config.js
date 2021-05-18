module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: ['ie 11', '> 1%'],
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
  ],
  ignore: ['node_modules/**'],
}
