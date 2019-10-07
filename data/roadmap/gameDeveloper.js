const gameDeveloper = {
    name: 'Game Developer',
    children: [
        {
            name: 'Client Programmer',
            children: [
                {
                    name: 'Game Engines',
                    children: [
                        {name: 'Unreal'},
                        {name: 'Unity'},
                        {name: 'Cocos2d-x'},
                        {name: 'GameMaker'}
                    ]
                },
                {
                    name: 'Languages',
                    children: [
                        {name: 'C/C++'},
                        {name: 'Lua'},
                        {name: 'JavaScript'},
                        {name: 'Python'}
                    ]
                }
            ]
        },
        {
            name: 'Server Programmer',
            children: [
                {name: 'Socket Programming'},
                {name: 'TCP/UDP'},
                {name: 'Database'}
            ]
        },
        {name: 'Designer'}
    ]
}

export default gameDeveloper;