// custom-components.d.ts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'custom-heading': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          token?: string;
        },
        HTMLElement
      >;
    }
  }
}
export {};
