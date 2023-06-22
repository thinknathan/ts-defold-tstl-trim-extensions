# @ts-defold/tstl-trim-extensions
TypeScriptToLua plugin that strips the final extension from files with nested extensions.

[@ts-defold](https://github.com/ts-defold) is a wonderful project, but it relies on patches to the [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua) project that are fragile and break on new versions of TSTL. This TSTL plugin can be used instead of the patch.

## Installation

1. Install this plugin.

```bash
yarn add git+https://git@github.com/thinknathan/ts-defold-tstl-trim-extensions.git#^1.0.0 -D
# or
npm install git+https://git@github.com/thinknathan/ts-defold-tstl-trim-extensions.git#^1.0.0 --save-dev
```

2. Add this plugin to the `tstl.luaPlugins` section of `tsconfig.json`.

```diff
"tstl": {
	"luaPlugins": [
		{
+			"name": "@ts-defold/tstl-trim-extensions"
		}
	]
}
```

### Update an existing TS-Defold project

1. Install this plugin as described above.
2. Update `TypeScriptToLua` to v1.5.0 or newer.
3. Remove `"trimExtensions": true` from the `tstl` section of `tsconfig.json`.

```diff
{
	"tstl": {
-		"trimExtensions": true,
	}
}
```

## Example

Files with multiple nested extensions will have their final extension (`.lua` by default) stripped.

`player.script.ts` will be output as `player.script`

Files without multiple extensions will not be changed by this plugin.

`player.ts` will be output as `player.lua` as usual.

## License

MIT
