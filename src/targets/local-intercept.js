
module.exports = targets => {
    targets.of("@magento/venia-ui").routes.tap(routes => {
        routes.push({
            name: "myNewLaunchesPage",
            pattern: "/new-launches",
            path: require.resolve("../components/NewLaunches")
        });
        return routes;
    });
};