const listhelper = require('./utils/list_helper')
test('dummy returns one',()=>{
const blogs =[
    {
        "tilte":"Hello world 1",
        "author":"Suroz Suroz",
        "url":"http://localhost:3001/api/blogs",
        "likes":1
    },
    {
        "tilte":"Hello world 2",
        "author":"Suroz Suroz",
        "url":"http://localhost:3001/api/blogs",
        "likes":1
    },
    {
        "tilte":"Hello world 3",
        "author":"Suroz Suroz",
        "url":"http://localhost:3001/api/blogs",
        "likes":1
    },
    {
        "tilte":"Hello world 4",
        "author":"Suroz Suroz",
        "url":"http://localhost:3001/api/blogs",
        "likes":1
    }
]
    const result = listhelper.dummy(blogs)
    expect(result).toBe(1)

})