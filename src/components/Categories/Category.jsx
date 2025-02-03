import React from 'react'
import CategoryItem from './CategoryItem'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { config } from '../../config/config'


export default function Category() {

    const { data, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get(`${config.url}/api/show/categories`);
            return res.data;
        },
    });

       
    
        if (isLoading) return "dfsdf"

    return (
        <div className='mb-10'>
            <h1 className='text-center font-bold text-yellow-600 text-2xl mb-10 '>Our Categories</h1>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-1'>
                {data?.map((item) =>
                    <CategoryItem
                        link={`/category/meals/${item._id}/${encodeURIComponent(item.title)}`}
                        title={item.title}
                        image={`${config.url}/uploads/${item.image}`}
                    />
                )}
            </div>
        </div>
    )
}
