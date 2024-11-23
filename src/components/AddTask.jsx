import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {v4 as uuid4} from 'uuid'
import { addTask } from '../features/taskSlice'


const AddTask = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('Pending')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        // Add task to the list
        // Clear the form fields
        const newTask = {
            id: uuid4(),
            title,
            description,
            status,
        }
        dispatch(addTask(newTask))
        setTitle('')
        setDescription('')
        setStatus('')
    }

   // Render the form to add a new task to the list
  return (
    <form className='mb-6' onSubmit={handleSubmit}>
        <h2 className='text-xl font-semibold mb-3 text-indigo-500'>Add New Task</h2>
        <div className='mb-4'>
            <input type="text"
            placeholder='Task Title'
            value = {title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-3'
            required />
        </div>
        <div className='mb-4'>
            <textarea 
            placeholder='Task Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full px-3 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-3'
            rows='3'></textarea>

        </div>
        <div className='mb-4'>
            <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className='w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-3'>
                <option value='Pending'>Pending</option>
                <option value='In Progress'>In Progress</option>
                <option value='Completed'>Completed</option>

            </select>
        </div>
        <button type='submit'
        className='w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700'>Add Task</button>
    </form>
  )
}

export default AddTask
