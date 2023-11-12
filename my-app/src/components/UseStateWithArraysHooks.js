import React, {useState} from 'react'

function UseStateWithArraysHooks() {
    const [nums, setNums] = useState([1,2,3]);
    const addNums = () => {                     // Updating the state by using the functional form of setState to access the previous state (prevNums)
        setNums([...nums, nums.length + 1]);
    }
    const removeNum = () => {
        setNums(                            // Updating the state by slicing the array to remove the last element
            nums.filter((item, idx) => {
                return idx !== nums.length - 1;
            })
        )
    }
    const buggyPushNums = () => {
        nums.push(nums.length + 1);   // Creating a new array by spreading the current state and adding a new element
        setNums(nums);                 // Updating the state with the new array
        console.log(nums);
    }
    return (
        <div>
            <button onClick={addNums}>
                Add Item
            </button>
            <button onClick={removeNum}>
                Remove Item
            </button>
            <button onClick={buggyPushNums}>
                Buggy Push Item
            </button>
            <ul>
                {nums.map(num => <li key={num}>{num}</li>)}
            </ul>
        </div>
    )
}

export default UseStateWithArraysHooks