import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import {useNavigate } from 'react-router-dom';
function Register() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const parolRef = useRef(null);
    const avatarRef=useRef(null);
    const navigate = useNavigate();

    function malumod(e) {
        e.preventDefault();
        const user = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: parolRef.current.value,
            avatar:avatarRef.current.value,
        };
        console.log(user);

        fetch("https://api.escuelajs.co/api/v1/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
           if(data.id){
            navigate("/login")
            console.log(data)
            localStorage.setItem("user", JSON.stringify(data));
           } if(data.statusCode<=400){
            alert(data.message[0]);
           }
        })
        .catch((err) => {
            console.error(err);
            alert("Hato yuz berdi");
        });
    }
  return (
    <div>
         <div className='div-30 bg-base-200'>
        <div className='px-[48px] py-[30px] div-22'>
            <div>
                <h1>Ui UNIcorm</h1>
            </div>
            <h1 className='text-[20px] text-slate-950 font-[600]'>Nice to see you again</h1>
            <form className='form' action="">
               <label className='text-[16px]' htmlFor="">Name
               <input ref={nameRef} type="text" placeholder="Name" className="input input-bordered w-full " />
               </label>
               <label className='text-[16px]' htmlFor="">Email
               <input ref={emailRef} type="email" placeholder="Email" className="input input-bordered w-full " />
               </label>
               <label className='text-[16px]' htmlFor="">Pasword
               <input ref={parolRef} type="password" placeholder="Password" className="input input-bordered w-full " />
               </label>
               <label className='text-[16px]' htmlFor="">Avatar
               <input ref={avatarRef} type="text" placeholder="Avatar" className="input input-bordered w-full " />
               </label>
            </form>
             <button onClick={(e)=>{malumod(e)}} className='btn mt-10 w-full bg-sky-500'>sigin in</button>
            <p className='p1 border-zinc-400'></p>
            <div className='flex justify-center pt-[25px]'>
                <h1>Dont have an account?</h1>
                <NavLink to="/" className="text-cyan-500 ml-2" >Sign up now</NavLink>
            </div>
            <div className='flex justify-between items-center mt-[150px]'>
                <div className='flex items-center'>
                    <img className=' h-8 pr-2' src="https://cdn-icons-png.flaticon.com/512/16546/16546614.png " alt="" />
                    <p className='text-blue-700'>GitHub</p>
                </div>
                <h1>© Perfect Login 2024</h1>
            </div>
        </div>
        <div className='div-21'>
            <img className='w-[100%] h-[100%]' src="https://i0.wp.com/www.thekampalareport.com/wp-content/uploads/2023/04/business-registration.jpg?fit=2560%2C1707&ssl=1" alt="" />
        </div>
    </div>
    </div>
  )
}

export default Register