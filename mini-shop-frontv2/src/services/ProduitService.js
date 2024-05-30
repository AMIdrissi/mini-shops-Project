import HttpClient from "./HttpClient";

class ProduitService {
  produitEndpoint = "/produit";

  async getAllProduits() {
    const response = await HttpClient.get(`${this.produitEndpoint}/all`, {});
    return response.data;
  }

  async updateProduct(id, name, category, price, brand, description, quantity) {
    const response = await HttpClient.get(`adminOnly/update/${id}`, {
      name: name,
      category: category,
      price: price,
      brand: brand,
      description: description,
      quantity: quantity,
    });
    return response.data;
  }
  async deleteProduct(id) {
    const response = await HttpClient.get(`adminOnly/update/${id}`);
    return response.data;
  }
}

const produitService = new ProduitService();

export default produitService;
