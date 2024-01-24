export const navData = [
  {
    routerlink: 'dashboard',
    icon: 'fa-solid fa-house',
    label: 'Dashboard',
  },
  {
    routerlink: 'projects',
    icon: 'fa-solid fa-diagram-project',
    label: 'Projects',
  },
  {
    routerlink: 'teams',
    icon: 'fa-solid fa-people-group',
    label: 'Teams',
  },
  {
    routerlink: 'projectManagement',
    icon: 'fa-solid fa-bars-progress',
    label: 'Projects Management',
  },
  {
    routerlink: 'bindingManagement',
    icon: 'fa-solid fa-window-restore',
    label: 'Binding Management',
    items: [
      {
        label: 'Estimation',
        routerlink: 'bindingManagement/estimation',
      },
      {
        label: 'Quantity Survey',
        routerlink: 'bindingManagement/survey',
      },
    ],
  },

  {
    routerlink: 'onSite',
    icon: 'fa-solid fa-earth-americas',
    label: 'On Site',
  },
  {
    routerlink: 'contracts',
    icon: 'fa-solid fa-file-contract',
    label: 'Contracts',
  },
  {
    routerlink: 'hr',
    icon: 'fa-solid fa-user-gear',
    label: 'HR',
    items: [
      {
        label: 'Position',
        routerlink: 'hr/pos',
      },
      {
        label: 'Inventory',
        routerlink: 'hr/inventory',
      },
    ],
  },
  {
    routerlink: 'invoices',
    icon: 'fa-solid fa-file-invoice-dollar',
    label: 'Invoices',
  },
  {
    routerlink: 'accounting',
    icon: 'fa-solid fa-calculator',
    label: 'Accounting',
  },

  {
    routerlink: 'settings',
    icon: 'fa-solid fa-gears',
    label: 'Settings',
  },
];
