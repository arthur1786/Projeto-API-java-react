import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../NotificationButton";
import './styles.css';

//Componente relacionado ao SalesCard
function SalesCard() {

    //Constante responsável pela data máxima (atual)
    const max = new Date();
    
    //Constante responsável pela data mínima (data de 1 ano no passado)
    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    //Definindo o estado do componente da data minima
    const [datamin, setDataMin] = useState(min);

    //Definindo o estado do componente da data máxima
    const [datamax, setDataMax] =useState(max);

    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={datamin}
                            onChange={(date: Date) => setDataMin(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={datamax}
                            onChange={(date: Date) => setDataMax(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />

                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        </>
    )
}

export default SalesCard