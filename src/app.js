document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
    items: [
      { id: 1, name: 'French Bread', img: '1.png', price: 12000},
      { id: 2, name: 'Cinnamon Raisin Bread', img: '2.png', price: 30000},
      { id: 3, name: 'Seed Loaf', img: '3.png', price: 17000},
      { id: 4, name: 'Sandwich Roll', img: '4.png', price: 5000},
      { id: 5, name: 'Sourdough Bread', img: '5.png', price: 14000},
      { id: 6, name: 'Multigrain Bread', img: '6.png', price: 15000},
    ]
  }));
});