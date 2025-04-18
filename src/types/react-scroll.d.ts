
declare module 'react-scroll' {
  import * as React from 'react';

  export interface LinkProps {
    to: string;
    containerId?: string;
    activeClass?: string;
    className?: string;
    activeStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    spy?: boolean;
    smooth?: boolean | string;
    offset?: number;
    duration?: number | string;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    children?: React.ReactNode;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  }

  export class Link extends React.Component<LinkProps> {}
  
  export namespace scroller {
    export function scrollTo(
      name: string,
      options?: {
        duration?: number;
        delay?: number;
        smooth?: boolean;
        offset?: number;
        containerId?: string;
      }
    ): void;
  }

  export namespace animateScroll {
    export function scrollToTop(options?: {
      duration?: number;
      delay?: number;
      smooth?: boolean;
    }): void;
    export function scrollToBottom(options?: {
      duration?: number;
      delay?: number;
      smooth?: boolean;
    }): void;
    export function scrollTo(toPosition: number, options?: {
      duration?: number;
      delay?: number;
      smooth?: boolean;
    }): void;
    export function scrollMore(distance: number, options?: {
      duration?: number;
      delay?: number;
      smooth?: boolean;
    }): void;
  }

  export function Element(props: {
    name: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }): JSX.Element;

  export namespace Events {
    export function scrollEvent: {
      register(eventName: string, callback: (boolean) => void): void;
      remove(eventName: string): void;
    };
  }
}
