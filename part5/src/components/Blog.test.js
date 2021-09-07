import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'
test('renders only title and author',() => {
    const blog = {
        title:'Testing Blog',
        author:'Tester',
        url:'tester',
        like:10
    }
    const fn = () => {
        return  null
    }
    const component = render(
        <Blog blog={blog} reloder={fn}/>
    )
    expect(component.container).toHaveTextContent(
        'Testing Blog Tester'
    )
})