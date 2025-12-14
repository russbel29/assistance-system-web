import Button from "../../components/Button/Button"
import TextField from "../../components/TextField/TextField"

export const LoginView = () =>{
    return (
        <>
            <div className="container my-5" >  
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="mb-3">Welcome Back</h1>
                                <h3 className="mb-3">Please enter you details to sing in</h3>
                                 <TextField 
                                    label = "correo"
                                    type="email"
                                    //value={email}
                                    //onChange={(e) => setEmail(e.target.value)}
                                 />
                                 <TextField
                                    label="contraseña"
                                    type="password"
                                    //value={password}
                                    //onChange={(e) => setPassword(e.target.value)}
                                 />
                                <Button variant="success" clasName="my-3 w-100">SING IN</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}