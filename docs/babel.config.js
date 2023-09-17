module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset'), ['@babel/preset-typescript', { allowDeclareFields: true }]],
};
