"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ShowUserProfileService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ShowUserProfileService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({
    user_id
  }) {
    const user = await this.usersRepository.findByID(user_id);

    if (!user) {
      throw new _AppError.default('Only authenticated user can update their profiles', 401);
    }

    return user;
  }

}) || _class) || _class) || _class) || _class);
exports.default = ShowUserProfileService;