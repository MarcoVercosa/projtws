
import "./menulateral.css"

import { Link } from 'react-router-dom'


function MenuLateral() {

    return (
        <>
            <nav className="manulateral_nav">
                <div className="manulateral_div"></div>

                <ul className="manulateral_ul_logo">
                    <li className="manulateral_li_logo"><i className="fas fa-arrow-alt-circle-right fa-2x"></i>
                            UOL</li>
                </ul>
                {/* <i class="fas fa-caret-square-down fa-4x"></i> */}
                <ul className="manulateral_ul">
                    <li className="manulateral_li"><i className="fas fa-chart-line"></i>
                                Dashboard
                            </li>
                    <Link to="/">
                        <li className="manulateral_li"> <i className="fas fa-paper-plane"></i>
                                Solicitar novo JOB
                            </li></Link>

                    <Link to="/lista">
                        <li className="manulateral_li"> <i className="fas fa-th-list"></i>
                                Lista de acionamentos
                            </li></Link>
                    <li className="manulateral_li"> <i className="fas fa-info"></i>
                                Informações de JOBS
                            </li>
                    <li className="manulateral_li"><i className="fas fa-user"></i>
                                login
                            </li>
                </ul>

            </nav>
            {/* <FormularioJob /> */}
        </>
    )
}

export default MenuLateral  