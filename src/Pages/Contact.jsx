import React from 'react';
import Layout from './Layout';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import '../Styles/App.css';
import { translations } from '../Components/Content';
import { useLanguage } from '../Service/Languagecontext';

function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        data.access_key = '1ccbaca8-59cd-485d-a2b5-77bf9e1bc1d6';

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (result.success) {
                // 🟢 Hiển thị modal thông báo thành công
                Swal.fire({
                    title: '🎉 Message Sent!',
                    text: 'I will get back to you soon.',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                });

                reset(); // Xóa dữ liệu form sau khi gửi thành công
            } else {
                // 🔴 Hiển thị modal khi lỗi xảy ra
                Swal.fire({
                    title: '❌ Error!',
                    text: 'Message not sent. Please try again.',
                    icon: 'error',
                    confirmButtonColor: '#d33',
                });
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };
    const { language } = useLanguage();
    return (
        <Layout>
            <div className="max-w-lg mx-auto mt-5 p-5 shadow-gray-500 shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">{translations[language].contact}</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
                    {/* Name Input */}
                    <input
                        type="text"
                        placeholder="Your Name"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full p-3 border bg-white dark:placeholder-white dark:bg-gray-600"
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="Your Email"
                        {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                        className="w-full p-3 border rounded bg-white dark:placeholder-white dark:bg-gray-600"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                    {/* Message Input */}
                    <textarea
                        placeholder="Your Message"
                        {...register('message', { required: 'Message is required' })}
                        className="w-full p-3 border rounded h-32 bg-white dark:placeholder-white dark:bg-gray-600"
                    />
                    {errors.message && <span className="text-red-500">{errors.message.message}</span>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full card-hover bg-maucam text-white p-3 rounded-lg hover:bg-orange-600"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </Layout>
    );
}

export default Contact;
