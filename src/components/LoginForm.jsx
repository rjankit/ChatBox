import { useState } from "react"
import axios from 'axios';
const LoginForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassowrd] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authObject = { 'Project-ID': "cbd08c72-6701-44ea-87a5-2ddc47906480", 'User-Name': username, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        
        } catch(error) {
            setError('Oops, Login with correct credentials');
        }

    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title" >ChatBox</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="User Name" required />
                    <input type="password" value={password} onChange={(e) => setPassowrd(e.target.value)} className="input" placeholder="Password" required />

                    <div align='center'>
                        <button type="submit" className="button" >
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error" >{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;