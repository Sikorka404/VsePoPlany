function mass_two() {
        var n = 3,
            m = 3;
        var mas = [];
        var sum = [];
        for (var i = 0; i < m; i++) {
            mas[i] = [];
            for (var j = 0; j < n; j++) {
                mas[i][j] = Math.round(Math.random() * 30) + 1;
                
            }
        }
for (var i=0;i<n;i++){
    for(var j=0;j<n;j++){
            sum[i]+=mas[j][i];
          }
}
        console.log(mas);
        console.log(sum);

    }