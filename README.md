# tstl-trim-extensions

[![CI](https://github.com/thinknathan/ts-defold-tstl-trim-extensions/actions/workflows/ci.yml/badge.svg)](https://github.com/thinknathan/ts-defold-tstl-trim-extensions/actions/workflows/ci.yml) ![GitHub License](https://img.shields.io/github/license/thinknathan/ts-defold-tstl-trim-extensions) <a href="https://discord.gg/eukcq5m"><img alt="Chat with us!" src="https://img.shields.io/discord/766898804896038942.svg?colorB=7581dc&logo=discord&logoColor=white"></a>

TypeScriptToLua plugin that strips the final extension from files with the following file extensions:

`.gui_script.ts`
`.render_script.ts`
`.script.ts`

`_gui_script.ts`
`_render_script.ts`
`_script.ts`

v1 of this plugin could work with any nested extension, but that functionality was destroyed by TypeScriptToLua v1.36.0.

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

## Example

Files with the specific extensions mentioned above will have their final extension (`.lua` by default) stripped when output.

- `player.script.ts` will be output as `player.script`

- `player.ts` will be output as `player.lua` as usual (no change).

<p align="center" class="h4">
  TypeScript :heart: Defold
</p>

## License

MIT
