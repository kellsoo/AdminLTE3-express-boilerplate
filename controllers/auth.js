module.exports.getLogin = (req, res, next) => {
    const currentPage = {
        title: "login"
    };
    res.render("auth/login.ejs", { currentPage });
};

module.exports.postLogin = (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
    console.log("postLogin");
    res.redirect("/login");
};
