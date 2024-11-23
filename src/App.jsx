import React from 'react'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <div className='max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md'>
        <h1 className='text-2xl font-bold mb-4 text-center text-indigo-600'>Task Tracker</h1>
      
      <AddTask/>
      <TaskList/>
    </div>
    </div>
  )
}

export default App
