
const getIndexPage = (req, res) => { res.render('index') };
const getAboutPage = (req, res) => { res.render('about') };
const getWorkPage = (req, res) => { res.render('work') };
const getBlogPage = (req, res) => { res.render('blog') };
const getContactPage = (req, res) => { res.render('contact') };


export {
    getIndexPage,
    getAboutPage,
    getContactPage,
    getWorkPage,
    getBlogPage,
}