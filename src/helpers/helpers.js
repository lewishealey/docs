import { execSync } from "child_process";

export function tokenTransform(tokens) {
    let keys = [];
    Object.keys(tokens).map(function(token, index) {
        keys.push(`$ ${token}`);
    })
    return keys;
}