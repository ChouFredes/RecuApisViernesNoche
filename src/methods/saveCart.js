export const saveCartToBackend = async (cart) => {
    try {
        console.log("Guardo carrito")
      const response = await fetch('http://localhost:8080/api/saveCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(cart),
      });
  
      if (!response.ok) {
        throw new Error('Error saving cart');
      }
    } catch (error) {
      console.error('Failed to save cart:', error);
    }
  };
  