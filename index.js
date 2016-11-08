var trashCan = [] ;

process.on('exit',function() {
    console.log('exit') ;
}) ;

setInterval(function() {
    console.log("memory usage: " + process.memoryUsage()["rss"] / 1024 / 1024) ;
    var a = new Array(10000) ;
    for (var i = 0 ; i < a.length ; i++) {
        a[i] = (Math.random() + 10000).toString() ;
    }
    trashCan.push(a) ;
},500) ;