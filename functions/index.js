const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Express Servers
const { 
    listUser, 
    addUser, 
    updateUser, 
    deleteUser 
} = require('./services/Users');

const { 
    listLevels, 
    addLevels, 
    updateLevels, 
    deleteLevels 
} = require('./services/Levels');

const { 
    listClasses, 
    addClasses, 
    updateClasses, 
    deleteClasses 
} = require('./services/Classes');

/** HTTP Cloud Functions Users */
const usersList = functions.https.onRequest(listUser);
const usersAdd = functions.https.onRequest(addUser);
const usersUpdate = functions.https.onRequest(updateUser);
const usersDelete = functions.https.onRequest(deleteUser);

/** HTTP Cloud Functions Levels */
const levelsList = functions.https.onRequest(listLevels);
const levelsAdd = functions.https.onRequest(addLevels);
const levelsUpdate = functions.https.onRequest(updateLevels);
const levelsDelete = functions.https.onRequest(deleteLevels);

/** HTTP Cloud Functions Classes */
const classesList = functions.https.onRequest(listClasses);
const classesAdd = functions.https.onRequest(addClasses);
const classesUpdate = functions.https.onRequest(updateClasses);
const classesDelete = functions.https.onRequest(deleteClasses);

module.exports = {
    usersList,
    usersAdd,
    usersUpdate,
    usersDelete,
    levelsList,
    levelsAdd,
    levelsUpdate,
    levelsDelete,
    classesList,
    classesAdd,
    classesUpdate,
    classesDelete    
};