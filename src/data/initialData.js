export const initialData = {
    categories: [
        {
            id: 'cspm',
            name: 'CSPM Executive Dashboard',
            widgets: [
                {
                    id: 'cloud-accounts',
                    name: 'Cloud Accounts',
                    content: 'Connected (2)\nNot Connected (2)',
                    type: 'cspm'
                },
                {
                    id: 'cloud-account-risk',
                    name: 'Cloud Account Risk Assessment',
                    content: '9659\nFalse (1889)\nVoming (680)\nNot available (36)\nPosted (7253)',
                    type: 'cspm'
                }
            ]
        },
        {
            id: 'cwpp',
            name: 'CWPP Dashboard',
            widgets: [
                {
                    id: 'top-alerts',
                    name: 'Top 8 Namespace Specific Alerts',
                    content: 'No Graph data available!',
                    type: 'cwpp'
                },
                {
                    id: 'workload-alerts',
                    name: 'Workload Alerts',
                    content: 'No Graph data available!',
                    type: 'cwpp'
                }
            ]
        },
        {
            id: 'registry',
            name: 'Registry Scan',
            widgets: [
                {
                    id: 'image-risk',
                    name: 'Image Risk Assessment',
                    content: 'IATO: Total Vulnerabilities\nCritical (4)\nHigh (400)\nLow (300)',
                    type: 'image'
                },
                {
                    id: 'image-security',
                    name: 'Image Security Issues',
                    content: '1. Load Images\n2. Critical (4)\n3. High (2)\n4. Add Widget',
                    type: 'image'
                }
            ]
        }
    ],
    allWidgets: [
        {
            id: 'cloud-accounts',
            name: 'Cloud Accounts',
            content: 'Connected (2)\nNot Connected (2)',
            type: 'cspm'
        },
        {
            id: 'cloud-account-risk',
            name: 'Cloud Account Risk Assessment',
            content: '9659\nFalse (1889)\nVoming (680)\nNot available (36)\nPosted (7253)',
            type: 'cspm'
        },
        {
            id: 'top-alerts',
            name: 'Top 8 Namespace Specific Alerts',
            content: 'No Graph data available!',
            type: 'cwpp'
        },
        {
            id: 'workload-alerts',
            name: 'Workload Alerts',
            content: 'No Graph data available!',
            type: 'cwpp'
        },
        {
            id: 'image-risk',
            name: 'Image Risk Assessment',
            content: 'IATO: Total Vulnerabilities\nCritical (4)\nHigh (400)\nLow (300)',
            type: 'image'
        },
        {
            id: 'image-security',
            name: 'Image Security Issues',
            content: '1. Load Images\n2. Critical (4)\n3. High (2)\n4. Add Widget',
            type: 'image'
        },
        {
            id: 'ticket-1',
            name: 'Ticket Status',
            content: 'Open: 5\nIn Progress: 3\nClosed: 12',
            type: 'ticket'
        }
    ]
};