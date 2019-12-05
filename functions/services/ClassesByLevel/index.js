const admin = require('firebase-admin');
const app = require('express')();
const db = admin.firestore().collection('classesByLevel');

/**
 * List Classes By Level
 */
const listClassesByLevel = app.get('/', async (request, response) => {
    try {
        const classeQuerySnapshot = await db.get();
        const classesByLevel = [];
        classeQuerySnapshot.forEach(
            (doc) => {
                classesByLevel.push({
                    id: doc.id,
                    data: doc.data()
                });
            }
        );
        response.json(classesByLevel);

    } catch (error) {
        response.status(500).send(error);
    }
});

/**
 * Insert Classes By Level
 */
const addClassesByLevel = app.post('/', async (request, response) => {
    try {
        const data = request.body;
        const classesByLevelRef = await db.add(data);
        const classesByLevel = await classesByLevelRef.get();

        response.json({
            id: classesByLevelRef.id,
            data: classesByLevel.data()
        });

    } catch (error) {
        response.status(500).send(error);
    }
});

/**
 * Update Classes By Level
 */
const updateClassesByLevel = app.put('/:id', async (request, response) => {
    try {
        const classeId = request.params.id;
        if (!classeId) throw new Error('id is blank');

        const data = request.body;
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
 * Delete Classes By Level
 */
const deleteClassesByLevel = app.delete('/:id', async (request, response) => {
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
    listClassesByLevel,
    addClassesByLevel,
    updateClassesByLevel,
    deleteClassesByLevel
};