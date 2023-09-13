const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');
const CopyPkgJsonPlugin = require("copy-pkg-json-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  experiments: {
    outputModule: true
  },
  externals: [
    'three'
  ],
  module: {
    rules: [
      {
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    library: {
      type: 'module'
    },
    clean: true
  },
  plugins: [
    new RemovePlugin({
      after: {
        root: "build",
        include: [
          "index-doc.d.ts",
          // "binding",
          // "events/DragAndDropManager.d.ts",
          // "events/EventsDispatcher.d.ts",
          // "events/InteractionEventsQueue.d.ts",
          // "events/InteractionManager.d.ts",
          // "events/MiscEventsManager.d.ts",
          // "patch/Euler.d.ts",
          // "patch/Matrix4.d.ts",
          // "patch/Quaternion.d.ts",
          // "patch/SmartRendering.d.ts",
          // "patch/Vector3.d.ts",
          // "patch/WebGLRenderer.d.ts",
          // "rendering/RenderManager.d.ts",
          // "utils/DistinctTargetArray.d.ts"
        ],
      }
    }),
    new CopyPkgJsonPlugin({
      remove: ['devDependencies', 'scripts']
    }),
    new CopyPlugin({
      patterns: [
        { from: "README.md", to: "README.md" },
        { from: "LICENSE", to: "LICENSE", toType: "file" },
        { from: "src/types", to: "types" },
      ]
    })
  ]
};