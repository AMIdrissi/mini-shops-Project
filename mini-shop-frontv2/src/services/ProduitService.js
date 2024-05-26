import HttpClient from "./HttpClient";

class ProduitService {
  produitEndpoint = "/produit";

  getAllProduits() {
    return HttpClient.get(`${this.produitEndpoint}/all`, {
      // Authorization: `Bearer ${Cookies.get("USER")}`,
    }).then((response) => response.data);
  }
}

const produitService = new ProduitService();

export default produitService;
