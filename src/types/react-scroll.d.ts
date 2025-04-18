
declare module 'react-scroll' {
  import * as React from 'react';

  interface ScrollProps {
    to: string;
    containerId?: string;
    activeClass?: string;
    spy?: boolean;
    smooth?: boolean | string;
    offset?: number;
    delay?: number;
    isDynamic?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    duration?: number | string;
    absolute?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    horizontal?: boolean;
    hashSpy?: boolean;
  }

  interface ScrollLinkProps extends ScrollProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }

  export function Link(props: ScrollLinkProps): JSX.Element;
  export function Element(props: { name: string; className?: string; id?: string; style?: React.CSSProperties; children: React.ReactNode }): JSX.Element;
  export function Events(callback: (event: string) => void): { register: (eventName: string) => void };
  export const scrollSpy: {
    update(): void;
  };
  export const scroller: {
    scrollTo(name: string, props: ScrollProps): void;
  };
  export const animateScroll: {
    scrollToTop(props?: ScrollProps): void;
    scrollToBottom(props?: ScrollProps): void;
    scrollTo(props?: ScrollProps & { y?: number }): void;
    scrollMore(props?: ScrollProps & { y?: number }): void;
  };

  export const Helpers: {
    Scroll(): void;
  };
}
