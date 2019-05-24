module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"settings": {
		"react": {
			"version": "16.4",
		}
	},
	"env": {
		"es6": true,
		"browser": true,
		"node": true,
		"jquery": true,
		"mocha": true
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"propType": false,
		"ecmaVersion": 2018,
		"sourceType": "module",
		"ecmaFeatures": {
			"modules": true
		}
	},
	"globals": {
		"_": true,
		"_jussi": true,
		"skuJson": true,
		"$": true,
		"dataLayer": true,
		"define": true,
		"dust": true,
		"Nitro": true,
		"store": true,
		"vtxctx": true,
		"vtexjs": true,
		"userData": true,
		"store": true,
		"storeLogin": true,
		"localStore": true
	},
	"rules": {
		"react/prop-types": 0,
		"eqeqeq": ["error", "smart"],
		"no-console": [1, {
			"allow": ["assert", "info", "error"]
		}],
		"no-debugger": 1,
		"no-undef": ["error", {
			"typeof": true
		}],
		"no-mixed-spaces-and-tabs": 0,
		"no-var": 0,
		"no-unresolved": 0,
		"indent": ["warn", "tab"],
		"semi": ["error", "always"],
		"no-trailing-spaces": 0,
		"eol-last": 0,
		"no-unused-vars": 1,
		"no-underscore-dangle": 0,
		"no-alert": 1,
		"no-lone-blocks": 0,
		"prefer": "tabs",
		"jsx-quotes": ["warn", "prefer-double"],
		"import/no-unresolved": 0
	}
};
