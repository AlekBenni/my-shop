
const initState:StateType = {
    activePage: 0,
    serviceMessage: []
}

type StateType = {
    activePage: number
    serviceMessage: Array<any>
}

type ActionType = any

export const serviceReducer = (state:StateType = initState, action:ActionType) => {
    switch(action.type){
        case 'CHANGE_PAGE':{
            return {...state, activePage : action.page}
        }
        case 'SET_SERVICE_MESSAGE':{
            let stateCopy = {...state}
            stateCopy.serviceMessage = [...stateCopy.serviceMessage]
            stateCopy.serviceMessage.unshift(action.message)
            return stateCopy
        }
        case 'DELETE_SERVICE_MESSAGE':{
            return {...state, serviceMessage: []}
        }
        default: return state
    }
}

export const changeActivePageAC = (page:number) => ({type: 'CHANGE_PAGE', page})

export const setServiceMessageAC = (message:string) => ({type:'SET_SERVICE_MESSAGE', message})

export const deleteServiceMessageAC = () => ({type: 'DELETE_SERVICE_MESSAGE'})