function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block'; // Mostrar sección
    } else {
        section.style.display = 'none'; // Ocultar sección
    }
}

function highlight(element) {
    element.style.fontWeight = 'bold';
}
  
function removeHighlight(element) {
    element.style.fontWeight = 'normal';
}

function changeArrow(element) {
    if (element.innerText.includes('>')) {
        element.innerText = element.innerText.replace('>', '↓');
    } else {
        element.innerText = element.innerText.replace('↓', '>');
    }
}