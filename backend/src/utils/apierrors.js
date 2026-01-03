// class apierror extends error {
//     constructor(
//         statuscode,
//         message = "something went wrong",
//         errors = [],
//         stack = ""
//     ) {
//         super(message)
//         this.statuscode = statuscode
//         this.data = null
//         this.message = message
//         this.success = false;
//         this.errors = this.errors


//         if (stack) {
//             this.stack = stack
//         }
//         else {
//             Error.captureStackTrace(this.globalThis.costructore)
//         }
//     }
// }

// export { apierror }


class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null; // Error mein data hamesha null hota hai
        this.message = message;
        this.success = false;
        this.errors = errors; // Fixed: using the parameter

        if (stack) {
            this.stack = stack;
        } else {
            // Fixed: correct way to capture stack trace
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };