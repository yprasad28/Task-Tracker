import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    tasks : [],
    loading : false,
    error : null,
    status : 'All'
}

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    if (!response.ok) {
        throw new Error('Failed to fetch tasks');
    }
    const tasks = await response.json();
    return tasks.map(task => (
        {
            id : task.id,
            title : task.title,
            description : '',
            completed : task.completed ? 'Completed' : 'To Do'
        }
    ))
})

const taskSlice = createSlice({
    name : 'tasks',
    initialState,
    reducers : {
        addTask : (state,action) =>{
            state.tasks.push(action.payload);
        },
        editTask: (state,action) => {
            state.tasks = state.tasks.map(task =>(
                task.id === action.payload.id ? action.payload : task
            ))
        },
        deleteTask: (state,action) => {
            state.tasks = state.tasks.filter(task => task.id!== action.payload);
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchTasks.fulfilled, (state, action) => {
            state.loading = false;
            state.tasks = action.payload;
        }).addCase(fetchTasks.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message;
        })
    }
}
)
export  const {addTask, editTask,deleteTask} = taskSlice.actions

export default taskSlice.reducer