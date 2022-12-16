
const getIndexPage = (req, res) => {
     res.render('index'
     ,{
        link:'index',
        keywords:'Endsütri Mühendisi,Çukurova,Üniversitesi',
     }
     ) };
const getAboutPage = (req, res) => { 
    res.render('about'
    ,{
        link:'about',
        keywords:'Endsütri Mühendisi,BArış BAr, Kişisel web Sitesi, hakkında sayfası',
     }
    )
    
};
const getWorkPage = (req, res) => { 
    res.render('work'
    ,{
        link:'about',
        keywords:'Endsütri Mühendisi,BArış BAr, Kişisel web Sitesi, hakkında sayfası',
     }

) };
const getBlogPage = (req, res) => { 
    res.render('blog'
    ,{
        link:'about',
        keywords:'Endsütri Mühendisi,BArış BAr, Kişisel web Sitesi, hakkında sayfası',
     }
    ) };
const getContactPage = (req, res) => {
     res.render('contact'
     ,{
        link:'about',
        keywords:'Endsütri Mühendisi,BArış BAr, Kişisel web Sitesi, hakkında sayfası',
     }
     ) };


export {
    getIndexPage,
    getAboutPage,
    getContactPage,
    getWorkPage,
    getBlogPage,
}