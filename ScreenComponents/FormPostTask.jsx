import { TableTask } from "../Components/TableTask"


export const FormPostTask = () => {

    let url = import.meta.env.VITE_URL
    let endPoint = "/to_do_list_app"
    let token=import.meta.env.VITE_TOKEN
    let newUrl = url+endPoint
    let task=""

    const submitHandler = async ()=> {
        event.preventDefault()

        let data = {
            task
        }

        let response = await fetch(newUrl, {
            method: "POST", 
            headers: {
                'apikey': token,
                'Authorization': token, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(response.ok){
        window.location = "/createTask"
        }
        
    }

    const changeHandler = (event)=>{
        task = event.target.value
    }

    return (
        <>
            <h1> Create Task</h1>
            <div className="container-fluid">
             <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Task</label>
                        <input onChange={changeHandler} type="text" className="form-control" />
                    </div>
                    <button className="btn btn-primary w-100" > Create </button>
                </form>
            </div>

            <TableTask/>
        </>
    )
}