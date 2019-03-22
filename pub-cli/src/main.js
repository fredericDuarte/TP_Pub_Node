var pubServices = require('pub-services');

module.exports = {
    getListPub: pubServices.services.pubService.listeAll,
    getListOpen: pubServices.services.pubService.listeOpen

}