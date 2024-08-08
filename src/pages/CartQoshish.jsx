import React, { useEffect, useState } from 'react';

function CartQoshish() {
    const [yashirish, setYashirish] = useState(true);
    const [image, setImage] = useState("");
    const [image4, setImage4] = useState([]);
    const [image5, setImage5] = useState("");
    const [narh, setNarh] = useState("");
    const [chegirma, setChegirma] = useState("");
    const [name, setName] = useState("");
    const [brend, SetBreend] = useState("");
    const [text, setText] = useState("");
    const [textColoe, setTextColor] = useState("");
    const [textColoe2, setTextColor2] = useState("");
    const [textQalinligi, setTextQalinligi] = useState("");
    const [textCataligi, setTextCataligi] = useState(16);
    const [isFormValid, setIsFormValid] = useState(false);
    useEffect(() => {
        if (image && image4.length > 0 && narh && chegirma && name && brend && text) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [image, image4, narh, chegirma, name, brend, text]);

    function tayor(e) {
        e.preventDefault();
        const storedData = localStorage.getItem("data");
        let existingData;
        try {
            existingData = JSON.parse(storedData) || [];
        } catch (error) {
            console.error("Ma'lumotni JSON formatida parse qilishda xato:", error);
            existingData = [];
        }
        
        if (!Array.isArray(existingData)) {
            console.error("localStorage'dan olingan ma'lumot massiv emas");
            existingData = [];
        }
        
        let newData = {
            id: Date.now(),
            image,
            image4,
            narh,
            chegirma,
            name,
            brend,
            text,
            textColoe,
            textColoe2,
            textCataligi,
            textQalinligi
        };
        existingData.push(newData);
        localStorage.setItem("data", JSON.stringify(existingData));
        console.log("New Data:", newData);
    }

    function tozalash(e) {
        e.preventDefault();
        setImage("");
        setImage4([]);
        setImage5("");
        setNarh("");
        setChegirma("");
        setName("");
        SetBreend("");
        setText("");
        setTextColor("");
        setTextColor2("");
        setTextQalinligi(400);
        setTextCataligi(16);
        console.log("Form cleared");
    }

    function qoshish(e) {
        e.preventDefault();
        if (image5) {
            setImage4([...image4, image5]);
            setImage5("");
        }
    } function habarlar(e123){
            const existingData = localStorage.getItem("habar");
            let data1212 = existingData ? JSON.parse(existingData) : [];
            data1212.push(e123);
            localStorage.setItem("habar", JSON.stringify(data1212));
    }
    return (
        <div className='div-2'>
            <div className='div-3 bg-base-200'>
                <div style={{ background: `url(${textColoe})`, backgroundColor: `${textColoe}`, color: `${textColoe2}`, fontWeight: `${textQalinligi}` }} className="bg-cover card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 style={{ fontSize: `${textCataligi}px` }} className="card-title">{name}</h2>
                        <p style={{ fontSize: `${textCataligi}px` }}>{text}</p>
                        <div className="card-actions">
                            <p className='line-through' style={{ fontSize: `${textCataligi}px` }}>{narh}</p>
                            <p style={{ fontSize: `${textCataligi}px` }}>{chegirma}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: `url(${textColoe})`, backgroundColor: `${textColoe}` }} className='bg-base-200 bg-cover div-4'>
                <div className='div-5'>
                    <button onClick={() => { setYashirish(true) }} className='text-[24px] w-full h-[46px] hover:bg-slate-400'>Input</button>
                    <button onClick={() => { setYashirish(false) }} className='text-[24px] w-full h-[46px] hover:bg-slate-400'>Sozlamalar</button>
                </div>
                {yashirish && <form className='m-6 from'>
                    <div className='div-6'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Image: 1</label>
                            <input value={image} onChange={(e) => { setImage(e.target.value) }} required placeholder='One e picture is enter' className='w-[270px] input input-bordered' type="text" />
                        </div>
                        <div className='flex items-center ml-3'>
                            <label className='flex flex-col' htmlFor="toliq Chart">Image:{image4.length}
                                <input value={image5} onChange={(e) => { setImage5(e.target.value) }} required placeholder='Pour e picture is enter ' className='input input-bordered w-[400px]' type="text" />
                            </label>
                            <button  onClick={(kl)=>{qoshish(kl)}} className='bg-slate-100 button1 ml-2 mb-[-27px]'>
                                <img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/3031/3031718.png" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='div-6 div-7'>
                        <label htmlFor="">
                            Prise
                            <input value={narh} onChange={(e) => { setNarh(e.target.value) }} required placeholder='Enters the pris' className='input input-bordered w-full' type="number" />
                        </label>
                        <label htmlFor="">
                            Discount
                            <input value={chegirma} onChange={(e) => { setChegirma(e.target.value) }} required placeholder='Enter the discount price' className='input input-bordered w-full' type="number" />
                        </label>
                    </div>
                    <label className='' htmlFor="">Namme:
                        <input value={name} onChange={(e) => { setName(e.target.value) }} required placeholder='Product name' className='input input-bordered w-full' type="text" />
                    </label>
                    <label htmlFor="">Brand
                        <input value={brend} onChange={(e) => { SetBreend(e.target.value) }} required placeholder='Enter the brand' className='input input-bordered w-full' type="text" />
                    </label>
                    <textarea value={text} onChange={(e) => { setText(e.target.value) }} placeholder='Enter thi information' className="textarea textarea-bordered w-full h-[300px]" required ></textarea>
                    <div className='div-10'>
                        <button onClick={(e) => { tozalash(e) }} className='btn'>Clearance</button>
                        <button type='submit' disabled={!isFormValid} onClick={(e) => { setYashirish(false) }} className='btn btn-info'>Enter</button>
                    </div>
                </form>}
                {!yashirish && <div className='div-11 m-6'>
                    <label htmlFor="">
                        Yozuv qalinligi
                        <input value={textQalinligi} onChange={(e) => { setTextQalinligi(e.target.value) }} type="range" min={0} max="900" className="range" step="100" />
                        <div className="flex w-full justify-between px-2 text-xs">
                            <span>0</span>
                            <span>100</span>
                            <span>200</span>
                            <span>300</span>
                            <span>400</span>
                            <span>500</span>
                            <span>600</span>
                            <span>700</span>
                            <span>800</span>
                            <span>900</span>
                        </div>
                    </label>
                    <label htmlFor="">
                        Yozuv kataligi
                        <input value={textCataligi} onChange={(e) => { setTextCataligi(e.target.value) }} type="range" min={0} max="44" className="range" step="4" />
                        <div className="flex w-full justify-between px-2 text-xs">
                            <span>0 .</span>
                            <span>4</span>
                            <span>8</span>
                            <span>12</span>
                            <span>16</span>
                            <span>18</span>
                            <span>20</span>
                            <span>24</span>
                            <span>28</span>
                            <span>32</span>
                            <span>36</span>
                            <span>40</span>
                            <span>44</span>
                        </div>
                    </label>
                    <div className='text-[20px]'>
                        <h1>Text rangi</h1>
                        <div className='flex justify-between'>
                            <button style={{ backgroundColor: '#000' }} onClick={() => { setTextColor2("#000") }} className='btn w-20 h-10'></button>
                            <button style={{ backgroundColor: '#fff' }} onClick={() => { setTextColor2('#fff') }} className='btn w-20 h-10'></button>
                            <button style={{ backgroundColor: 'rgb(250, 8, 56)' }} onClick={() => { setTextColor2('rgb(250, 8, 56)') }} className='btn w-20 h-10'></button>
                            <button style={{ backgroundColor: 'blue' }} onClick={() => { setTextColor2("blue") }} className='btn w-20 h-10'></button>
                            <button style={{ backgroundColor: 'chartreuse' }} onClick={() => { setTextColor2("chartreuse") }} className='btn w-20 h-10'></button>
                            <button style={{ backgroundColor: 'rgb(199, 254, 0)' }} onClick={() => { setTextColor2('rgb(199, 254, 0)') }} className='btn w-20 h-10'></button>
                            <button style={{ backgroundColor: 'rgb(254, 0, 178)' }} onClick={() => { setTextColor2('rgb(254, 0, 178)') }} className='btn w-20 h-10'></button>
                            <button style={{ backgroundColor: 'rgb(0, 229, 254)' }} onClick={() => { setTextColor2('rgb(0, 229, 254)') }} className='btn w-20 h-10'></button>
                        </div>
                    </div>
                    <div className='text-[20px]'>
            <h1>Card orqasini rangi</h1>
           <div className='flex justify-between'>
           <button style={{ backgroundColor: '#000' }} onClick={()=>{setTextColor("#000")}} className='btn w-20 h-10'></button>
           <button style={{ backgroundColor: '#fff' }} onClick={()=>{setTextColor('#fff')}} className='btn w-20 h-10'></button>
           <button style={{ backgroundColor: 'rgb(250, 8, 56)' }} onClick={()=>{setTextColor('rgb(250, 8, 56)')}} className='btn w-20 h-10'></button>
           <button style={{ backgroundColor: 'blue' }} onClick={()=>{setTextColor("blue")}} className='btn w-20 h-10'></button>
           <button style={{ backgroundColor: 'chartreuse' }} onClick={()=>{setTextColor("chartreuse")}} className='btn w-20 h-10'></button>
           <button style={{ backgroundColor: 'rgb(199, 254, 0)' }} onClick={()=>{setTextColor('rgb(199, 254, 0)')}} className='btn w-20 h-10'></button>
           <button style={{ backgroundColor: 'rgb(254, 0, 178)' }} onClick={()=>{setTextColor('rgb(254, 0, 178)')}} className='btn w-20 h-10'></button>
           <button style={{ backgroundColor: 'rgb(0, 229, 254)' }} onClick={()=>{setTextColor('rgb(0, 229, 254)')}} className='btn w-20 h-10'></button>
           
           </div>
           <div className='flex justify-between mt-3'>
           <button style={{ backgroundColor: 'rgb(254, 68, 0)' }} onClick={()=>{setTextColor("https://img.goodfon.ru/original/2560x1440/c/d2/colors-paint-effects.jpg")}} className='btn w-20 h-10 bg-[url("https://img.goodfon.ru/original/2560x1440/c/d2/colors-paint-effects.jpg")]'></button>
           <button style={{ backgroundColor: 'rgb(254, 68, 0)' }} onClick={()=>{setTextColor("//avatars.mds.yandex.net/i?id=5b5adc05cf1f5bbe0231d89775a108bf_l-5175116-images-thumbs&n=13")}} className='btn w-20 h-10 bg-[url("//avatars.mds.yandex.net/i?id=5b5adc05cf1f5bbe0231d89775a108bf_l-5175116-images-thumbs&n=13")]'></button>
           <button style={{ backgroundColor: 'rgb(254, 68, 0)' }} onClick={()=>{setTextColor("//avatars.mds.yandex.net/i?id=933666b0e9043a0015f3322693b1fb65_l-5233791-images-thumbs&n=13")}} className='btn w-20 h-10 bg-[url("//avatars.mds.yandex.net/i?id=933666b0e9043a0015f3322693b1fb65_l-5233791-images-thumbs&n=13")]'></button>
           <button style={{ backgroundColor: 'rgb(254, 68, 0)' }} onClick={()=>{setTextColor("//avatars.mds.yandex.net/i?id=588bfc25e190b4b77b8c02d63e65d796_l-5575082-images-thumbs&n=13")}} className='btn w-20 h-10 bg-[url("//avatars.mds.yandex.net/i?id=588bfc25e190b4b77b8c02d63e65d796_l-5575082-images-thumbs&n=13")]'></button>
           <button style={{ backgroundColor: 'rgb(254, 68, 0)' }} onClick={()=>{setTextColor("//avatars.mds.yandex.net/i?id=979090a9b65b7db087951e4ba6699751_l-5234911-images-thumbs&n=13")}} className='btn w-20 h-10 bg-[url("//avatars.mds.yandex.net/i?id=979090a9b65b7db087951e4ba6699751_l-5234911-images-thumbs&n=13")]'></button>
           <button style={{ backgroundColor: 'rgb(254, 68, 0)' }} onClick={()=>{setTextColor("//avatars.mds.yandex.net/i?id=7c98522994fc84f6d4d4264f7f461dc8_l-8497013-images-thumbs&n=13")}} className='btn w-20 h-10 bg-[url("//avatars.mds.yandex.net/i?id=7c98522994fc84f6d4d4264f7f461dc8_l-8497013-images-thumbs&n=13")]'></button>
           <button style={{ backgroundColor: 'rgb(254, 68, 0)' }} onClick={()=>{setTextColor("//avatars.mds.yandex.net/i?id=89c2af9ec7a13cbe7e90a5b598982946_l-5257463-images-thumbs&n=13")}} className='btn w-20 h-10 bg-[url("//avatars.mds.yandex.net/i?id=89c2af9ec7a13cbe7e90a5b598982946_l-5257463-images-thumbs&n=13")]'></button>
           <button style={{ backgroundColor: 'rgb(254, 68, 0)' }} onClick={()=>{setTextColor("https://i.pinimg.com/originals/56/a8/62/56a862ec31780b5cb6dcd841ad081c70.png")}} className='btn w-20 h-10 bg-[url("https://i.pinimg.com/originals/56/a8/62/56a862ec31780b5cb6dcd841ad081c70.png")]'></button>
           
           </div>
           </div>
                    <div className='div-10'>
                        <button onClick={() => { setYashirish(true) }} className='btn'>Orqaga</button>
                        <button onClick={(e) => { tayor(e),habarlar("Siz yangi Card qoshtinggiz 😃😄") }} className='btn btn-info'>Enter</button>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default CartQoshish;
