import { useState } from 'react'
import Counter from '../components/Counter';

export default function Inventory() {
    const [counter, setCounter] = useState([
        {
            title: "Cars In Service",
            initialCount: 10,
        },
        {
            title: "Cars Sold",
            initialCount: 5,
        },
        {
            title: "New Inventory",
            initialCount: 50,
        },
        {
            title: "Used Inventory",
            initialCount: 38,
        },
    ])

    return (
        <div className="App">
            {counter.map((counter) => (
                <Counter
                    title={counter.title}
                    initialCount={counter.initialCount}
                />
            ))}
        </div>
    )
}