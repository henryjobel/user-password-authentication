import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase.config';

const Registar = () => {
    const [erromsg,setErromsg] = useState('');
    const [sucessmsg,setSucessmsg] = useState('')
    const handelReister = e =>{
        e.preventDefault()
        console.log('ok done')
       
        setErromsg('')
        setSucessmsg('')
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        if(password.length <6 ){
            setErromsg('Password Should be at 8')
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            setSucessmsg('User Created Sucessfully')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode,errorMessage)
            setErromsg(errorMessage)
          });
    }
    return (
        
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            {
                                erromsg && <p className='text-red-600'>{erromsg}</p>
                            }
                            {
                                sucessmsg && <p className='text-green-500'>{sucessmsg}</p>
                            }
                            <form onSubmit={handelReister} >
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"  name='email' required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Registar;