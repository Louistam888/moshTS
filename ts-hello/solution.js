"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(9, true);
component.onClick();
console.log("likesCount: ".concat(component.likesCount, ", isSelected:").concat(component.isSelected));
