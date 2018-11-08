module.exports =  function(source, map){
    console.log(source, map);
    this.callback(
        null,
        `export default function(Component){
            Component.options.__docs = ${
                console.log(source)
            }
        }`,map)
};