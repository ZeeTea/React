import { useState, useEffect, useContext } from 'react'
import Cars from './Cars'
import { useParams } from 'react-router-dom'
import { DataContext } from '../contexts/DataProvider'
import Post from '../components/Post'


export default function PostSingle() {
    const { id } = useParams()
    const [post, setPost] = useState({})
    const [error, setError] = useState(false)
    const { getPost } = useContext(DataContext)
  
    useEffect(() => {
      async function handleLoad() {
        try {
          const data = await getPost(id)
          setPost(data)
        } catch (error) {
          setError(true)
        }
      }
      handleLoad()
    }, [id, getPost])
  
    return (
      <div>
        {post.car && (
          <>
            <h1>Car Post: {id}</h1>
            <h2>{post.car.name}</h2>
            <p>ID: {post.car.id}</p>
            <p>Year: {post.car.year}</p>
            <p>Selling Price: {post.car.selling_price}</p>
            <p>Miles Driven: {post.car.km_driven}</p>
            <p>Fuel: {post.car.fuel}</p>
            <p>Seller Type: {post.car.seller_type}</p>
            <p>Transmission: {post.car.transmission}</p>
            <p>Owner: {post.car.owner}</p>
            <p>Mileage: {post.car.mileage}</p>
            <p>Engine: {post.car.engine}</p>
            <p>Max Power: {post.car.max_power}</p>
            <p>Torque: {post.car.torque}</p>
            <p>Seats: {post.car.seats}</p>
          </>
        )}
        {error && (
          <>
            <h2>404 Not Found</h2>
            <p>Post with id {id} could not be found</p>
          </>
        )}
      </div>
    );
  }
  
