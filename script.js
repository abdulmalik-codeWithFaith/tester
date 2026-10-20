// Add interactivity here
document.addEventListener('DOMContentLoaded', () => {
    const checkoutButtons = document.querySelectorAll('.checkout-button');

    checkoutButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.closest('.product-card').querySelector('h3').textContent;
            alert(`'${productName}' has been added to your cart! (Note: This is a demo. A real checkout would redirect to a payment gateway.)`);
        });
    });
});
