exports.index = function (req,res) {
    res.render('home/index', { title: 'Web Wranglers of Tx' })
};
exports.FAQ = function(req, res) {
    res.render('home/FAQ', { title: 'FAQ'})
};

exports.contact = function(req, res) {
    res.render('home/contact', { title: 'Contact'})  
};