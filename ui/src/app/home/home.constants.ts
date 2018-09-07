import { appRouteConstants } from '../app.constants';

// buttons
const btnSettings = {
    id: 0,
    route: `/${appRouteConstants.settings}`,
    icon: {
        name: 'settings',
        style: {
            'text-align': 'center',
            'font-size': '50px'
        }
    },
    label: {
        name: 'SETTINGS',
        style: {
            'text-align': 'center',
            'font-size': '20px'
        }
    },
};

const btnBills = {
    id: 1,
    route: `/${appRouteConstants.bills}`,
    icon: {
        name: 'credit_card',
        style: {
            'text-align': 'center',
            'font-size': '50px'
        }
    },
    label: {
        name: 'BILLS',
        style: {
            'text-align': 'center',
            'font-size': '20px'
        }
    }
};

const btnChores = {
    id: 2,
    route: `/${appRouteConstants.chores}`,
    icon: {
        name: 'shopping_basket',
        style: {
            'text-align': 'center',
            'font-size': '50px'
        }
    },
    label: {
        name: 'CHORES',
        style: {
            'text-align': 'center',
            'font-size': '20px'
        }
    }
};

const btnHuniTodo = {
    id: 3,
    route: `/${appRouteConstants.huniTodo}`,
    icon: {
        name: 'today',
        style: {
            'text-align': 'center',
            'font-size': '50px'
        }
    },
    label: {
        name: 'HUNI TODO',
        style: {
            'text-align': 'center',
            'font-size': '20px'
        }
    }
};

const buttons = [btnSettings, btnBills, btnChores, btnHuniTodo];
export { buttons };