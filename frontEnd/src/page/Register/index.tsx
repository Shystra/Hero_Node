import style from './Register.module.css'
import logo from '../../assets/logo.webp'
import { Input } from '../../components/Input'


export function Register() {
    return (
        <div className={style.background}>
            <div className='container'>
                <p className={style.navigate}>Home {'>'} Área de Cadastro</p>
                    


                <div className={style.wrapper}>
                    <div className={style.imageContainer}>
                        <img src={logo} alt='' />
                    </div>
                    <div className={style.card}>
                        <h2>Olá, seja bem vindo</h2>
                        <form>
                            <Input placeholder='Email' type='text'/>
                            <Input placeholder='Senha' type='password'/>

                            {/* <Input placeholder="Email" type='text'{...register('email', { required: true })} error={errors.email && errors.email.message} />
                            <Input placeholder="Senha" type="password"{...register('password', { required: true })} /> */}
                            <button>Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}