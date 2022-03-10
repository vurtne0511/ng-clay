import { Routes } from '@angular/router';

export const COMPONENTS_GROUPS = [
  'General',
  'Forms',
  'Layer',
  'Data'
];

export const COMPONENTS_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'getting-starter',
    pathMatch: 'full'
  },
  {
    path: 'getting-starter',
    // loadChildren: () => import('./_getting-starter/getting-starter.module').then(mod => mod.GettingStarterModule),
    data: { title: 'Getting Starter' }
  },
  {
    path: 'changelog',
    // loadChildren: () => import('./_changelog/changelog.module').then(mod => mod.ChangelogModule),
    data: { title: 'Changelog' }
  },
  {
    path: 'autocomplete',
    // loadChildren: () => import('./autocomplete/autocomplete.module').then(mod => mod.AutocompleteDocumentModule),
    data: { title: 'Autocomplete', group: COMPONENTS_GROUPS[1] }
  },
  {
    path: 'avatar',
    // loadChildren: () => import('./avatar/avatar.module').then(mod => mod.AvatarDocumentModule),
    data: { title: 'Avatar', group: COMPONENTS_GROUPS[0] }
  },
  {
    path: 'badge',
    // loadChildren: () => import('./badge/badge.module').then(mod => mod.BadgeDocumentModule),
    data: { title: 'Badge', group: COMPONENTS_GROUPS[0] }
  },
  {
    path: 'breadcrumbs',
    // loadChildren: () => import('./breadcrumbs/breadcrumbs.module').then(mod => mod.BreadcrumbsDocumentModule),
    data: { title: 'Breadcrumbs', group: COMPONENTS_GROUPS[0] }
  },
  {
    path: 'button',
    loadChildren: () => import('./button/button.module').then(mod => mod.ButtonDocumentModule),
    data: { title: 'Button', group: COMPONENTS_GROUPS[0] }
  },
  {
    path: 'callout',
    // loadChildren: () => import('./callout/callout.module').then(mod => mod.CalloutDocumentModule),
    data: { title: 'Callout', group: COMPONENTS_GROUPS[0] }
  },
  {
    path: 'checkbox',
    // loadChildren: () => import('./checkbox/checkbox.module').then(mod => mod.CheckboxDocumentModule),
    data: { title: 'Checkbox', group: COMPONENTS_GROUPS[1] }
  },
  {
    path: 'contextmenu',
    data: { title: 'ContextMenu', group: COMPONENTS_GROUPS[2] },
    // loadChildren: () => import('./contextmenu/contextmenu.module').then(mod => mod.ContextMenuDocumentModule)
  },
  {
    path: 'datepicker',
    // loadChildren: () => import('./datepicker/datepicker.module').then(mod => mod.DatePickerDocumentModule),
    data: { title: 'DatePicker', group: COMPONENTS_GROUPS[1] }
  },
  {
    path: 'drawer',
    data: { title: 'Drawer', group: COMPONENTS_GROUPS[2] },
    // loadChildren: () => import('./drawer/drawer.module').then(mod => mod.DrawerDocumentModule)
  },
  {
    path: 'dropdown',
    // loadChildren: () => import('./dropdown/dropdown.module').then(mod => mod.DropdownDocumentModule),
    data: { title: 'Dropdown', group: COMPONENTS_GROUPS[2] }
  },
  {
    path: 'forms',
    // loadChildren: () => import('./forms/forms.module').then(mod => mod.FormsDocumentModule),
    data: { title: 'Forms', group: COMPONENTS_GROUPS[1] }
  },
  {
    path: 'attachment',
    // loadChildren: () => import('./attachment/attachment.module').then(mod => mod.AttachmentDocumentModule),
    data: { title: 'Attachment', group: COMPONENTS_GROUPS[1] }
  },
  {
    path: 'input',
    // loadChildren: () => import('./input/input.module').then(mod => mod.InputDocumentModule),
    data: { title: 'Input', group: COMPONENTS_GROUPS[1] }
  },
  {
    path: 'label',
    // loadChildren: () => import('./label/label.module').then(mod => mod.LabelDocumentModule),
    data: { title: 'Label', group: COMPONENTS_GROUPS[0] }
  },
  {
    path: 'menu',
    // loadChildren: () => import('./menu/menu.module').then(mod => mod.MenuDocumentModule),
    data: { title: 'Menu', group: COMPONENTS_GROUPS[0] }
  },
  {
    path: 'modal',
    // loadChildren: () => import('./modal/modal.module').then(mod => mod.ModalDocumentModule),
    data: { title: 'Modal', group: COMPONENTS_GROUPS[2] }
  },
  {
    path: 'notifier',
    // loadChildren: () => import('./notifier/notifier.module').then(mod => mod.NotifierDocumentModule),
    data: { title: 'Nofitier', group: COMPONENTS_GROUPS[2] }
  },
  {
    path: 'pagination',
    // loadChildren: () => import('./pagination/pagination.module').then(mod => mod.PaginationDocumentModule),
    data: { title: 'Pagination', group: COMPONENTS_GROUPS[0] }
  },
  {
    path: 'popconfirm',
    // loadChildren: () => import('./popconfirm/popconfirm.module').then(mod => mod.PopconfirmDocumentModule),
    data: { title: 'Popconfirm', group: COMPONENTS_GROUPS[2] }
  },
  {
    path: 'popover',
    // loadChildren: () => import('./popover/popover.module').then(mod => mod.PopoverDocumentModule),
    data: { title: 'Popover', group: COMPONENTS_GROUPS[2] }
  },
  {
    path: 'picture',
    // loadChildren: () => import('./picture/picture.module').then(mod => mod.PictureDocumentModule),
    data: { title: 'Picture', group: COMPONENTS_GROUPS[1] }
  },
  {
    path: 'progress',
    // loadChildren: () => import('./progress/progress.module').then(mod => mod.ProgressDocumentModule),
    data: { title: 'Progress', group: COMPONENTS_GROUPS[0] }
  },
  {
    path: 'radio',
    // loadChildren: () => import('./radio/radio.module').then(mod => mod.RadioDocumentModule),
    data: { title: 'Radio', group: COMPONENTS_GROUPS[1] }
  },
  {
    path: 'scrim',
    // loadChildren: () => import('./scrim/scrim.module').then(mod => mod.ScrimDocumentModule),
    data: { title: 'Scrim', group: COMPONENTS_GROUPS[3] }
  },
  {
    path: 'select',
    // loadChildren: () => import('./select/select.module').then(mod => mod.SelectDocumentModule),
    data: { title: 'Select', group: COMPONENTS_GROUPS[1] }
  },
  {
    path: 'slider',
    // loadChildren: () => import('./slider/slider.module').then(mod => mod.SliderDocumentModule),
    data: { title: 'Slider', group: COMPONENTS_GROUPS[1] }
  },
  {
    path: 'switch',
    // loadChildren: () => import('./switch/switch.module').then(mod => mod.SwitchDocumentModule),
    data: { title: 'Switch', group: COMPONENTS_GROUPS[0] }
  },
  {
    path: 'table',
    // loadChildren: () => import('./table/table.module').then(mod => mod.TableDocumentModule),
    data: { title: 'Table', group: COMPONENTS_GROUPS[3] }
  },
  {
    path: 'tooltip',
    // loadChildren: () => import('./tooltip/tooltip.module').then(mod => mod.TooltipDocumentModule),
    data: { title: 'Tooltip', group: COMPONENTS_GROUPS[2] }
  },
  {
    path: 'tree',
    // loadChildren: () => import('./tree/tree.module').then(mod => mod.TreeDocumentModule),
    data: { title: 'Tree', group: COMPONENTS_GROUPS[3] }
  },
  // {
  //   path: 'markdown',
  //   data: { title: 'Markdown 块', group: COMPONENTS_GROUPS[4] },
  //   // loadChildren: () => import('./markdown/markdown.module').then(mod => mod.MarkdownDocumentModule)
  // },
  // {
  //   path: 'markdown-editor',
  //   data: { title: 'Markdown 编辑器', group: COMPONENTS_GROUPS[4] },
  //   // loadChildren: () => import('./markdown-editor/markdown-editor.module').then(mod => mod.MarkdownEditorDocumentModule)
  // },
];
