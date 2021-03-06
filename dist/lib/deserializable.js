"use strict";
require('reflect-metadata');
function Deserializable() {
    return function (constructor) {
        var deserializeProperties = Reflect.getMetadata('deserializeProperties', constructor);
        if (!deserializeProperties) {
            deserializeProperties = [];
            Reflect.defineMetadata('deserializeProperties', deserializeProperties, constructor);
        }
    };
}
exports.Deserializable = Deserializable;
function Deserialize(replaceWithId) {
    if (replaceWithId === void 0) { replaceWithId = true; }
    return function (target, propertyKey) {
        var deserializeProperties = Reflect.getMetadata('deserializeProperties', target.constructor);
        if (!deserializeProperties) {
            deserializeProperties = [];
            Reflect.defineMetadata('deserializeProperties', deserializeProperties, target.constructor);
        }
        deserializeProperties.push(propertyKey);
        Reflect.defineMetadata('deserialize', { replaceWithId: replaceWithId }, target, propertyKey);
    };
}
exports.Deserialize = Deserialize;
function isDeserializable(obj) {
    return obj instanceof Object && Reflect.getMetadata('deserializeProperties', obj.constructor);
}
exports.isDeserializable = isDeserializable;
//# sourceMappingURL=deserializable.js.map