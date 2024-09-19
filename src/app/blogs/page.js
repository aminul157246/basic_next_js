
import Link from "next/link";

const BlogPage = () => {
    
    return (
        <div className="h-screen  text-2xl">
            {
                blogs.map(blog => <div key={blog.id} ><ul>- {blog.title}
                    <span className="bg-white  text-gray-800 px-2"><Link href={`/blogs/${blog.id}`}>Details</Link></span>
                </ul></div>)
            }
        </div>
    );
};

export default BlogPage;

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
