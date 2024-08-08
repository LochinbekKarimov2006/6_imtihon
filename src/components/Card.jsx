import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card() {
    let data2 = JSON.parse(localStorage.getItem("data")) || [];
    let [data1, setData] = useState(data2);
    const navigate = useNavigate();

    function handleRemove(index) {
        let copied = data1.filter(item => index !== item.id);
        setData(copied);
        localStorage.setItem("data", JSON.stringify(copied));
    }

    function ToliqMalumod(e) {
        localStorage.setItem("datas", JSON.stringify(e));
        navigate('/toliq'); // Navigate to the desired route
    }

    return (
        <div className="div-12">
            {data1 && data1.map((e,id) => (
                <div
                    key={id}
                    onClick={() => ToliqMalumod(e)}
                    style={{
                        background: `url(${e.textColoe})`,
                        backgroundColor: `${e.textColoe}`,
                        color: `${e.textColoe2}`,
                        fontWeight: `${e.textQalinligi}`
                    }}
                    className="bg-cover cursor-pointer card bg-base-100 w-96 shadow-xl div-13"
                >
                    <figure>
                        <button
                            onClick={(event) => {
                                event.stopPropagation();
                                handleRemove(e.id);
                            }}
                            className="btn z-50 img5 btn-ghost btn-circle"
                        >
                            <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png" alt="delete" />
                        </button>
                        <img src={e.image} alt={e.name} />
                    </figure>
                    <div className="card-body">
                        <h2 style={{ fontSize: `${e.textCataligi}px` }} className="card-title">{e.name}</h2>
                        <p style={{ fontSize: `${e.textCataligi}px` }}>{e.text}</p>
                        <div className="card-actions">
                            <p className="line-through" style={{ fontSize: `${e.textCataligi}px` }}>{e.narh}$</p>
                            <p style={{ fontSize: `${e.textCataligi}px` }}>{e.chegirma}$</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
