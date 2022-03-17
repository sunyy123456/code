## json-server
    搭建：
        https://github.com/typicode/json-server
        * 安装： npm install -g json-server
        * 创建一个db.json文件
            ```
            {
                "posts": [
                    {
                        "id": 1,
                        "title": "json-server",
                        "author": "typicode"
                    }
                ],
                "comments": [
                    {
                        "id": 1,
                        "body": "some comment",
                        "postId": 1
                    }
                ],
                "profile": {
                    "name": "typicode"
                }
            }
            ```
        * 启动命令服务 json-server --watch db.json(启动时的文件目录应为db.json所在的文件夹)
                发现直接在vcCode终端输入改命令会报错，解决方法
                    * 在cmd中输入改命令
                    * 在vsCode中输入该命令前加npx（即 npx json-server --watch db.json）
            GET    /posts
            GET    /posts/1
            POST   /posts
            PUT    /posts/1
            PATCH  /posts/1
            DELETE /posts/1