 exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /model-viewer/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
    actions.setWebpackConfig({
      module: {
        rules: [
            {
              test: /\.(glb|gltf)$/,
              use:[
                {
                  loader: 'url-loader',
                  options: {
                    outputPath: 'assets/models3d/',
                  },
                },
              ],
            },
        ],
      },
      plugins: [
        plugins.define({
          __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
        }),
      ],
    })
  }