import { useEffect, useState } from "react";

const Notification = ({ message, setMessage }) => {

    const [isVisable, setVisable] = useState(false);
    const defualtStyle = {
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: 'green'
    };

    useEffect(() => {
        if(message){
            setVisable(true)
            const timer = setTimeout(() => {
                setVisable(false);
                setMessage("");
            }, 5000);
            return () => clearTimeout(timer);
        }
    })

    if(!isVisable) {
        return null;
    }

    return (
        <div style={defualtStyle}>
            {message}
        </div>
    )
}

export default Notification;