import HttpClient from "./HttpClient";

class CartService {
  produitEndpoint = "/cart";

  async getCart() {
    return await HttpClient.get(`${this.produitEndpoint}`).then(
      (response) => response.data
    );
  }

  async addToCart(productId, qte) {
    const response = await HttpClient.post(`${this.produitEndpoint}/add`, {
      productId: productId,
      quantity: qte,
    });
    return response.data;
  }
}

const cartService = new CartService();

export default cartService;
