export type Aluno = {
    type?: 'add' | 'edit' | 'del',
    id: number,
    name: string,
}

export type Add = {
    type: 'add',
    payload: {
        id: number,
        name: string,
    }
}

export type Edit = {
    type: 'edit',
    payload: {
        id: number,
        name: string,
    }
}

export type Del = {
    type: 'del',
    payload: {
        id: number,
    }
}

export type ListPayload = Add | Edit | Del;