import { connect } from 'react-redux';
import { useAppDispatch } from '../hooks';

import { register as registerAction } from '../actions/auth';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const registerSchema = z.object({
    name: z.string(),
    email: z.string().email('Invalid email').min(1, 'Email is required'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have more than 8 characters'),
    role: z.string().default('user'),
});

type RegisterFormSchemaType = z.infer<typeof registerSchema>;

function Register() {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormSchemaType>({
        resolver: zodResolver(registerSchema),
    });

    const handleRegister: SubmitHandler<RegisterFormSchemaType> = (data) => {
        dispatch(
            registerAction(data.email, data.password, data.name, data.role)
        );
    };

    return (
        <div className="pt-2">
            <form
                onSubmit={handleSubmit(handleRegister)}
                className=" w-3/4 justify-center text-center mx-auto"
            >
                <div className="space-y-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label
                                htmlFor="email-register"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    id="name-register"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    {...register('name')}
                                />
                                {errors.name && (
                                    <span className="text-red-800 block mt-2">
                                        {errors.name?.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label
                                htmlFor="email-register"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    id="email-register"
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
                                htmlFor="password-register"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    id="password-register"
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
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

function mapStateToProps(state: any) {
    const { message } = state.message;
    return {
        message,
    };
}

export default connect(mapStateToProps)(Register);
