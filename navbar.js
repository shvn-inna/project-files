document.addEventListener('DOMContentLoaded', function() {
    // Загрузка navbar.html в элемент с id "navbar-placeholder"
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading the navbar:', error));
});
