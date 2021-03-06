const cheerio = require('cheerio');
const auth = require('../../../custom_commands/auth.js');
const utils = require('../../../custom_commands/utils.js');
module.exports = {
    /*
  'H-15 test 0num': function (client) {
    auth
        .login(client);
//    utils.opendir1(client) // test対象Directoryを開く
    utils.open_mng(client)
    utils.open_proc(client)
    client
        .expect.element('#listSearchResultId > tbody').to.not.be.present
    utils.open_proc_edit_user(client, '//*[@id="listSearchUser"]/option[text()="selenium0 rows"]')
    utils.click_dialog_search(client)
    client
//        .waitForElementPresent('.progress-image > img',20000)
        .click('#closeButton')
        .pause(1000)
    auth.logout(client); // logout
    client.end();
  },
  'H-15 test 1num': function (client) {
    auth
        .login(client);
//    utils.opendir1(client) // test対象Directoryを開く
    utils.open_mng(client)
    utils.open_proc(client)
    client
        .expect.element('#listSearchResultId > tbody').to.not.be.present
    utils.open_proc_edit_user(client, 'selenium1 rows')
    utils.click_dialog_search(client)
    client
        .waitForElementNotPresent('.progress-image > img', 15000)
        .expect.element('#listSearchResultId > tbody').to.be.present
    client
        .source( function(result){
            const $ = cheerio.load(result.value);
            this.assert.equal(1, $('#listSearchResultId > tbody').children().length );
        })
    auth.logout(client); // logout
    client.end();
  },
  */
  'H-15 test 21num': function (client) {
    auth
        .login(client);
//    utils.opendir1(client) // test対象Directoryを開く
    utils.open_mng(client)
    utils.open_proc(client)
    utils.open_proc_edit_user(client, 'selenium21 rows');
    client
        .expect.element('#listSearchResultId > tbody').to.not.be.present
    utils.click_dialog_search(client);
    client
        .waitForElementNotPresent('.progress-image > img', 15000)
        .expect.element('#listSearchResultId > tbody').to.be.present
    /*
    client
        .source( function(result){
            const $ = cheerio.load(result.value);
            this.assert.equal(21, $('#listSearchResultId > tbody').children().length );
            this.assert.equal(1, $('#paging > ul > li.active').children().length );
            this.assert.equal('次へ', $('#paging > ul > li:nth-child(4) > a').text() );
        })
*/
    auth.logout(client); // logout
    client.end();
  }
};

