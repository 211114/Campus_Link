import Logo from '../../assets/img/Logo.png'

function FormLogin() {
  return (
    <div className="container-login">
      <div className="box-login">
        <div className="header-form">
            <img src={Logo} alt="" />
            <h4>Iniciar Sesión</h4>
            <p>¡Bienvenido de nuevo! Por favor, inicia sesión para acceder a tu cuenta.</p>
        </div>
        <form className="form-login">
            <div className="wrapper-input">
                <label htmlFor="email">Correo electronico</label>
                <input type="email" name="emaio" id="email" placeholder='Correo electronico' />
            </div>
            <div className="wrapper-input">
                <label htmlFor="pass">Contraseña</label>
                <input type="password" name="password" id="pass" placeholder='*******' />
            </div>
            <button className="btn-login">
                Iniciar Sesión
            </button>
            <br />
            <span className='login-divi'>------------- o -------------</span>
            <br />
            <button className="btn-logingoogle">
                <span>G</span> Iniciar Sesión con Google
            </button>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
