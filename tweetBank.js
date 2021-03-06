const _ = require('lodash');
var data = [];
var tweetCounter = 0;

function add (name, content, picture) {
    ++tweetCounter
    data.push({ name: name, content: content, picture: picture, id:  tweetCounter});
    return tweetCounter;
}

function list () {
    return _.cloneDeep(data);
}

function find (properties) {

    return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add, list, find };

const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

const getFakePicture = function(){
    return 'https://www.randomdoggiegenerator.com/randomdoggie.php'
}

const getFakeName = function() {
    const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

module.exports.add ('x', 'hi', getFakePicture());
module.exports.add('x', "tada", getFakePicture());

for (let i = 0; i < 10; i++) {
    module.exports.add( getFakeName(), getFakeTweet(), getFakePicture() );
}

