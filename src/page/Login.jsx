import React, { useContext, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const { state, setState } = useContext(GlobalContext);
    console.log(state)
    function handleLogin(e) {
        e.preventDefault();
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        
        fetch("https://api.escuelajs.co/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            if (data.statusCode) {
                alert(data.message);
                return;
            } 
            if (data.access_token) {
                localStorage.setItem("token", data.accessToken);
                navigate('/');
                setState(true);
                localStorage.setItem("login",true)
            }
        })
        .catch((err) => {
            alert("An error occurred");
        });
    }

    return (
        <div className='div-20 bg-base-200'>
            <div className='div-21'>
                <img src="https://klev.club/uploads/posts/2023-10/1698721079_klev-club-p-kartinki-anime-devushka-i-paren-tseluyutsy-32.jpg" alt="" />
            </div>
            <div className='px-[48px] py-[30px] div-22'>
                <div>
                    <h1>Ui UNIcorm</h1>
                </div>
                <h1 className='text-[20px] text-slate-950 font-[600]'>Nice to see you again</h1>
                <form className='form' onSubmit={handleLogin}>
                   <label htmlFor="username" className='text-[16px]'>Email
                   <input id="username" ref={emailRef} type="email" placeholder="Email" className="input input-bordered w-full " />
                   </label>
                   <label htmlFor="password" className='text-[16px]'>Password
                   <input id="password" ref={passwordRef} type="password" placeholder="Paeeword" className="input input-bordered w-full " />
                   </label>
                   <button type="submit" className='btn w-full bg-sky-500'>Sign in</button>
                </form>
                <div className='flex items-center justify-between pt-[20px] pb-[25px]'>
                    <div className='flex'>
                        <input type="checkbox" value="synthwave" className="toggle theme-controller mr-2" />
                        <p>Meni eslaysizmi</p>
                    </div>
                    <NavLink className="text-cyan-500" to="/registor">Forgot password?</NavLink>
                </div>
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
        </div>
    );
}

export default Login;
