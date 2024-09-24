declare module '@getstreamline/modern-menu' {
  export interface MenuOptions {
    role?: string;
    focusContainer?: boolean;
  }

  export class ModernMenu {
    constructor(element: Element, options?: MenuOptions);

    element: Element;
    role: string;
    focusContainer: boolean;
    items: MenuItem[];
    openIndex: number;
    hoverMode: boolean;
    hoverIntent: boolean;
    orientation: 'horizontal' | 'vertical';
    prevActiveElement: Element | null;

    setActiveElement(element: Element): void;
    setOrientation(): void;
    setHoverMode(): void;
    setOpenIndex(index: number): void;
    update(): void;
    focusFirstItem(): void;
  }

  export interface MenuItem {
    menu: ModernMenu;
    element: Element;
    link: HTMLAnchorElement;
    open: boolean;
    submenu?: ModernMenu;
    toggle?: HTMLButtonElement;

    setOpen(open: boolean): void;
    update(): void;
    focus(): void;
  }

  export default ModernMenu;
}
