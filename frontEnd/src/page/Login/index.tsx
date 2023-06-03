import style from './Login.module.css';
import logo from '../../assets/logo.webp'
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { BsKey } from 'react-icons/bs';
import { api } from '../../server';

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

    const {register, handleSubmit, formState: {errors}} = useForm<IFormValues>({
        resolver: yupResolver(schema),});

    const submit = handleSubmit( async ({email, password}) => {
        const result = await api.post('/users/auth', {
            email: email,
            password: password
        });
        console.log(result)
    })

    return (
        <div className={style.background}>
            <div className={`container ${style.container}`}>
                <div className={style.wrapper}>

                <div>
                    <img src={logo} alt='' />
                </div>
                <div className={style.card}>
                    <h2>Olá, seja bem vindo!</h2>
                    <form onSubmit={submit}>
        <Input placeholder="Email" type='text' icon={<AiOutlineMail size={20} />}{...register('email', { required: true})} error={errors.email && errors.email.message}/>
        <Input placeholder="Senha" type="password" icon={<BsKey size={20} />}{...register('password', { required: true})} error={errors.password && errors.password.message}/>
                <Button text='Entrar'/>
                    </form>
                        <div className={style.register}> 

                            <span>Ainda não tem conta? <Link to={'/register'}>Cadastre-se</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}