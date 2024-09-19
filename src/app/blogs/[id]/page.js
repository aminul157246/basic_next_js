import React from 'react';

const BlogDetails = ({params}) => {
    console.log(params);
    const {title, description} = blogs.find(blog => blog.id == params.id )
    
    return (
        <div className="h-screen p-24 space-y-1">
            <h1 className='text-3xl'>Blog Details</h1>
            <h3 className='text-xl'>{title}</h3>
            <p>{description}</p>
            
        </div>
    );
};

export default BlogDetails;













const blogs = [
    {
        "id": 1,
        "title": "Understanding Next.js: A Beginner's Guide",
        "description": "Learn the core concepts of Next.js and how to get started with building server-rendered React applications using this powerful framework."
    },
    {
        "id": 2,
        "title": "10 Tips for Optimizing Performance in React Apps",
        "description": "Discover essential techniques and best practices to improve the performance of your React applications, from lazy loading to memoization and more."
    },
    {
        "id": 3,
        "title": "Exploring the Future of Web Development: Trends to Watch in 2024",
        "description": "Stay ahead of the curve by exploring the emerging trends and technologies shaping the future of web development, including AI integration and WebAssembly."
    },
    {
        "id": 4,
        "title": "Mastering CSS Grid Layout: Building Responsive Web Pages",
        "description": "A comprehensive guide to CSS Grid Layout, explaining how to create fully responsive web pages with ease, and examples to enhance your layouts."
    },
    {
        "id": 5,
        "title": "The Power of TypeScript in Front-End Development",
        "description": "An in-depth look at how TypeScript enhances front-end development by providing strong typing, better debugging, and improved maintainability in large-scale applications."
    }
]
