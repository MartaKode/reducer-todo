import moment from 'moment'

export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589,
            // ``````stretch
            date: moment().format('MMMM Do YYYY, h:mm:ss a')
            // `````
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        item: action.payload,
                        completed: false,
                        id: new Date(),
                    }
                ]
            }

            case 'TOGGLE_COMPLETED':
                return {
                    ...state,
                    todos: state.todos.map( (item, key=item.id) =>{
                        if(item.id === action.payload){
                            return {...item, completed: !item.completed}
                        }else{
                            return item
                        }
                    } )

                }

            case 'CLEAR_COMPLETED':
                return{
                    ...state,
                    todos: state.todos.filter( item => {
                        return !item.completed
                    } )
                }



        default:
            return state
    }
}

