const admin = require('firebase-admin');
const db = admin.firestore().collection('usersClassesByLevel');
const app = require('express')();
const cors = require('cors');
app.use(cors({ origin: true }));

/**
 * List Users Classes By Level
 */
const listUsersClassesByLevel = app.get('/', async (request, response) => {
    try {
        const querySnapshot = await db.get();
        const usersClassesByLevel = [];
        querySnapshot.forEach(
            (doc) => {
                usersClassesByLevel.push(doc.data());
            }
        );
        response.json(usersClassesByLevel);

    } catch (error) {
        response.status(500).send(error);
    }
});

/**
 * List user by phone
 */
const listUsersClassesLevelbyPhone = app.get('/:phone', async (request, response) => {
    try {

        const phone = request.params.phone;
        if (!phone) throw new Error('phone is blank');

        const querySnapshot = await db.where('phone', '==', phone).get()
        .then(querySnapshot => {
            if (querySnapshot.empty) {
                response.status(500).send(error);
                return;
            }

            const users = [];
            querySnapshot.forEach(
                (doc) => {
                    users.push(doc.data());
                }
            );
            response.json(users);

        })
        .catch(error => {
            response.status(500).send(error);
        });

    } catch (error) {
        response.status(500).send(error);
    }
});

/**
 * Insert Users Classes By Level
 */
const addUsersClassesByLevel = app.post('/', async (request, response) => {
    try {
        const data = request.body;
        const usersClassesByLevelRef = await db.add(data);
        const usersClassesByLevel = await usersClassesByLevelRef.get();

        response.json({
            id: usersClassesByLevelRef.id,
            data: usersClassesByLevel.data()
        });

    } catch (error) {
        response.status(500).send(error);
    }
});

/**
 * Update Users Classes By Level
 */
const updateUsersClassesByLevel = app.put('/:id', async (request, response) => {
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
 * Delete Users Classes By Level
 */
const deleteUsersClassesByLevel = app.delete('/:id', async (request, response) => {
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
    listUsersClassesByLevel,
    listUsersClassesLevelbyPhone,
    addUsersClassesByLevel,
    updateUsersClassesByLevel,
    deleteUsersClassesByLevel
};