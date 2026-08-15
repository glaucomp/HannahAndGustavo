/// <reference path="../database-types.d.ts" />

migrate(
    (app) => {
        const collection = new Collection({
            name: 'rsvps',
            type: 'base',
            listRule: null,
            viewRule: null,
            createRule: '',
            updateRule: null,
            deleteRule: null,
            fields: [
                { name: 'full_name', type: 'text', required: true, max: 120 },
                { name: 'email', type: 'email', required: true },
                { name: 'phone', type: 'text', required: false, max: 40 },
                { name: 'attending', type: 'select', required: true, maxSelect: 1, values: ['yes', 'no'] },
                { name: 'guests', type: 'number', required: false, onlyInt: true, min: 0, max: 12 },
                { name: 'message', type: 'text', required: false, max: 1000 },
                { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
            ],
        });

        app.save(collection);
    },
    (app) => {
        const collection = app.findCollectionByNameOrId('rsvps');
        app.delete(collection);
    },
);
