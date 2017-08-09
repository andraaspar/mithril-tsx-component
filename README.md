# mithril-tsx-component

> TSX base class & settings for Mithril.

## Install

**This assumes an existing TypeScript project.**

```
npm i mithril-tsx-component
```
Or:
```
yarn add mithril-tsx-component
```

## Setup

### tsconfig.json

```JSON
{
	// ...
	"compilerOptions": {
		// ...
		"jsx": "react",
		"jsxFactory": "m"
	}
}
```

## Use

```TSX
import * as m from 'mithril'

import { MithrilTsxComponent } from 'mithril-tsx-component'

export interface IFooCompAttrs { }

type Vnode = m.Vnode<IFooCompAttrs, FooComp>
type VnodeDOM = m.VnodeDOM<IFooCompAttrs, FooComp>

export class FooComp extends MithrilTsxComponent<IFooCompAttrs> {

	// oninit(v: Vnode) {}
	// onbeforeupdate(v: Vnode, o: VnodeDOM) {}
	view(v: Vnode) {
		return (
			<div>
				Hello World!
			</div>
		)
	}
	// oncreate(v: VnodeDOM) {}
	// onupdate(v: VnodeDOM) {}
	// onbeforeremove(v: VnodeDOM) {}
	// onremove(v: VnodeDOM) {}
}
```

## VS Code snippet

Use the following in VS Code’s TypeScript React snippets file:

```JSON
{
	"Mithril Component": {
		"prefix": "mc",
		"body": [
			"import * as m from 'mithril'",
			"",
			"import { MithrilTsxComponent } from 'mithril-tsx-component'",
			"",
			"export interface I$1Attrs { }",
			"",
			"type Vnode = m.Vnode<I$1Attrs, $1>",
			"type VnodeDOM = m.VnodeDOM<I$1Attrs, $1>",
			"",
			"export class $1 extends MithrilTsxComponent<I$1Attrs> {",
			"",
			"\t// oninit(v: Vnode) {}",
			"\t// onbeforeupdate(v: Vnode, o: VnodeDOM) {}",
			"\tview(v: Vnode) {",
			"\t\treturn (",
			"\t\t\t$0",
			"\t\t)",
			"\t}",
			"\t// oncreate(v: VnodeDOM) {}",
			"\t// onupdate(v: VnodeDOM) {}",
			"\t// onbeforeremove(v: VnodeDOM) {}",
			"\t// onremove(v: VnodeDOM) {}",
			"}"
		]
	}
}
```