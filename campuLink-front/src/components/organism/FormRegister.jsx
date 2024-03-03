import Logo from '../../assets/img/Logo.png'

function FormRegister() {
    return ( 
        <div className='main-container'>
        <div className='registration-form'>
          <div className='frame'>
            <div className='logo'>
              <img src={Logo} alt="" />
            </div>
            <span className='join-community'>
              Únete a nuestra comunidad estudiantil
            </span>
            <span className='welcome-message'>
              Bienvenido a nuestra red social estudiantil. Regístrate ahora para
              conectarte con compañeros, acceder a recursos educativos y
              participar en eventos emocionantes.
            </span>
          </div>
          <div className='frame-c'>
            <div className='group-d'>
              <div className='frame-e'>
                <span className='name-field'>Nombre(s)</span>
                <div className='frame-f'>
                  <span className='name-field-10'>Nombre(s)</span>
                </div>
              </div>
            </div>
            <div className='group-11'>
              <div className='frame-12'>
                <span className='surname-field'>Apellidos(s)</span>
                <div className='frame-13'>
                  <span className='surname-field-14'>Apellidos(s)</span>
                </div>
              </div>
            </div>
            <div className='frame-15'>
              <span className='email-field'>Correo Electrónico</span>
              <div className='frame-16'>
                <span className='correo-electronico'>Correo Electrónico</span>
              </div>
            </div>
            <div className='frame-17'>
              <span className='contrasena'>Contraseña</span>
              <div className='frame-18'>
                <div className='frame-19'>
                  <div className='ellipse' />
                  <div className='ellipse-1a' />
                  <div className='ellipse-1b' />
                  <div className='ellipse-1c' />
                  <div className='ellipse-1d' />
                  <div className='ellipse-1e' />
                  <div className='ellipse-1f' />
                  <div className='ellipse-20' />
                  <div className='ellipse-21' />
                  <div className='ellipse-22' />
                </div>
                <div className='remove-red-eye' />
              </div>
            </div>
            <div className='frame-23'>
              <span className='text-a'>Confirmar Contraseña</span>
              <div className='frame-24'>
                <div className='frame-25'>
                  <div className='ellipse-26' />
                  <div className='ellipse-27' />
                  <div className='ellipse-28' />
                  <div className='ellipse-29' />
                  <div className='ellipse-2a' />
                  <div className='ellipse-2b' />
                  <div className='ellipse-2c' />
                  <div className='ellipse-2d' />
                  <div className='ellipse-2e' />
                  <div className='ellipse-2f' />
                </div>
                <div className='remove-red-eye-30' />
              </div>
            </div>
          </div>
          <div className='frame-31'>
            <div className='rectangle-32' />
            <span className='text-b'>
              Al registrarte, aceptas nuestros Términos de Servicio y Política de
              Privacidad.
            </span>
          </div>
          <div className='box-7'>
            <button className='Button'>
              <span className='text-c'>Registrarme</span>
            </button>
            <div className='section-6'>
              <div className='pic-14' />
              <span className='text-d'>o</span>
              <div className='pic-15' />
            </div>
            <button className='Button-2'>
              <div className='wrapper-8'>
                <div className='img-10' />
                <span className='text-e'>Registrarme con Google</span>
              </div>
            </button>
          </div>
          <div className='section-7'>
            <span className='text-f'>¿Ya tienes una cuenta? </span>
            <span className='text-10'>Inicia sesión aquí.</span>
          </div>
        </div>
        <div className='rectangle-33' />
      </div>
     );
}

export default FormRegister;