"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rollup_plugin_typescript2_1 = __importDefault(require("rollup-plugin-typescript2"));
const plugin_node_resolve_1 = __importDefault(require("@rollup/plugin-node-resolve"));
const plugin_commonjs_1 = __importDefault(require("@rollup/plugin-commonjs"));
const plugin_json_1 = __importDefault(require("@rollup/plugin-json"));
const addon_config_json_1 = __importDefault(require("../addon.config.json"));
exports.default = addon_config_json_1.default.CPISide.map(endpoint => {
    return {
        input: endpoint,
        output: [
            {
                dir: '../publish',
                format: 'cjs',
            }
        ],
        external: [],
        plugins: [
            rollup_plugin_typescript2_1.default({
                tsconfigOverride: {
                    compilerOptions: {
                        module: "es2015",
                        declaration: false,
                    }
                },
                include: ['**/*.ts']
            }),
            plugin_node_resolve_1.default(),
            plugin_commonjs_1.default(),
            plugin_json_1.default()
        ]
    };
});
//# sourceMappingURL=rollup.config.js.map