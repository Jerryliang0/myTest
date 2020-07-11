console.log("这是A模块")
define(["b"], function (obj) {
    console.log(obj);
    return {
        name: "amodule"
    }
});