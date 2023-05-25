const formatearNumero = (num) => {
    /* const num2 = parseFloat(num).toFixed(2).toLocaleString("es-PE", { style: "currency", currency: "PEN", });
    return num2; */
    const partes = parseFloat(num).toFixed(2).split('.');
    const entero = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const decimal = partes[1];
    return `${entero}.${decimal}`;
}

export default formatearNumero;



