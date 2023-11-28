function AlertComponent({ message }) {
    //console.log(message);

    const isError = message
        .toLowerCase()
        .indexOf("error:") > -1;

    return (
        <>
            {message && <div className="row mb-2 mt-3">
                <div className="col-sm-12">
                    <div className={isError? "alert alert-danger" : "alert alert-success"} role="alert">
                        {message}
                    </div>
                </div>
            </div>}
        </>
    )
}

export default AlertComponent;