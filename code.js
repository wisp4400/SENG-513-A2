//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    


    let ctext=txt.replace(/[^\w\s]|_/g, " ");
    let ltext=ctext.toLowerCase();
    let x=ltext.split('\n');
    let nNon=0
    maxLineLength=0
    for (ln of x) {
        if (ln.length>maxLineLength){
            maxLineLength=ln.length;
        }
        a=ln;
        b=a.replace(/\s/g,"")
        if (b.length>0)
        {
            nNon++;
        }
    }    

    words=ltext.replace(/\n/g," ").replace(/\s{2,}/g," ").trim().split(" ")

    twlen=0
    wcount={}
    MFW=[]
    LW=[]
    palindromes=[]
    wcounts=[]
    mostFrequentWords=[]


    if ((words.length===1) && (words[0].length===0)){
        {words={}}

    }
    else{
        for (word of words){
            twlen=twlen+word.length;
            if(word in wcount){
                wcount[word]+=1
            }
            else{
                wcount[word]=1
                if(word.length>1){
                    if (word===word.split('').reverse().join('')){
                        palindromes.push(word);
                    }
                }
                LW.push(word)

            }
        }
    }
    LW.sort(function(a, b){
        if (a.length===b.length){
            if (a<b){return -1}
            else{return 1} 
        }
        else{
            return b.length - a.length}
        })



    for (ct in wcount){
        wcounts.push([ct,wcount[ct]])
    }
    wcounts.sort(function(a, b){
        if (a[1]===b[1]){
            if (a[0]<b[0]){return -1}
            else{return 1} 
        }
        else{
            return b[1] - a[1]}
        })

    topw=wcounts.slice(0,10);

    for (wds of topw){
        strng=wds[0]+ "(" + wds[1] +")";
        mostFrequentWords.push(strng)
    }



    let longestWords=LW.slice(0,10);
    let nChars=txt.length;
    let nWords=words.length;
    if (!nWords >0){
        nWords=0;
    }
    let nLines=x.length;
    if (nChars==0){nLines=0}
    let nonEmptyLines=nNon;
    if(nWords>0){
        averageWordLength=twlen/nWords;
    }
    else{
        averageWordLength=0;
    }
    return {
        nChars: nChars,
        nWords: nWords,
        nLines: nLines,
        nNonEmptyLines: nonEmptyLines,
        maxLineLength: maxLineLength,
        averageWordLength: averageWordLength,
        palindromes: palindromes,
        longestWords: longestWords,
        mostFrequentWords: mostFrequentWords
    };
}

