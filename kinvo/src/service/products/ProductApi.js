import Api from "../api";

class ProductApi {
  static GET_PRODUCTS_ENDPOINT = "/getProducts";
  static async getProducts() {
    const response = await Api.get(this.GET_PRODUCTS_ENDPOINT);
    return response;
  }
}

export default ProductApi;
