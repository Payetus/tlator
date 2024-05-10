const openFile = () => {
    dialog.showOpenDialog(mainWindow, {
        properties: ['openFile']
    }).then(result => {
        if (!result.canceled) {
            const filePath = result.filePaths[0];
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                // Do something with the file data
                console.log(data);
            });
        }
    }).catch(err => {
        console.error(err);
    });
}