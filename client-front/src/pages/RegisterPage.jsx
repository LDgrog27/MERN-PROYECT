import { useForm } from 'react-hook-form'
import { registerRequest } from "../api/auth";

function RegisterPage() {

    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit(async (values) => {
        console.log(values);
        const res = await registerRequest(values)
        console.log(res);
    })
    return (

        <div className="bg-zinc-800 max-w-md p-10 round">
            <form onSubmit={onSubmit}>
                <input
                    type="text" {...register('username', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='Username'
                />
                <input
                    type="email" {...register('email', { required: true })}
                    name="email"
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='email'
                />

                <input
                    type="password" {...register('password', { required: true })} name="password"
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder='Password'
                />

                <button type='submit'> Register </button>
            </form>
        </div>
    )
    // para validar el campo username uso el hook register y le paso el nombre del campo y las reglas de validacion
}
export default RegisterPage