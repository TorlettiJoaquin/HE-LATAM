import { BsFillLockFill } from "react-icons/bs";
import heicon from "../assets/images/he.webp";

export const Admin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-header-bg bg-no-repeat bg-center">
            <div className="max-w-md w-full space-y-8 p-10 rounded-xl bg-black bg-opacity-95 ">
                <div>
                    <img
                        className="mx-auto h-20 w-auto animate-bounce"
                        src={heicon}
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-3+00">
                        Ingresa a tu cuenta
                    </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="user" className="sr-only">
                                Usuario
                            </label>
                            <input
                                id="user"
                                name="user"
                                type="user"
                                autoComplete="user"
                                required
                                className="appearance-none rounded-none relative block
                                  w-full px-3 py-2 border border-gray-300
                                  placeholder-gray-500 text-gray-900 rounded-t-md
                                  focus:outline-none focus:ring-indigo-500
                                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Usuario"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block
                                  w-full px-3 py-2 border border-gray-300
                                  placeholder-gray-500 text-gray-900 rounded-b-md
                                  focus:outline-none focus:ring-indigo-500
                                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Contraseña"
                            />
                        </div>
                    </div>

                    {/* <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                                 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div> */}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center
                              py-2 px-4 border border-transparent text-sm font-medium
                              rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                              focus:outline-none focus:ring-2 focus:ring-offset-2
                              focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <BsFillLockFill
                                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                    aria-hidden="true"
                                />
                            </span>
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};