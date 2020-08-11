const { exec } = require('child_process');

exec('echo hello world', function(err, stdout, stderr) {
    console.log('test ', err)
    console.log('test ', stdout)
})
