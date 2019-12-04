const admin = require('firebase-admin');
const app = require('express')();
const db = admin.firestore().collection('classes');

/**
 * List Classes
 */
const listClasses = app.get('/', async (request, response) => {
    try {
        const classeQuerySnapshot = await db.get();
        const classes = [];
        classeQuerySnapshot.forEach(
            (doc) => {
                classes.push({
                    id: doc.id,
                    name: doc.data().name,
                    personal_name: doc.data().personal_name,
                    description: doc.data().description,
                    link: doc.data().link,                  
                    created_at: doc.data().created_at,
                    updated_at: doc.data().update_at
                });
            }
        );
        response.json(classes);

    } catch (error) {
        response.status(500).send(error);
    }
});

/**
 * Insert Classes
 */
const addClasses = app.post('/', async (request, response) => {
    try {
        const data = {
            name: request.body.name,
            personal_name: request.body.personal_name,
            description: request.body.description,
            link: request.body.link,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        const classesRef = await db.add(data);
        const classes = await classesRef.get();

        response.json({
            id: classesRef.id,
            data: classes.data()
        });

    } catch (error) {
        response.status(500).send(error);
    }
});

/**
 * Update Classes
 */
const updateClasses = app.put('/:id', async (request, response) => {
    try {
        const classeId = request.params.id;
        if (!classeId) throw new Error('id is blank');

        const data = {
            name: request.body.name,
            personal_name: request.body.personal_name,
            description: request.body.description,
            link: request.body.link,
            updated_at: new Date().toISOString()
        };

        await db.doc(classeId).set(data, { merge: true });

        response.json({
            id: classeId,
            data
        });

    } catch (error) {
        response.status(500).send(error);
    }
});

/**
 * Delete classe
 */
const deleteClasses = app.delete('/:id', async (request, response) => {
    try {
        const classeId = request.params.id;
        if (!classeId) throw new Error('id is blank');

        await db.doc(classeId).delete();
        response.json({
            id: classeId,
        })
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = {
    listClasses,
    addClasses,
    updateClasses,
    deleteClasses
};