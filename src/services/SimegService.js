import ApiExec from "../utils/ApiExec";

class SimegService {
  getStatsByTopic = (params) => {
    return ApiExec(params, "simeg/get-stats-by-topic", "POST")
      .then((res) => res)
      .then((res) => res)
      .catch((e) => e);
  };

  getEvaluatedProgramsYear = (params) => {
    return ApiExec(params, "simeg/get-evaluated-programs-year", "POST")
      .then((res) => res)
      .then((res) => res)
      .catch((e) => e);
  };

  getEvaluatedProgramsDep = (params) => {
    return ApiExec(params, "simeg/get-evaluated-programs-dep", "POST")
      .then((res) => res)
      .then((res) => res)
      .catch((e) => e);
  };

  ///Eliminar api
  /* getEvaluatedPrograms = (params) => {
    return ApiExec(params, "simeg/get-evaluated-programs", "POST")
      .then((res) => res)
      .then((res) => res)
      .catch((e) => e);
  }; */
}

export default new SimegService();
