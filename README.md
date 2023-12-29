# tstl-trim-extensions

<a href="https://discord.gg/eukcq5m"><img alt="Chat with us!" src="https://img.shields.io/discord/766898804896038942.svg?colorB=7581dc&logo=discord&logoColor=white"></a>

TypeScriptToLua plugin that strips the final extension from files with nested extensions.

Used by [@ts-defold](https://github.com/ts-defold).

## Installation

1. Install this plugin.

```bash
yarn add tstl-trim-extensions -D
# or
npm install tstl-trim-extensions --save-dev
```

2. Add this plugin to the `tstl.luaPlugins` section of `tsconfig.json`.

```diff
"tstl": {
	"luaPlugins": [
		{
+			"name": "tstl-trim-extensions"
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

<p align="center" class="h4">
  TypeScript :heart: Defold
</p>

## License

MIT
