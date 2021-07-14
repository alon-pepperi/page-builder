'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*
The return object format MUST contain the field 'success':
{success:true}

If the result of your code is 'false' then return:
{success:false, erroeMessage:{the reason why it is false}}
The error Message is importent! it will be written in the audit log and help the user to understand what happen
*/
async function install(client, request) {
    return { success: true, resultObject: {} };
}
async function uninstall(client, request) {
    return { success: true, resultObject: {} };
}
async function upgrade(client, request) {
    return { success: true, resultObject: {} };
}
async function downgrade(client, request) {
    return { success: true, resultObject: {} };
}

exports.downgrade = downgrade;
exports.install = install;
exports.uninstall = uninstall;
exports.upgrade = upgrade;
