"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ListProviderMonthAvailabilityService = _interopRequireDefault(require("../../../services/ListProviderMonthAvailabilityService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProviderMonthAvailabilityController {
  async show(req, res) {
    const {
      provider_id
    } = req.params;
    const {
      month,
      year
    } = req.query;

    const providerMonthAvailability = _tsyringe.container.resolve(_ListProviderMonthAvailabilityService.default);

    const availability = await providerMonthAvailability.execute({
      provider_id,
      month: Number(month),
      year: Number(year)
    });
    return res.json(availability);
  }

}

exports.default = ProviderMonthAvailabilityController;