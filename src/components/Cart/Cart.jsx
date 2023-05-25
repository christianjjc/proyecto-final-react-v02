import React, { useContext } from 'react';
import imgTrash from './trash3.svg'
import CartContext from '../../store/cart-context';
import './Cart.css'
import { Link } from 'react-router-dom';
import formatearNumero from '../../helpers/formatearNumero';


export const TableRow = ({ item, index })=>{

    return (
            <tr id={item.id}>
                <th scope="row" className='text-center'>{index+1}</th>
                <td className='text-center'>s</td>
                <td className='text-center'><img src={item.imagen} className="imgCarrito" /></td>
                <td>{item.titulo}</td>
                <td className='text-center'>
                    <a id={`btnPlus-${item.id}`} className="botonesCarrito btnAumentaCantidad" href="#">+</a>
                        {item.cantidad}
                    <a id={`btnDot-${item.id}`} className="botonesCarrito btnRestaCantidad" href="#">-</a>
                </td>
                <td  className='text-end pe-3'>US$ {formatearNumero(item.precio)}</td>
                <td  className='text-end pe-3'>US$ {formatearNumero(item.cantidad * item.precio)}</td>
                <td className='text-center'>
                    <a id={item.id} className="botonesCarrito btnEliminaProdCarrito" href="#">
                        <img src={imgTrash} />
                    </a>
                </td>
            </tr>
    )
}

const Cart = () => {
    const cartCtx = useContext(CartContext);

        if (cartCtx.productos.length) {
            const productos = cartCtx.productos;
            return (
                <>
                    <div className='my-4'>
                        <div className="table-responsive-xl">
                            <table className="table table-sm table-hover align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col" className='text-center'>#</th>
                                        <th scope="col" className='text-center'>Sel</th>
                                        <th scope="col" className='text-center'>Foto</th>
                                        <th scope="col" className='text-center'>Nombre</th>
                                        <th scope="col" className='text-center'>Cantidad</th>
                                        <th scope="col" className='text-center'>Precio Unitario</th>
                                        <th scope="col" className='text-center'>Subtotal</th>
                                        <th scope="col" className='text-center'>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    { productos.map((item, index) => <TableRow item={item} key={item.id} index={index} />) }

                                    <tr>
                                        <th scope="row"></th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="h4">Total Carrito</td>
                                            <td className="h4 text-end pe-3">US$ {formatearNumero(cartCtx.getCartPrice())}</td>
                                            <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-end pb-4">
                            <a id="btnVaciarCarrito" className="btn btn-warning"  href="#">
                                Vaciar Carrito
                                <img src={imgTrash} alt="Vaciar Carrito" />
                            </a>
                        </div>
                    </div>
                </>
            );

        } else {

            return(
                <>
                    <div className="d-flex flex-column  justify-content-center align-items-center py-4 my-4">
                        <p>¡Ups! Aún no tienes productos en tu carrito.</p>
                        <p>Corre a la tienda para ingresar tus pedidos.</p>
                        <p>
                            <Link to={'/'} className="btn btn-warning">Regresar a la tienda</Link>
                        </p>
                    </div>
                </>
            )

        }
};

export default Cart;