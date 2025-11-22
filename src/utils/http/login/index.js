import http from "@/utils/http/http.js";

export function getMenuList() {
    // 返回Promise以支持async/await
    return new Promise((resolve, reject) => {
        // 模拟API请求
        setTimeout(() => {
            const menuData = [
                {
                    "menuId": 214,
                    "parentId": 0,
                    "name": "首页管理",
                    "url": null,
                    "type": 0,
                    "icon": "Present",
                    "list": [
                        {
                            "menuId": 217,
                            "parentId": 214,
                            "name": "首页配置",
                            "url": "index",
                            "type": 1,
                            "icon": "Setting",
                        }
                    ]
                },
                {
                    "menuId": 215,
                    "parentId": 0,
                    "name": "404管理",
                    "url": null,
                    "type": 0,
                    "icon": "Present",
                    "list": [
                        {
                            "menuId": 218,
                            "parentId": 215,
                            "name": "简化配置",
                            "url": "404/index",
                            "type": 1,
                            "icon": "Setting",
                        }
                    ]
                },
            {
                "menuId": 216,
                "parentId": 0,
                "name": "更新资源",
                "url": null,
                "type": 0,
                "icon": "Present",
                "list": [
                {
                    "menuId": 219,
                    "parentId": 216,
                    "name": "上传漫画",
                    "url": "UpdateResource/UpdateResource",
                    "type": 1,
                    "icon": "Setting",
                }
            ]
            }
            // {
            //     "menuId": 220,
            //     "parentId": 0,
            //     "name": "编辑管理",
            //     "url": "edit",
            //     "type": 0,
            //     "icon": "Edit",
            //     "list": [
            //         {
            //             "menuId": 221,
            //             "parentId": 220,
            //             "name": "编辑页面",
            //             "url": "admin-edits/admin-edit",
            //             "type": 1,
            //             "icon": "Setting",
            //         }
            //     ]
            // }
            ];
            console.log('获取菜单数据:', menuData);
            resolve(menuData);
        }, 100);
    });
}

export function login(loginData) {
    return new Promise((resolve, reject) => {
        http.post('/api/admin/login').then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export default {
    getMenuList,
    login
};