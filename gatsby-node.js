exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /wicg-focus-ring/,
      loader: 'null-loader'
    })
  }
}
