const f = async () => {
    // console.log("asdf");
};

// tslint:disable:no-floating-promises
(async () => {
    await f();
})();
