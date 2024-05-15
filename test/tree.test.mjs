import {expect} from 'chai';
import { buildTree, Leaf, TreeNode } from '../src/model/tree.mjs';

describe('buildTree', () => {
    it('should construct a tree structure from CSV data', () => {
        const csvArray = [
            ["Translation ID", "ca-ES", "de-DE", "en-US", "es-ES", "fr-FR", "it-IT"],
            ["actions.cancel", "Cancel.lar", "Abbrechen", "Cancel", "Cancelar", "Annuler", "Cancellare"],
            ["actions.confirm", "Confirmar", "Bestätigen", "Confirm", "Confirmar", "Confirmer", "Confermare"],
            ["actions.newAppointment", "Nova Cita", "Neuer Termin", "New appointment", "Nueva Cita", "Nouveau rendez-vous", "Nuova Visita"]
        ];

        const tree = buildTree(csvArray);

        // Test tree structure
        expect(tree).to.be.an('object');
        expect(tree.children).to.be.an('object');
        expect(tree.children.actions).to.be.an('object');
        expect(tree.children.actions).to.be.an.instanceOf(TreeNode);
        expect(tree.children.actions.children.cancel).to.be.an.instanceOf(Leaf);
        expect(tree.children.actions.children.confirm).to.be.an.instanceOf(Leaf);
        expect(tree.children.actions.children.newAppointment).to.be.an.instanceOf(Leaf);

        // Test leaf values
        expect(tree.children.actions.children.cancel.value).to.deep.equal({
            "ca-ES": "Cancel.lar",
            "de-DE": "Abbrechen",
            "en-US": "Cancel",
            "es-ES": "Cancelar",
            "fr-FR": "Annuler",
            "it-IT": "Cancellare"
        });
        expect(tree.children.actions.children.confirm.value).to.deep.equal({
            "ca-ES": "Confirmar",
            "de-DE": "Bestätigen",
            "en-US": "Confirm",
            "es-ES": "Confirmar",
            "fr-FR": "Confirmer",
            "it-IT": "Confermare"
        });
        expect(tree.children.actions.children.newAppointment.value).to.deep.equal({
            "ca-ES": "Nova Cita",
            "de-DE": "Neuer Termin",
            "en-US": "New appointment",
            "es-ES": "Nueva Cita",
            "fr-FR": "Nouveau rendez-vous",
            "it-IT": "Nuova Visita"
        });
    });
});
