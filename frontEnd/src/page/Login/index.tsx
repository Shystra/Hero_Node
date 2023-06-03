import style from './Login.module.css';
import logo from '../../assets/logo.webp'
import { Input } from '../../components/Input';



export function Login(){
    return (
        <div className={style.background}>
            <div className={`container ${style.container}`}>
                <div className={style.wrapper}>

                <div>
                    <img src={logo} alt='' />
                </div>
                <div className={style.card}>
                    <h2>Olá, seja bem vindo</h2>
                    <form>
                        <Input placeholder="Email" />
                        <Input placeholder="Senha" />
                        <button>Entrar</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}