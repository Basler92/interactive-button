document.getElementById('myButton').addEventListener('click', function() {
    changeColor();
});

function changeColor() {
    var button = document.getElementById('myButton');
    var currentColor = button.style.backgroundColor;

    if (currentColor === 'rgb(52, 152, 219)') {
        button.style.backgroundColor = '#e74c3c'; // Zmiana koloru na czerwony
    } else {
        button.style.backgroundColor = '#3498db'; // Powrót do oryginalnego koloru
    }
}
