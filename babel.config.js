module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
  ],
  ignore: ['node_modules'].concat(
    process.env.NODE_ENV === 'production' ? ['**/*.test.js', '__mocks__'] : []
  ),
}
