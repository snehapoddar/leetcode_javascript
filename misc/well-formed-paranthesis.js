function generateParenthesis(n) {
    if(n===1) return ['()'];
    let res = new Set();
    let p = generateParenthesis(n-1);
    console.log(p);
    for(let i=0; i<p.length; i++){
    	res.add('()'+p[i]);
    	for(let j=0; j<p[i].length; j++){
    		if(p[i][j]==='(') {
                res.add(p[i].slice(0,j+1)+'()'+p[i].slice(j+1));
            }
    	}
    }
    return [...res];
};
console.log(generateParenthesis(2));