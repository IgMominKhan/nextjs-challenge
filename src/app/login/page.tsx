"use client";
import { FieldValues, SubmitHandler, useForm, } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../../schemas/login.schema";


export default function LoginForm() {

const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { email: "momin", password: "1234" }, resolver: zodResolver(loginSchema) });

const onSubmit: SubmitHandler<FieldValues> = (data) => {
console.log(data);
};


return (
<main className="flex justify-center items-center min-h-screen">
<div className="main bg-white text-black rounded-lg shadow-md p-10 transition-transform w-96 text-center">
<h1 className="text-green-600 text-3xl font-semibold"> Login </h1>
<form className="text-left" onSubmit={handleSubmit(onSubmit)}>
<div className="mb-4">
<label htmlFor="first" className="block mt-4 mb-2 text-lef t text-gray-700 font-bold">Username:</label>
<input {...register("email")} type="text"
placeholder="Enter your Username"
className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                       focus:border-green-400"/>

{errors.email && <small className="text-red-500">{errors.email.message}</small>}
</div>
<div className="mb-4">
<label htmlFor="password" className="block mb-2
                   text-gray-700 font-bold">Password:</label>
<input type="password" {...register("password")}
placeholder="Enter your Password"
className="block w-full px-4 py-2 border 
                      border-gray-300 rounded-md focus:outline-none
                       focus:border-green-400" />
{errors.password && <small className="text-red-500">{errors.password.message}</small>}
</div>
<button type="submit" className="bg-green-600 text-white py-2 px-6 rounded
                          -md cursor-pointer transition-colors 
                          duration-300 hover:bg-green-500 mx-auto block mt-5">
Submit
</button>
</form>
<p className="mt-4">Not registered?
<a href="#" className="text-blue-500 
                  hover:underline"> Create an account</a>
</p>
</div>
</main>
);
}
