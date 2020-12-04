(function () {
    const div = document.createElement(`div`)
    const divBody = `
    Salut a tous moi c'est Samy Developpeur Web FullStack
    Mon nom d'utilisateur sur Github : <strong>%s</strong>.<br>
    L'email au quel vous pouvez me contater : <strong>%s</strong>.<br>
    Ainsi que mon contact Whatssap : +225 01937964 <br>
    En effet cet texte a été formater par la fonction <em>sm-printf</em><br>
    Du package : <strong>%s</strong> . Et a besoin du fichier composer.json pour fonctioner<br>
    convenablement !`
    const container = document.querySelector(".mt-5")
    const xhr = new XMLHttpRequest()
    xhr.open(`get`, `composer.json`)
    xhr.responseType = "json"
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const composer = xhr.response
            container.innerHTML = smprintf(divBody, `%s`,
                composer.authors[0].name, composer.authors[0].email, composer.name)
        }
    }
    xhr.send()
})()