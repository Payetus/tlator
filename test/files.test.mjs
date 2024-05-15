import { expect } from "chai";
import { csvDataToArray } from "../src/files/csvToArray.mjs";

describe('csvDataToArray', () => {
    it('should transform CSV data into an array of arrays', () => {
        const csvData = `"Translation ID","ca-ES","de-DE","en-US","es-ES","fr-FR","it-IT"\n"actions.cancel","Cancel.lar","Abbrechen","Cancel","Cancelar","Annuler","Cancellare"\n"actions.confirm","Confirmar","Bestätigen","Confirm","Confirmar","Confirmer","Confermare"\n`;
        
        const expectedArray = [
            ["Translation ID", "ca-ES", "de-DE", "en-US", "es-ES", "fr-FR", "it-IT"],
            ["actions.cancel", "Cancel.lar", "Abbrechen", "Cancel", "Cancelar", "Annuler", "Cancellare"],
            ["actions.confirm", "Confirmar", "Bestätigen", "Confirm", "Confirmar", "Confirmer", "Confermare"]
        ];

        const result = csvDataToArray(csvData);

        // Assert the result is an array
        expect(result).to.be.an('array');

        // Assert the length of the result
        expect(result.length).to.equal(expectedArray.length);

        // Assert each row of the result
        for (let i = 0; i < expectedArray.length; i++) {
            expect(result[i]).to.deep.equal(expectedArray[i]);
        }
    });
});
