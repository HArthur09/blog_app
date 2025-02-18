// pages/[id].js

import React,
{
    useEffect,
    useState
} from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const BlogDetails = () => {

    const [blogDetail, setBlogDetail] = useState({});
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        const blogs = JSON.parse(localStorage.getItem('myData'));
        const selectedBlog=blogs.find(blog => blog.id === parseInt(id));
        setBlogDetail(selectedBlog);
    }, [id]);
    

    return (
        <div className="container bg-light" 
             style={{ marginTop: '5rem' }}>
            <Navbar />
            <div className="card mt-5">
                <div className="card-img-top">
                <Image src={blogDetail === undefined ? '/images/no_image.jpeg' : blogDetail.imageUrl}
                    className="card-img-top" alt="Blog" width={300} height={300}/>
                </div>
                
                <div className="card-body">
                    <h1 className="card-title">{blogDetail === undefined ? 'error' : blogDetail.title}</h1>
                    <p className="card-text">
                        {blogDetail === undefined ? 'error' : blogDetail.description}
                    </p>
                    <p className="card-text">
                        Author: {blogDetail === undefined ? 'error' : blogDetail.author}
                    </p>
                    <p className="card-text">Date: {blogDetail === undefined ? 'error' : blogDetail.date}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
