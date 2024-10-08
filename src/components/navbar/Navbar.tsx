import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    /**
      * Cria a constante navigate, que receberá o Hook useNavigate().
      * Através da constante navigate, o usuário será redirecionado 
      * para outras rotas da aplicação, conforme a necessidade.
      */
    const navigate = useNavigate()

    /**
     * Criamos uma desestruturação para receber a função handleLogout(), 
     * disponível na Context AuthContext, através do Hook useContext(). 
     */
    const { handleLogout } = useContext(AuthContext)

    /**
     * Criamos a função logout(), que será responsável por efetuar 
     * o processo de logout do usuário. A função logout() executa a 
     * função handleLogout() da Context AuthContext, responsável por 
     * reiniciar os dados do usuário no contexto da aplicação, ou seja, 
     * retornando para o Estado inicial. 
     * 
     * Na sequência, será exibido um alerta para informar o usuário que 
     * o logout foi efetuado com sucesso e redireciona o usuário para a 
     * Página de Login, através da constante navigate. 
     */
    function logout() {
        handleLogout()
        ToastAlerta('O usuário foi desconectado com sucesso!', "sucesso")
        navigate('/')
    }

    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>

                <div className="container flex justify-between text-lg">

                    <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>
                        <Link to='' onClick={logout} className="hover:underline">
                            Sair
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar