function run (input){
    if ( input < 5000 && input > 0){
        return 'success'
    }
    return 'error'

}

console.log(run('5001'))