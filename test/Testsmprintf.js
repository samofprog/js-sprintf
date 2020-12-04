function testTypePassed(...param) {
    try {
        const v = smprintf(param[0], param[1], param[2]);
    } catch (e) {
        alert("Veuillez Consulter la console pour suivre les erreurs relevés !")
        console.error(e.callError())
        return e.callError()
    }
}

QUnit.module('sm-printf', function () {
    QUnit.test(`Should replace all the symbols corresponding to the format parameter with the values ​​of the args argument`, function (assert) {
        assert.equal(smprintf(`salut % comment tu vas ?`, `%`, `samy`), `salut samy comment tu vas ?`, "smprintf(`salut % comment tu vas ?`,`%`,`samy`)");
    });
});
QUnit.module("testTypePassed", function () {
    QUnit.test(`Should return the Exception message`, function (assert) {
        assert.equal(testTypePassed(15, 47, 19), `Wrong Exception error string type required number passed`, `testTypePassed(15,47,19)`)
    })
})