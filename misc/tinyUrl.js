var urlMap = new Map();
var encode = function(longUrl) {
    const value = Date.now().toString(36);
    console.log(Date.now(), value);
    urlMap.set(value, longUrl)
    return "http://tinyurl.com/" + value;
};

var decode = function(shortUrl) {
    const str = shortUrl.split('.com/');
    const key = str[1];
    return urlMap.get(key);
};
var url = "https://leetcode.com/problems/design-tinyurl";
console.log(decode(encode(url)));