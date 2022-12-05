import ApiExec from "../utils/ApiExec";

class SimegService {
  getStatsByTopic = (params) => {
    return ApiExec(params, "simeg/get-stats-by-topic", "POST")
      .then((res) => res)
      .then((res) => res)
      .catch((e) => e);
  };

  getEvaluatedPrograms = (params) => {
    return ApiExec(params, "simeg/get-evaluated-programs", "POST")
      .then((res) => res)
      .then((res) => res)
      .catch((e) => e);
  };
}

export default new SimegService();
