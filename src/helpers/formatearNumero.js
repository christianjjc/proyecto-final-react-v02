const formatearNumero = (num) => {
    const num2 = parseFloat(num).toFixed(2).toLocaleString("es-PE", { style: "currency", currency: "PEN", });
    return num2;
}

export default formatearNumero;