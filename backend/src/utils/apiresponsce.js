class apiresponce {
    constructor(statauscode,data,message="success"){
        this.statauscode=statauscode
        this.data=data
        this.message=message
        this.success=statauscode <400
    }
}