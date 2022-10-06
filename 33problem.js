console.log('--------------------');
for (var year = 2020; year <= 3030; year++)
    {
    var d = new Date(year, 12, 31);
    if ( d.getDay() === 0 )
        console.log("31st december is being a tuesday  "+year);
    }
console.log('--------------------');