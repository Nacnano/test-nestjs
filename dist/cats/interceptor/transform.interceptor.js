"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsInterceptor = exports.ExcludeNullInterceptor = exports.TransformInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const operators_2 = require("rxjs/operators");
let TransformInterceptor = class TransformInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_2.map)((data) => ({ data })));
    }
};
TransformInterceptor = __decorate([
    (0, common_1.Injectable)()
], TransformInterceptor);
exports.TransformInterceptor = TransformInterceptor;
let ExcludeNullInterceptor = class ExcludeNullInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_2.map)((value) => (value === null ? "" : value)));
    }
};
ExcludeNullInterceptor = __decorate([
    (0, common_1.Injectable)()
], ExcludeNullInterceptor);
exports.ExcludeNullInterceptor = ExcludeNullInterceptor;
let ErrorsInterceptor = class ErrorsInterceptor {
    intercept(context, next) {
        return next
            .handle()
            .pipe((0, operators_1.catchError)((err) => (0, rxjs_1.throwError)(() => new common_1.BadGatewayException())));
    }
};
ErrorsInterceptor = __decorate([
    (0, common_1.Injectable)()
], ErrorsInterceptor);
exports.ErrorsInterceptor = ErrorsInterceptor;
//# sourceMappingURL=transform.interceptor.js.map