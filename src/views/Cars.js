import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'

export default function Car() {
    const [carData, setCarData] = useState({})
    const [loadingState, setLoadingState] = useState("LOADING")
    const [carId, setCarId] = useState(1)
    const [currSearch, setCurrSearch] = useState(null)
    const { getCarData } = useContext(DataContext)
    
    useEffect(() => {
        async function handleLoad() {
            const data = await getCarData(carId)
            setCarData(data)
            setLoadingState("LOADED")
        }
        handleLoad()

    }, [carId])

    function incrementCarId(incrementor) {
        setCarId(Number(carId) + incrementor)
        setCurrSearch(carId + incrementor)
        
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        setCarId(currSearch)
    }

    return (
        <div>
            <h1>Cars</h1>
            <form onSubmit={handleFormSubmit}>
                <input 
                    name="name" 
                    id="id" 
                    min={1} 
                    max={15}
                    value={currSearch}
                    onChange={(event) => setCurrSearch(parseInt(event.target.value))}
                />
                <button>Search</button>
            </form>
            {
                (loadingState === "LOADING") ?
                <p>Loading...</p> :
                <div className='car'>
                    <h2>{carData.name}</h2>
                    <p>ID: {carData.id}</p>
                    <p>Year: {carData.year}</p>
                    <p>Selling Price: {carData.selling_price}</p>
                    <p>Miles Driven: {carData.km_driven}</p>
                    <p>Fuel: {carData.fuel}</p>
                    <p>Seller Type: {carData.seller_type}</p>
                    <p>Transmission: {carData.transmission}</p>
                    <p>Owner: {carData.owner}</p>
                    <p>Mileage: {carData.mileage}</p>
                    <p>Engine: {carData.engine}</p>
                    <p>Max Power: {carData.max_power}</p>
                    <p>Torque: {carData.torque}</p>
                    <p>Seats: {carData.seats}</p>

                    {
                        (carId > 1) ?
                        <button onClick={() => incrementCarId(-1)}>Previous</button> :
                        <></>
                    }
                    <button onClick={() => incrementCarId(1)}>Next</button>
                </div>
            }
            
        </div>
    )

}