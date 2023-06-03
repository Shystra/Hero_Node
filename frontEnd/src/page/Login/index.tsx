import style from './Login.module.css';
import logo from '../../assets/logo.webp'
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

interface IFormValues {
    email: string;
    password: string;
}

export function Login(){
    const schema = yup.object().shape({
        email: yup
        .string()
        .email('Digite um e-mail válido.')
        .required('Campo de e-mail obrigatório'),


        password: yup.string().required('Campo de senha obrigatório'),
    })

    const {register, handleSubmit} = useForm<IFormValues>({
        resolver: yupResolver(schema),});

    const submit = handleSubmit((data)=> {
        console.log(data)
    })

    return (
        <div className={style.background}>
            <div className={`container ${style.container}`}>
                <div className={style.wrapper}>

                <div>
                    <img src={logo} alt='' />
                </div>
                <div className={style.card}>
                    <h2>Olá, seja bem vindo</h2>
                    <form onSubmit={submit}>
                        <Input placeholder="Email"{...register('email', { required: true})} />
                        <Input placeholder="Senha"{...register('password', { required: true})} />
                        <button>Entrar</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}