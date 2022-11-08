const cats = ["tony", "daisy", "socks", "rockie" ];

const capitalisedCats = cats.map(UpperCaser)

function UpperCaser(str){
    return str.toUpperCase()
}
