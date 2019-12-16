const admin = require('firebase-admin');
const db = admin.firestore().collection('levels');
const app = require('express')();
const cors = require('cors');
app.use(cors({ origin: true }));

/**
 * List level
 */
const listLevels = app.get('/', async (request, response) => {
    try {
        const levelQuerySnapshot = await db.get();
        const levels = [];
        levelQuerySnapshot.forEach(
            (doc) => {
                levels.push({
                    id: doc.id,
                    name: doc.data().name,
                    created_at: doc.data().created_at,
                    updated_at: doc.data().update_at
                });
            }
        );
        response.json(levels);

    } catch (error) {
        response.status(500).send(error);
    }
});

/**
 * Insert level
 */
const addLevels = app.post('/', async (request, response) => {
    try {
        const data = {
            name: request.body.name,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        const levelsRef = await db.add(data);
        const levels = await levelsRef.get();

        response.json({
            id: levelsRef.id,
            data: levels.data()
        });

    } catch (error) {
        response.status(500).send(error);
    }
});

/**
 * Update level
 */
const updateLevels = app.put('/:id', async (request, response) => {
    try {
        const levelId = request.params.id;
        if (!levelId) throw new Error('id is blank');

        const data = {
            name: request.body.name,
            updated_at: new Date().toISOString()
        };

        await db.doc(levelId).set(data, { merge: true });

        response.json({
            id: levelId,
            data
        });

    } catch (error) {
        response.status(500).send(error);
    }
});

/**
 * Delete level
 */
const deleteLevels = app.delete('/:id', async (request, response) => {
    try {
        const levelId = request.params.id;
        if (!levelId) throw new Error('id is blank');

        await db.doc(levelId).delete();
        response.json({
            id: levelId,
        })
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = {
    listLevels,
    addLevels,
    updateLevels,
    deleteLevels
};