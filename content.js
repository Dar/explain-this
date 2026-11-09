function initializeExtension() {
    // Your initialization code here for Explain this extension;
    const button = document.createElement('button');
    button.textContent = 'Explain this';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('Explain this button clicked!');
    });
}