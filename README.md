# mithril-tsx-component

> TSX base class & settings for Mithril.

## Install

```
npm i mithril-tsx-component
```
```
yarn add mithril-tsx-component
```

## Use

```TSX
import * as m from 'mithril'

import { MithrilTsxComponent } from 'mithril-tsx-component'

export interface IFooCompAttrs { }

type Vnode = m.CVnode<IFooCompAttrs>
type VnodeDOM = m.CVnodeDOM<IFooCompAttrs>

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
			"type Vnode = m.CVnode<I$1Attrs>",
			"type VnodeDOM = m.CVnodeDOM<I$1Attrs>",
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