import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import yup from '../Hook/Yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

function Login() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const navigate = useNavigate();
    const schema = yup.object().shape({
        username: yup
            .string()
            .required('username is Required')
            .matches(/^[a-zA-Z0-9@]+$/, 'Username can only contain letters, numbers, and underscores')
            .min(3, 'Username must be at least 3 characters')
            .max(20, 'Username must not exceed 20 characters'),
        password: yup.string().required('password is Required'),
        // .password('Password invalid'),
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

    const onsubmit = async (data) => {
        try {
            const response = await axios({
                url: 'https://dummyjson.com/auth/login',
                method: 'post',
                data: {
                    username: data.username,
                    password: data.password,
                    expiresInMins: 30,
                },
            });
            console.log(response.data.accessToken);
            localStorage.setItem(`token_user`, response.data.accessToken);
            navigate('/');
        } catch (errors) {
            console.log('bi loi dang nhap');
        }
    };
    return (
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-4 rounded-md border p-4 shadow-md">
                <label className="block">
                    Username:
                    <input type="text" {...register('username')} className="w-full rounded-md border p-2" />
                    {errors.username && <p className="text-orange">{errors.username.message}</p>}
                </label>

                <label className="block">
                    Password:
                    <input type="password" {...register('password')} className="w-full rounded-md border p-2" />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </label>

                <button type="submit" className="rounded-md bg-blue-500 px-4 py-2 text-white">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
