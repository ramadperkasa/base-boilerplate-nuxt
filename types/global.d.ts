import type { VueI18n } from "vue-i18n";

import type {
  Accordion,
  Carousel,
  Collapse,
  Dial,
  Dismiss,
  Drawer,
  Dropdown,
  Modal,
  Popover,
  Tabs,
  Tooltip,
  InputCounter,
  CopyClipboard,
  Datepicker,
} from "flowbite";

declare module "flowbite/plugin";

declare module "*.vue";

type FlowbiteModules = {
  default: typeof import("flowbite");
  Accordion: Accordion;
  Carousel: Carousel;
  Collapse: Collapse;
  Dial: Dial;
  Dismiss: Dismiss;
  Drawer: Drawer;
  Dropdown: Dropdown;
  Modal: Modal;
  Popover: Popover;
  Tabs: Tabs;
  Tooltip: Tooltip;
  InputCounter: InputCounter;
  CopyClipboard: CopyClipboard;
  Datepicker: Datepicker;
  initAccordions: () => void;
  initCarousels: () => void;
  initCollapses: () => void;
  initDials: () => void;
  initDismisses: () => void;
  initDrawers: () => void;
  initDropdowns: () => void;
  initModals: () => void;
  initPopovers: () => void;
  initTabs: () => void;
  initTooltips: () => void;
  initInputCounters: () => void;
  initCopyClipboards: () => void;
  initDatepickers: () => void;
  initFlowbite: () => void;
};

declare module "@/composables/useFlowbite" {
  export function useFlowbite(
    callback: (flowbite?: FlowbiteModules) => void
  ): void;
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<object, object, unknown>;
  export default component;
}

declare module "@vite/client" {
  export * from "@vite/client";
}

declare module "nuxt/config" {
  interface NuxtConfig {
    i18n?: VueI18n.Options;
  }
}