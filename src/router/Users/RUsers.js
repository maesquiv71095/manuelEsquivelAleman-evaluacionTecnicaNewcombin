import Home from '../../views/Users/VHome.vue'
import Panel from '../../views/Users/VPanel.vue'

const USERS_ROUTES = [
    {
        path: '/',
        name: 'home',
        meta: { 
            title: "Home"
        },
        component: Home
    },
    {
        path: '/Panel',
        name: 'panel',
        meta: { 
            title: "Panel"
        },
        component: Panel
    },
]

export default USERS_ROUTES;