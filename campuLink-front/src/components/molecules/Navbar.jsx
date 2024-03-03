import Logo from '../../assets/img/Logo.png'
import IconSearch from '../../assets/img/Search.svg'
import IconSettings from '../../assets/img/Settings.svg'
import '../../assets/css/navbar.css'

function Navbar({children}) {

    return ( 
        <div className="flex-container">
            <div className="navbar">
                <div className='box-left'>
                    <img className='logo' src={Logo} alt="Logo de campuslink" />
                    <div className="box-search">
                        <img className='icon-search' src={IconSearch} alt="" />
                        <input type="search" name="search" id="" placeholder='Buscar'/>
                    </div>
                </div>
                <div className='box-options'>
                    <div className='option' onClick={""}>
                        Inicio
                    </div>
                    <div className='option' onClick={""}>
                        Grupos
                    </div>
                    <div className='option' onClick={""}>
                        Articulos
                    </div>
                    <div className='option' onClick={""}>
                        Comunicados
                    </div>
                </div>
                <div className='box-options-right'>
                    <div className='option' onClick={""}>
                        Mi perfil
                    </div>
                    <div className='box-setting' onClick={""}>
                        <img className='iconSetting' src={IconSettings} alt="" />
                    </div>
                </div>
            </div>

            <main>{children}</main>
            
        </div>
     );
}

export default Navbar;
