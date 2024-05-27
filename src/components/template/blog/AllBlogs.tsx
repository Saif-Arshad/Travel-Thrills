"use client"

import BlogCard from '@/components/cards/BlogCard';
import React from 'react';
import { useSelector } from 'react-redux';

function AllBlogs() {
    const allBlogs = useSelector((state: any) => state.blogData.allBlogs);

    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-10/12 md-9/12  py-5 '>
                <h1 className='text-2xl md:text-5xl font-extrabold  w-full text-end '>Travel Articles</h1>

                <div className="w-full ">
                    {allBlogs.map((item: any, index: number) => (
                        <BlogCard 
                            key={index} 
                            blog={item} 
                            layoutClass={index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllBlogs;
