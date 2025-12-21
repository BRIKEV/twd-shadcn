import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Home";
import AccordionPage from "./pages/AccordionPage";
import AlertDialogPage from "./pages/AlertDialogPage";
import BreadcrumbPage from "./pages/BreadcrumbPage";
import ButtonPage from "./pages/ButtonPage";
import CalendarPage from "./pages/CalendarPage";
import CheckboxPage from "./pages/CheckboxPage";
import CollapsiblePage from "./pages/CollapsiblePage";
import CommandPage from "./pages/CommandPage";
import ContextMenuPage from "./pages/ContextMenuPage";
import DialogPage from "./pages/DialogPage";
import DrawerPage from "./pages/DrawerPage";
import DropdownMenuPage from "./pages/DropdownMenuPage";
import PaginationPage from "./pages/PaginationPage";
import PopoverPage from "./pages/PopoverPage";
import RadioGroupPage from "./pages/RadioGroupPage";
import SelectPage from "./pages/SelectPage";
import SliderPage from "./pages/SliderPage";
import SonnerPage from "./pages/SonnerPage";
import SwitchPage from "./pages/SwitchPage";
import TablePage from "./pages/TablePage";
import TabsPage from "./pages/TabsPage";
import TooltipPage from "./pages/TooltipPage";

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
]);

export default router;