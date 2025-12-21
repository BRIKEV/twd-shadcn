import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import Homepage from "./pages/Home";

// Lazy load all component pages
const AccordionPage = lazy(() => import("./pages/AccordionPage"));
const AlertDialogPage = lazy(() => import("./pages/AlertDialogPage"));
const BreadcrumbPage = lazy(() => import("./pages/BreadcrumbPage"));
const ButtonPage = lazy(() => import("./pages/ButtonPage"));
const CalendarPage = lazy(() => import("./pages/CalendarPage"));
const CheckboxPage = lazy(() => import("./pages/CheckboxPage"));
const CollapsiblePage = lazy(() => import("./pages/CollapsiblePage"));
const CommandPage = lazy(() => import("./pages/CommandPage"));
const ContextMenuPage = lazy(() => import("./pages/ContextMenuPage"));
const DataTablePage = lazy(() => import("./pages/DataTablePage"));
const DialogPage = lazy(() => import("./pages/DialogPage"));
const DrawerPage = lazy(() => import("./pages/DrawerPage"));
const DropdownMenuPage = lazy(() => import("./pages/DropdownMenuPage"));
const PaginationPage = lazy(() => import("./pages/PaginationPage"));
const PopoverPage = lazy(() => import("./pages/PopoverPage"));
const RadioGroupPage = lazy(() => import("./pages/RadioGroupPage"));
const SelectPage = lazy(() => import("./pages/SelectPage"));
const SliderPage = lazy(() => import("./pages/SliderPage"));
const SonnerPage = lazy(() => import("./pages/SonnerPage"));
const SwitchPage = lazy(() => import("./pages/SwitchPage"));
const TablePage = lazy(() => import("./pages/TablePage"));
const TabsPage = lazy(() => import("./pages/TabsPage"));
const TooltipPage = lazy(() => import("./pages/TooltipPage"));

const getBasename = () => {
  const isProd = import.meta.env.PROD;
  return isProd ? '/twd-shadcn/' : '/';
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "/accordion",
    Component: AccordionPage,
  },
  {
    path: "/alert-dialog",
    Component: AlertDialogPage,
  },
  {
    path: "/breadcrumb",
    Component: BreadcrumbPage,
  },
  {
    path: "/button",
    Component: ButtonPage,
  },
  {
    path: "/calendar",
    Component: CalendarPage,
  },
  {
    path: "/checkbox",
    Component: CheckboxPage,
  },
  {
    path: "/collapsible",
    Component: CollapsiblePage,
  },
  {
    path: "/command",
    Component: CommandPage,
  },
  {
    path: "/context-menu",
    Component: ContextMenuPage,
  },
  {
    path: "/data-table",
    Component: DataTablePage,
  },
  {
    path: "/dialog",
    Component: DialogPage,
  },
  {
    path: "/drawer",
    Component: DrawerPage,
  },
  {
    path: "/dropdown-menu",
    Component: DropdownMenuPage,
  },
  {
    path: "/pagination",
    Component: PaginationPage,
  },
  {
    path: "/popover",
    Component: PopoverPage,
  },
  {
    path: "/radio-group",
    Component: RadioGroupPage,
  },
  {
    path: "/select",
    Component: SelectPage,
  },
  {
    path: "/slider",
    Component: SliderPage,
  },
  {
    path: "/sonner",
    Component: SonnerPage,
  },
  {
    path: "/switch",
    Component: SwitchPage,
  },
  {
    path: "/table",
    Component: TablePage,
  },
  {
    path: "/tabs",
    Component: TabsPage,
  },
  {
    path: "/tooltip",
    Component: TooltipPage,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  }
], { basename: getBasename() });

export default router;