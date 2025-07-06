// ===========================================
// FUNCIÓN PARA ABRIR WHATSAPP
// ===========================================

function abrirWhatsApp() {
    const telefono = "5491123651159";
    const mensaje = "Hola";
    const enlace = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(enlace, "_blank");
}

// ===========================================
// FUNCIÓN PARA ABRIR WHATSAPP CON MENSAJE PERSONALIZADO
// ===========================================

function abrirWhatsAppConMensaje(mensajePersonalizado = "Hola") {
    const telefono = "5491123651159";
    const enlace = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajePersonalizado)}`;
    window.open(enlace, "_blank");
}

// ===========================================
// FUNCIÓN PARA SOLICITAR INFORME COMERCIAL
// ===========================================

function solicitarInformeComercial() {
    const telefono = "5491123651159";
    const mensaje = "Hola, me gustaría solicitar un informe comercial. Por favor, necesito información sobre el proceso.";
    const enlace = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(enlace, "_blank");
}

// ===========================================
// FUNCIÓN PARA COMPRAR INFORME COMERCIAL
// ===========================================

function comprarInforme() {
    const telefono = "5491123651159";
    const mensaje = "Hola, me gustaría COMPRAR un informe comercial. Por favor, necesito información sobre el proceso de pago y los datos requeridos.";
    const enlace = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(enlace, "_blank");
} 