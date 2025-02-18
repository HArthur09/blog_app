import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Carts = ({item}) => {
  return (
    <div className="card mb-3">
        <div className="card-img-top">
            <Image src={item.imageUrl} alt="Blog" fill/>
        </div>
        <div className="card-body">
            <h5 className="card-title">
                {item.title}
            </h5>
            <p className="card-text">
                {item.description}
            </p>
            <div className="d-flex justify-content-between 
                align-items-center row">
                <div>
                    <p className="m-0 small col">
                        {"posted by "}
                        {item.author}
                    </p>
                    <small className="text-muted">
                        {item.date}
                    </small>
                </div>
            </div>
            <Link href={`/blog/${item.id}`}>
                <button className='btn btn-primary'>
                    Read more
                </button>
            </Link>
            <div>
                <button className='btn btn-danger' onClick={() => deleteBlog(item.id)}>
                    Delete
                </button>
            </div>
        </div>
    </div>
  )
}

export default Carts