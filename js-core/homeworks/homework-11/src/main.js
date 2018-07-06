/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 - Пользователь
 - Верифицированный пользователь(админ)
 - Гость
 - База данных
 - База хранит информацию о пользователях
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 * */

const users = {
    user1:{
        userName: 'user1',
        userPassword: '123456'
    },
    user2:{
        userName: 'user2',
        userPassword: 'qwerty'
    },
    user3:{
        userName: 'user3',
        userPassword: '231424'
    },
    user4:{
        userName: 'user4',
        userPassword: 'juguli'
    },
    user5:{
        userName: 'user5',
        userPassword: 'ladaSedan'
    }
};

const admin = {
    name: 'admin',
    email: {
        nameOfEmail: 'pauk@admin.com'
    }
}

const dataBase = {
    passwordFromDataBase:{ password: '123456' }
};

const guest = {
    register(nickName, password) {
        users[nickName] = {
            userName: nickName,
            userPassword: password
        }
    }
}

Object.setPrototypeOf(dataBase, users);
Object.setPrototypeOf(users, admin.email);
Object.setPrototypeOf(admin, dataBase.passwordFromDataBase);

