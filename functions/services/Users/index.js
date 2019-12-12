const admin = require('firebase-admin');
const db = admin.firestore().collection('users');
const app = require('express')();
const cors = require('cors');
app.use(cors({ origin: true }));

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
                    "user": {
                    id: doc.id,                        
                    name: doc.data().user.name,
                    lastname: doc.data().user.lastname,
                    address: doc.data().user.address,
                    city: doc.data().user.city,
                    state: doc.data().user.state,
                    zip_code: doc.data().user.zip_code,
                    landline: doc.data().user.landline,
                    phone: doc.data().user.phone,
                    cpf: doc.data().user.cpf,
                    rg: doc.data().user.rg,
                    payment: doc.data().user.payment,
                    created_at: doc.data().user.created_at,
                    updated_at: doc.data().user.update_at
                },
                "payment": doc.data().payment
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
            "user": {
            name: request.body.user.name,
            lastname: request.body.user.lastname,
            address: request.body.user.address,
            city: request.body.user.city,
            state: request.body.user.state,
            zip_code: request.body.user.zip_code,
            landline: request.body.user.landline,
            phone: request.body.user.phone,
            cpf: request.body.user.cpf,
            rg: request.body.user.rg,
            payment: request.body.user.payment,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        },
        "payment": request.body.payment
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
            name: request.body.user.name,
            lastname: request.body.user.lastname,
            address: request.body.user.address,
            city: request.body.user.city,
            state: request.body.user.state,
            zip_code: request.body.user.zip_code,
            landline: request.body.user.landline,
            phone: request.body.user.phone,
            cpf: request.body.user.cpf,
            rg: request.body.user.rg,
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