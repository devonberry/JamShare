const { pg } = require("./db_connect.js")

/**
 * 
CREATE TABLE people (\
    id serial primary key,\
    username TEXT not null,\
    password TEXT not null\
);
 */

const register_new_user = async (username, password) => {
    console.log(username, password)
    try {
        console.log("got here");
        await pg.execute("insert into people (username,password) values ($1,$2)",
            [username, password]);

        //await pg.execute("insert into people (username,password) values ('ddd','ddd')");
    }
    catch (err) {
        console.log("Failed to add new username");
        return 500;
    }

    console.log("Adding new username");
    return 200;
}

const validate_creds = async (username, password) => {
    const res = null;
    try {
        res = await pg.execute("select * from people where username = $1",
            [username]);
        const rows = res.rows[0];
        return rows?.password ? rows.password === password : 400;
    }
    catch (err) {
        console.log("Failed to validate user")
        return 500;
    }
}

const remove_user = async (username) => {
    const res = await pg.execute("delete from people where username = $1",
        [username])

    if (res) return 200;
    return 400;
}

const test = async () => {
    //const r = await validate_password("a", "b");
    //const r = await register_new_user("morg", "b");
    //const r = await validate_password("a", "b");
}
test()

module.exports = {
    register_new_user,
    validate_creds,
    remove_user
}