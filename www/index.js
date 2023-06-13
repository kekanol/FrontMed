var isLoggedIn = false;

if (isLoggedIn) {
    Router.redirect('/www/main/main.html');
    console.log("redirected to/www/main/main.html")
} else {
    Router.redirect('/www/auth/auth.html');
    console.log("redirected to www/auth/auth.html")
}
