function getExcerpt( str, limit ){
    var fullText = str;
    var shortText = str;
    shortText = shortText.substr( 0, shortText.lastIndexOf( ' ', limit ) ) + '...';
    var returnString = {
        fullText: fullText,
        shortText: shortText
    };
    return returnString;
}