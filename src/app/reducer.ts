
import { ListPayload, Aluno } from './types'

export default function ReducerCrud(state: Aluno[], action: ListPayload): Aluno[] {
    switch (action.type) {
        case 'add':
            return [...state, action?.payload]
        case 'edit':
            state.map((i) => {
                i.id === action.payload.id ? i.name = action.payload.name : i
            })
            return [...state]
        case 'del':
            return state.filter((i) => i.id !== action.payload.id)
    }
}