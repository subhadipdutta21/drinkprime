const initState = {
    projects: [
        {
          email: "abc@gmail.com",
          fname: "subh",
          lname: "dutta"
        },
        {
          email: "abc@gmail.com",
          fname: "subh",
          lname: "dutta"
        },
        {
          email: "abc@gmail.com",
          fname: "subh",
          lname: "dutta"
        }
      ]
}

const projectReducer = (state=initState,action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project',action.project)
            return state
        case 'CREATE_PROJECT_ERR':
            console.log('create project error',action.err)
            return state
        default:
            return state

        
    }
}


export default projectReducer