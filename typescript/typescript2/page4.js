// generate html tags
// (header1) => <h1>header</h1>
// {header2} => <h2>header</h2>
// (data) => <p>data</p>
function generateTag(tag, data) {
    console.log("<".concat(tag, ">").concat(data, "</").concat(tag, ">"));
}
//generateTag('h1', 'header 11')
//generateTag('h1', 'header 11')
//generateTag('h1', 'header 11')
//generateTag('p', 'para 1')
//generateTag('p', 'para 2')
//generateTag('p', 'para 3')
function generateH1(data) {
    console.log("<h1>".concat(data, "</h1>"));
}
function generatePara(data) {
    console.log("<p>".concat(data, "</p>"));
}
//generateH1( 'header 11')
//generateH1( 'header 11')
//generateH1( 'header 11')
//generatePara( 'para 1')
//generatePara( 'para 2')
//generatePara( 'para 3')
// closure
function generateTAG(tag) {
    console.log(tag);
    // inner return function
    return function (data) {
        //   console.log(`<${tag}>${data}</${tag}>`)
        return "<".concat(tag, ">").concat(data, "</").concat(tag, ">");
    };
}
var generateTAGH1 = generateTAG('h1');
//console.log(generateTAG('h1')('this is header'))
console.log(generateTAGH1);
/*generateTAGH1('this is header 1')
generateTAGH1('this is header 2')
generateTAGH1('this is header 3')
generateTAGH1('this is header 4') */
// console.log(generateTAGH1('this is header1'))
// reference pointing to a anonymous function where the tag value (input of outer function) is h1
// generateTAGH1 = annoymous function
