import * as m from 'mithril'

export abstract class MithrilTsxComponent<A> implements m.ClassComponent<A> {
	
	// Required for type checking JSX attributes
	private __tsx_attrs: A & m.Lifecycle<A, this> & { key?: string | number }

	// Copy of m.ClassComponent<A>.view required by TS
	abstract view(vnode: m.Vnode<A, this>): m.Children | null | void
}

// Set up type checks
declare global {
	module JSX {
		// Return type for elements
		interface Element extends m.Vnode<any, any> {

		}
		// Element names allowed – with attributes allowed
		interface IntrinsicElements {
			[elementName: string]: any
		}
		// Where to look for component type information
		interface ElementAttributesProperty {
			__tsx_attrs: any
		}
	}
}