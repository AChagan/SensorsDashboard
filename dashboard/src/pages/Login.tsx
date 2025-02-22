import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from '../actions/auth';
import { useToast } from '../hooks/useToast';

const loginSchema = z.object({
    email: z.string().email('Invalid email').min(1, 'Email is required'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have more than 8 characters'),
});

type LoginFormSchemaType = z.infer<typeof loginSchema>;

function Login() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const toast = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormSchemaType>({
        resolver: zodResolver(loginSchema),
    });

    const handleLogin: SubmitHandler<LoginFormSchemaType> = (data) => {
        dispatch(login(data.email, data.password))
            .then(() => {
                navigate('/', { replace: true });
                window.location.reload();
            })
            .catch((error) => {
                toast.error(error);
            });
    };

    return (
        <div className="pt-2">
            <form
                onSubmit={handleSubmit(handleLogin)}
                className=" w-3/4 justify-center text-center mx-auto"
            >
                <div className="space-y-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    id="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    {...register('email')}
                                />
                                {errors.email && (
                                    <span className="text-red-800 block mt-2">
                                        {errors.email?.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    id="password"
                                    {...register('password')}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.password && (
                                    <span className="text-red-800 block mt-2">
                                        {errors.password?.message}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

function mapStateToProps(state: any) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message,
    };
}

export default connect(mapStateToProps)(Login);
