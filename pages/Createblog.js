// Createblog.js

'use client';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/Components/Navbar';
import { useRouter } from 'next/router';



const Createblog = () => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const initialBlogs = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('myData')) || [] : [];
    const [data, setData] = useState(initialBlogs);
    const router = useRouter() 

    useEffect(() => {
        // Save habits to localStorage whenever they change
        
    }, [data]);

    const addData = () => {
        const currentDate = new Date().toLocaleDateString();
        
        const newData =
        {
            id: data.length + 1,
            author: author,
            date: currentDate,
            title: title,
            description: description,
            imageUrl : imageUrl === '' ? 'images/no_image.jpeg' : imageUrl 
            
        };
        const updatedData = [...data, newData];
        localStorage.setItem('myData', JSON.stringify(updatedData));
        setAuthor('');
        setTitle('');
        setDescription('');
        setImageUrl('');
        router.back()

    };

    return (
        <div>
            <Navbar />
            <div className="container bg-light" 
                 style={{ marginTop: '5rem' }}>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            className="form-control mb-2"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Image URL"
                            value={imageUrl}
                            onChange={(e) =>setImageUrl(e.target.value)}
                        />
                        <button onClick={addData} 
                                className="btn btn-primary mb-2">
                            Add Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Createblog;
