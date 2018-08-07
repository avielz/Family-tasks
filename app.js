var express = require('express');
var mysql = require('mysql');

var app = express();

//+++
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//+++

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'homedb'
});

con.connect((err) => {
    if (err) {
        console.log("Can not connect to DB");
        console.log(err);

        return;
    }
    console.log('Connected baby');
});
app.use(express.static('./dist/my-app'));

// ['/', '/home']
// app.get('/', (req, res) => {
//     res.sendFile('index.html', { root: './src' });
// })

app.get('/member', (req, res) => {
    con.query(`select * from members`, (err, rows) => {
        if (err)
            console.log(err);
        else
            console.log(rows);
        res.send(rows);
    });
});
// taskID, taskDescription, date, ownerID
app.get('/tasklist', (req, res) => {
    con.query(`
    SELECT tasks.taskDescription AS "task", members.name AS "name" 
    FROM tasks JOIN members ON tasks.ownerID=members.id 
    ORDER BY members.name`, 
    (err, data) => {
        if (err) {
            console.log(err);
            res.send(400, err);
        }
        else {
            console.log("from node.js app.js get function: ");
            console.log(data);
            res.send(data);
        }
    });
});


app.post('/setTask', (req, res) => {
    con.query(`INSERT INTO tasks(taskDescription, date, ownerID) VALUES ('${req.body.taskDescription}','${req.body.date}','${req.body.ownerID}')`, (err, rows) => {
        if (err) {
            console.log('THERE IS AN ERROR: '+err);
            res.send(err);
        }
        else {
            console.log('task INSERTED OK'+rows);
            res.sendFile('success.html', { root: './' });
        }
    });
});

// also to do get all tasks for specific family member by id- which will be clicking or their name on the family list
// app.get('/member/:id', (req, res) => {
//     // con.query(`select members.name from members where id=${req.params.id}`, (err, rows) => {
//     con.query(`select members.name from members`, (err, rows) => {
//         if (err) {
//             console.log(err);
//             res.send(err);
//         }
//         else {
//             console.log(rows);
//             res.send(rows);
//         }
//     });
// });

app.get('/membernames', (req, res) => {
    // con.query(`select members.name from members where id=${req.params.id}`, (err, rows) => {
     con.query(`select members.id, members.name from members`, (err, data) => {
    // con.query(`select * from members`, (err, data) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
    });
});


//need to add a feature to add family member
// app.post(['/member', '/member/form'], (req, res) => {
//     con.query(`insert into members values (${req.body.memberId},'${req.body.name}',${req.body.cityId})`,
//         (err, data) => {
//             if (err) {
//                 console.log(err);
//                 res.send(400, err);
//             }
//             else {
//                 console.log(data);
//                 res.send(data);
//             }
//         });
// });




app.listen(8070, () => {
    console.log('8070 is ready');
});
