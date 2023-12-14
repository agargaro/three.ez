// plugins/glslify-loaders/index.js
module.exports = function (context, options) {
    return {
      name: 'glslify-loaders',
      configureWebpack(config, isServer) {
        return {
          module: {
            rules: [
              {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: [
                  'raw-loader',
                  'glslify-loader'
                ]
              },
            ],
          },
        };
      },
    };
   };
   