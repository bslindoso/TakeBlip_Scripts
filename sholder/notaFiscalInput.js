function run(input) {
    try {

        return JSON.stringify(input)

    }
    catch (e) {
        return 'error'
    }
}

console.log(run('1, 3'))