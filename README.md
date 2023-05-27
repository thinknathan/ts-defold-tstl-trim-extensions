# @ts-defold/tstl-trim-extensions
TypeScriptToLua plugin that strips the final extension from files with nested extensions.

[@ts-defold](https://github.com/ts-defold) is a wonderful project, but it relies on patches to the [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua) project that are fragile and break on new versions of TSTL. This TSTL plugin can be used instead of the patch.

## Installation

1. Update `TypeScriptToLua` to the latest version.
2. Install `yarn add git+https://git@github.com/thinknathan/ts-defold-tstl-trim-extensions.git -D`

## Usage

1. Remove `"trimExtensions": true` from the `tstl` section of `tsconfig.json`.
2. Add this plugin to the `tstl.luaPlugins` section of `tsconfig.json`.

```json
"tstl": {
		"luaPlugins": [
			{
				"name": "@ts-defold/tstl-trim-extensions"
			}
		]
	}
```
