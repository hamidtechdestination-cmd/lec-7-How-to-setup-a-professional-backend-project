const asynchandler =(requestHandler) =>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}


export {asynchandler}




// const asyncHandler=()=>{}
// const asyncHandler=(func)=>()=>{}
// const asyncHandler=(func)=>async ()=>{}
    // ......ye teeno line ka kaam niche ek hi lineme kr dia hai...... 

                   ///////////////////rapper function/////////////
// const asyncHandler=(fn)=>async (req,res,next)=>{

//   try {
//     await(req,res,next)
//   } catch (error) {
//     res.status(err.code || 500).json({
//         success:false,
//         message:err.message
//     })
//   }

// }


///////////////uper isko prommises me kase kre geye code ko