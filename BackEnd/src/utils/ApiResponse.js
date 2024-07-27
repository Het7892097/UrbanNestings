class ApiResponse{
    constructor(statuscode, data, message){
        this.statuscode = statuscode
        this.data = data
        this.message = message
        this.status = statuscode < 400
    }
}
export {ApiResponse}