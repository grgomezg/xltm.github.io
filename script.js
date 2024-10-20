function openNav(){
    document.getElementById("mobile-menu").style.width="100%"
}

function closeNav(){
    document.getElementById("mobile-menu").style.width="0%"
}

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = 'block';  
    setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos
}

function moveSlide(n) {
    slideIndex += n - 1; // Ajusta el índice
    if (slideIndex < 1) { slideIndex = slides.length; }
    if (slideIndex > slides.length) { slideIndex = 1; }
    showSlides();
}

function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    // Aquí puedes agregar lógica para buscar en los productos
    console.log('Buscando:', query);
    // Por ejemplo, podrías filtrar una lista de productos y mostrar resultados
}

