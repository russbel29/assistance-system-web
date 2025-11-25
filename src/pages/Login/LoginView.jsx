export const LoginView = () =>{
    return (
        <>
            <div className="container my-5" >  
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h1>Welcome Back</h1>
                                <h3>Please enter you details to sing in</h3>
                                <p>Employe ID</p>
                                <div class="input-group my-2">
                                    <input type="text" class="form-control" id="email"></input>
                                </div>
                                <p>Password</p>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="password"></input>
                                </div>
                                <button clasName="btn btn-primary my-3">SING IN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}