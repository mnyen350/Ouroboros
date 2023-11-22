function Signup() {
    return (
        <>
            <div class="text-center">
                <img src="/images/logo.png" alt="logo" class="logo" />
            </div>

            <div class="text-center">
                <h3>Sign Up</h3>
            </div>

            <form class="m-5">
                <div class="row mb-3">

                    <label for="firstname" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-5">
                        <input type="text" class="form-control" id="firstname" />
                    </div>
                    <div class="col-sm-5">
                        <input type="text" class="form-control" id="lastname" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" />
                    </div>
                </div>

                <div class="mt-5 d-grid gap-2 col-6 mx-auto">

                    <button class="btn btn-primary" type="button">Sign Up</button>
                </div>
            </form>

        </>
    );
}

export default Signup;