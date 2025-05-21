// Example: Alert on clicking a food card
document.querySelectorAll('.food-card').forEach(card => {
    card.addEventListener('click', () => {
      alert('Yum! Want to order this dish?');
    });
  });
  