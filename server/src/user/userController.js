var userModel= require('./userModel');

var createUserControllerFn = async(res,req) =>
{
    try{
        const body=req.body
        const userModelData = new userModel()
        userModelData.name=body.name
        userModelData.email=body.email
        userModelData.message=body.message
        await userModelData.save()

        res.status(200).send({
            "status":true,"message":"user has post"
        });

    }
    catch(error)
    {
        console.log(error);
        res.status(404).send(error);
    }
}
module.exports = { createUserControllerFn };