import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import API from '../API';
import Button from './Button';
import { Wrapper } from './Login.styles';
import { UserContext } from '../context';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const { handleSubmit, register } = useForm();
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = async (date: any) => {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken,
                date.username,
                date.password
            );

            setUser({
                sessionId: sessionId.session_id,
                username: date.username,
            });

            navigate('/');
        } catch (error) {
            setError(true);
        }
    };

    const handleInput = (e: any) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
    };

    return (
        <Wrapper>
            {error && <div className='error'>There was an error!</div>}
            <label>Username:</label>
            <input
                type='text'
                value={username}
                {...register('username', {
                    onChange: (e) => handleInput(e)
                })}
            />
            <input
                type='password'
                value={password}
                {...register('password', {
                    onChange: (e) => handleInput(e)
                })}
            />
            <Button text='Login' callback={handleSubmit(onSubmit)} />
        </Wrapper>
    );
};

export default Login;
