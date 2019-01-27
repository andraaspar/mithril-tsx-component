import * as m from 'mithril';
export declare abstract class MithrilTsxComponent<A> implements m.ClassComponent<A> {
    private __tsx_attrs: A & m.Lifecycle<A, this> & { key?: string | number };
    abstract view(vnode: m.Vnode<A, this>): m.Children | null | void;
}
declare global {
    module JSX {
        interface Element extends m.Vnode<any, any> {
        }
        interface IntrinsicElements {
            [elementName: string]: any;
        }
        interface ElementAttributesProperty {
            __tsx_attrs: any;
        }
    }
}
