import ApiExec from "../utils/ApiExec";

class CatalogService {
  getCatalogs = (catalogs) => {
    return ApiExec({ catalogs: catalogs }, "catalogs/simeg/get", "POST")
      .then((res) => res)
      .then((res) => res)
      .catch((error) => error);
  };
}
export default new CatalogService();
