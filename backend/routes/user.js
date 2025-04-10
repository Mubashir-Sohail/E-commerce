import {Router} from "express";
import {  signUp, logIn, addproduct, getproduct, delproduct, updateProduct, updateDetail, searching} from "../handler/userhandler.js";

const userRouter=Router();


userRouter.post('/signup',signUp);
userRouter.post('/login',logIn);
userRouter.post('/add-product',addproduct);
userRouter.get('/get-product',getproduct);
userRouter.delete('/product/:id',delproduct);
userRouter.get('/product/:id',updateProduct);
userRouter.put('/product/:id',updateDetail);
userRouter.get('/search/:key',searching)
export default userRouter;



// userRouter.put('/update_user/:id/',updateUser);
// userRouter.post('/login',userlogin);
// userRouter.post('/register',userRegister);
