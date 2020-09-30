import {

    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    TeamOutlined
} from '@ant-design/icons'

const menus =[
    {
        title:"我厨首页",
        key:"/home",
        icon:UserOutlined,
        // permission:[1,2,3]
    },
    {
        title:"用户管理",
        key:"/UserList",
        icon:VideoCameraOutlined,
        // permission:[3],
        children:[
            {
                title:"用户列表",
                key:"/UserList/users",
                icon:UserOutlined,
                // permission:[3]
            },
            {
                title:"前台用户管理",
                key:"/UserList/frontdeskusers",
                icon:UserOutlined,
                // permission:[3]
            }
        ]
    },
    {
        title:"菜品管理",
        key:"/foodinformation",
        icon:UploadOutlined,
        // permission:[3],
        children:[
            {
                title:"菜品列表",
                key:"/foodinformation/management",
                icon:UserOutlined,
                // permission:[3]
            }
        ]
    },
    {
        title:"菜品展示管理",
        key:"/footshow",
        icon:TeamOutlined,
        // permission:[3],
        children:[
            {
                title:"菜品展示",
                key:"/footshow/footshow",
                icon:UserOutlined,
                // permission:[3]
            }
        ]
    },

]

export default menus