

const Register = () => {
    return (
        <div>
            <h1 style={{ marginTop: "70px" }}>Register page</h1><br />
            <form style={{ paddingLeft: "470px" }}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="Name">Name</label>
                        <input type="text" class="form-control" id="Name" placeholder="Enter your name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="DOB">Name</label>
                        <input type="text" class="form-control" id="DOB" placeholder="Date of birth" />
                    </div>
                    <div class="form-check col-md-6" ><br />
                        <label for="Gender">Gender</label><br />
                        <input class="form-check-input" type="radio" name="Gender" id="Male" /><label class="form-check-label" for="Male">Male</label><br/>
                        <input class="form-check-input" type="radio" name="Gender" id="Female" /><label class="form-check-label" for="Female">Female</label><br/>
                        <input class="form-check-input" type="radio" name="Gender" id="Others" /><label class="form-check-label" for="Others">Others</label><br/>
                    </div><br/>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div><br />
                <div class="form-group col-md-6">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Register;