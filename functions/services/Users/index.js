const admin = require('firebase-admin');
const app = require('express')();
const db = admin.firestore().collection('users');

/**
 * List user
 */
const listUser = app.get('/', async (request, response) => {
    try {
        const userQuerySnapshot = await db.get();
        const users = [];
        userQuerySnapshot.forEach(
            (doc) => {
                users.push({
                    id: doc.id,
                    name: doc.data().name,
                    address: doc.data().address,
                    city: doc.data().city,
                    zip_code: doc.data().zip_code,
                    landline: doc.data().landline,
                    phone: doc.data().phone,
                    cpf: doc.data().cpf,
                    rg: doc.data().rg,
                    created_at: doc.data().created_at,
                    updated_at: doc.data().update_at
                });
            }
        );
        response.json(users);

    } catch (error) {
        response.status(500).send(error);
    }
});

/**
 * Insert user
 */
const addUser = app.post('/', async (request, response) => {
    try {
        const data = {
            name: request.body.name,
            address: request.body.address,
            city: request.body.city,
            zip_code: request.body.zip_code,
            landline: request.body.landline,
            phone: request.body.phone,
            cpf: request.body.cpf,
            rg: request.body.rg,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        const usersRef = await db.add(data);
        const users = await usersRef.get();

        response.json({
            id: usersRef.id,
            data: users.data()
        });

    } catch (error) {
        response.status(500).send(error);
    }
});

/**
 * Update user
 */
const updateUser = app.put('/:id', async (request, response) => {
    try {
        const userId = request.params.id;
        if (!userId) throw new Error('id is blank');

        const data = {
            name: request.body.name,
            address: request.body.address,
            city: request.body.city,
            zip_code: request.body.zip_code,
            landline: request.body.landline,
            phone: request.body.phone,
            cpf: request.body.cpf,
            rg: request.body.rg,
            updated_at: new Date().toISOString()
        };

        await db.doc(userId).set(data, { merge: true });

        response.json({
            id: userId,
            data
        });

    } catch (error) {
        response.status(500).send(error);
    }
});

/**
 * Delete user
 */
const deleteUser = app.delete('/:id', async (request, response) => {
    try {
        const userId = request.params.id;
        if (!userId) throw new Error('id is blank');

        await db.doc(userId).delete();
        response.json({
            id: userId,
        })
    } catch (error) {
        response.status(500).send(error);
    }
});


module.exports = {
    listUser,
    addUser,
    updateUser,
    deleteUser
};