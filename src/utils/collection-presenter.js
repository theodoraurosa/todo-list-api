"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionPresenter = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
class CollectionPresenter {
    static serialize(output) {
        return {
            data: output.items,
            meta: {
                currentPage: output.currentPage,
                lastPage: output.lastPage,
                perPage: output.perPage,
                total: output.total,
            },
        };
    }
}
exports.CollectionPresenter = CollectionPresenter;
