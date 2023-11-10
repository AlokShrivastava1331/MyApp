const testController = (req,res)=>{
    res.status(200).send({
        success:true,
        message:'yes',
    });
};

module.exports = { testController }; 