import React, { useEffect, useState } from "react";
import "./FallingGuns.css";

const FallingGuns = () => {
    const [guns, setGuns] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setGuns((prevGuns) => {
                // Обмеження кількості елементів
                if (prevGuns.length > 10) {
                    return prevGuns.slice(1); // Видаляємо найстаріший елемент
                }
                return [
                    ...prevGuns,
                    { id: Date.now(), left: Math.random() * 100 }, // Додаємо новий елемент
                ];
            });
        }, 500); // Додаємо новий елемент кожні 200 мс

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="falling-guns-container">
            {guns.map((gun) => (
                <span
                    key={gun.id}
                    className="falling-gun"
                    style={{ left: `${gun.left}%` }}
                >
          🔫
        </span>
            ))}
        </div>
    );
};

export default FallingGuns;
