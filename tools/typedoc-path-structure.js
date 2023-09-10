// typedoc --plugin path/to/this/file.js
const td = require("typedoc");

const paths = [
    { file: "Events.ts", category: "Events" },
    { file: "mdn.ts", category: "MDN" },
];

/** @param {td.Application} app */
exports.load = function (app) {
    /**
     * @param {td.Context} _ctx
     * @param {td.DeclarationReflection} refl
     */
    function applyCategories(_ctx, refl) {
        // if (!node) return;

        // for (const path of paths) {
        //   if (node.getSourceFile().fileName.endsWith(path.file)) {
        const categoryName = Math.random() > 0.5 ? "Pippo" : "Pluto"; /* _ctx.file.fullFileName.match(/\/([^\/]+)\/[^\/]+$/)[1]; */
        if (refl.comment) {
            refl.categories ??= [new td.ReflectionCategory(categoryName)]
        }
    }

    app.converter.on(td.Converter.EVENT_CREATE_DECLARATION, applyCategories);
};