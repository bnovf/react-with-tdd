/* config-overrides.js to help us configure webpack while not ejecting*/

const { injectBabelPlugin } = require('react-app-rewired')

module.exports = function override(config, env) {
	// add  plugins
	config = injectBabelPlugin(['transform-react-pug', 'transform-react-pug', 'react-pug'], config)
  return config
}