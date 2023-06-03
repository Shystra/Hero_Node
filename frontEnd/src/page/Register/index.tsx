import style from './Register.module.css';
import logo from '../../assets/logo.webp';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BsKey, BsPerson } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'
import { api } from '../../server';


interface IFormValues{
    name: string;
    email: string;
    password: string;
}
export function Register() {
    const schema = yup.object().shape({
        name: yup.string().required('Campo de nome obrigatório'),
        email: yup.string().email('Digite um e-mail válido').required('Campo de e-mail obrigatório'),
        password: yup.string().min(6, 'Mínimo de 6 caracteres').required('Campo de senha obrigatório'),
    });

    const {register, handleSubmit, formState: {errors}} = useForm<IFormValues>( {resolver: yupResolver(schema)})

    // --> Salva todas as credenciais ^ ali de cima
    const submit = handleSubmit( async (data) => {
        const result = await api.post('/users', {
            name: data.name,
            email: data.email,
            password: data.password
        });
        console.log(result)
    })
    // --> chama a api para validação

    return (
        <div className={style.background}>
            <div className='container'>
                <p className={style.navigate}><Link to={'/'}>Home</Link> {'>'} Área de Cadastro</p>



                <div className={style.wrapper}>
                    <div className={style.imageContainer}>
                        <img src={logo} alt='' />
                    </div>
                    <div className={style.card}>
                        <h2>Área de Cadastro</h2>
                        
                        <form onSubmit={submit}>
                            {/* <Input placeholder='Email' type='text' />
                            <Input placeholder='Senha' type='password' /> */}

    <Input placeholder="Nome" type='text' icon={<BsPerson size={20} />} {...register('name', { required: true })} error={errors.name && errors.name.message} />
    <Input placeholder="Email" type='text' icon={<AiOutlineMail size={20} />}{...register('email', { required: true })} error={errors.email && errors.email.message} />
    <Input placeholder="Senha" type="password" icon={<BsKey size={20} />} {...register('password', { required: true })} error={errors.password && errors.password.message} />
                            <Button text='Cadastrar' />
                        </form>
                        <div className={style.register}>

                            <span>Já tem Cadastro? <Link to={'/'}>Voltar à Página Inicial</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}