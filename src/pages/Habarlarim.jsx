import React from 'react'

function Habarlarim() {
    const habarlar = JSON.parse(localStorage.getItem("habar"));
  return (
    <div className='div-32 py-[30px] text-center'>
       {!habarlar&&<h1 className='text'>Sizga Hali umuman habar kelgani yoq</h1>}
       {habarlar&&habarlar.map((e)=>(
        <h1 className='text'>{e}</h1>
       ))}
    </div>
  )
}

export default Habarlarim