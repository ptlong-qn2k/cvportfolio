import React from 'react';
import Layout from '../Layout/Layout';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { translations } from '../Locals/LanguageContent';
import { useLanguage } from '../Hook/Languagecontext';

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
                    text: 'thank you very much',
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
            <div className="flex flex-col max-w-6xl">
                <h2 className="text-4xl font-bold mx-auto mb-4 gradient-text capitalize">
                    {translations[language].contact}
                </h2>
                <div className=" flex flex-col md:grid md:grid-cols-2 gap-8">
                    <div className="space-y-8">
                        <div className="rounded-lg bg-white md:grid-cols-1 md:grid-rows-1 dark:bg-gray-800 p-5 sm:p-6 md:p-8">
                            <h3 className="text-2xl font-bold mb-4">Thông tin liên hệ</h3>
                            <div className="flex flex-col justify-start space-y-8">
                                <div className="flex flex-row gap-2 items-center">
                                    <div className="p-2 sm:p-3 bg-blue-200 dark:bg-blue-600 rounded-[50%] flex ">
                                        <MdOutlineEmail
                                            className="text-xanhduong m-auto dark:text-gray-300"
                                            size={20}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="">Email:</label>
                                        <a href="mailto:Thanhlong05.06.2k@gmail.com" className="text-sm sm:text-base">
                                            Thanhlong05.06.2k@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <div className="p-2 sm:p-3 bg-green-200 dark:bg-green-600 rounded-[50%] flex ">
                                        <IoCallOutline className="text-xanhla dark:text-gray-300 m-auto" size={20} />
                                    </div>
                                    <div className="flex flex-col ">
                                        <label htmlFor="">Điện thoại:</label>
                                        <a href="tel:+84328228798" className="text-sm sm:text-base">
                                            +84328228798
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <div className="p-2 sm:p-3 bg-orange-200 dark:bg-orange-600 rounded-[50%] flex">
                                        <FaMapMarkerAlt className="text-maucam dark:text-gray-300 m-auto" size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="">Địa chỉ:</label>
                                        <p className="text-sm sm:text-base">Đà Nẵng, Việt Nam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" rounded-lg bg-white md:grid-cols-1 md:grid-rows-2 dark:bg-gray-800 p-5 sm:p-6 md:p-8 space-y-6">
                            <h3 className="text-2xl font-bold">Kết nối với tôi</h3>
                            <div>
                                <div className="cursor-pointer gap-2 flex flex-row justify-start">
                                    <div className="p-2 sm:p-3 card-hover bg-blue-200 dark:bg-blue-600 !rounded-[50%] flex">
                                        <FaFacebook
                                            onClick={() =>
                                                (window.location.href = 'https://www.facebook.com/mrlong2k/')
                                            }
                                            className=" text-blue-600 dark:text-gray-300"
                                            size={20}
                                        />
                                    </div>
                                    <div className="p-2 sm:p-3 card-hover bg-gray-200 dark:bg-gray-900 !rounded-[50%] flex">
                                        <FaGithub
                                            onClick={() => (window.location.href = 'https://github.com/ptlong-qn2k')}
                                            className="text-black dark:text-gray-300"
                                            size={20}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto bg-white p-5 sm:p-6 md:p-8 dark:bg-gray-800 shadow-gray-500 shadow-lg rounded-lg">
                        <h2 className="text-4xl font-bold text-center mb-4 gradient-text capitalize">
                            Gửi tin nhắn cho tui{' '}
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* Name Input */}
                            <input
                                type="text"
                                placeholder="Your Name"
                                {...register('name', { required: 'Name is required' })}
                                className="w-full p-3 border rounded-lg bg-white dark:placeholder-white dark:bg-gray-800"
                            />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}

                            {/* Email Input */}
                            <input
                                type="email"
                                placeholder="Your Email"
                                {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                                className="w-full p-3 border rounded-lg bg-white dark:placeholder-white dark:bg-gray-800"
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                            {/* Message Input */}
                            <textarea
                                placeholder="Your Message"
                                {...register('message', { required: 'Message is required' })}
                                className="w-full p-3 border rounded-lg h-32 bg-white dark:placeholder-white dark:bg-gray-800"
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
                </div>
            </div>
        </Layout>
    );
}

export default Contact;
