import HttpClient from "./HttpClient";

class CartService {
  produitEndpoint = "/cart";

  async getCart() {
    return await HttpClient.get(`${this.produitEndpoint}/`).then(
      (response) => response.data
    );
  }
}

const cartService = new CartService();

export default cartService;
