const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Collection = require('../models/collection')

router.get('/register', (req, res) => { res.render('site/register') })
router.get('/login', (req, res) => { res.render('site/login') })
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})


router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Kullanıcı adının benzersiz olduğunu kontrol edin
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Bu kullanıcı adı zaten kullanımda. Lütfen farklı bir kullanıcı adı seçin." });
        }
        else {
            User.create(req.body).then(post => {
                console.log(User)
                res.redirect('/')
            })
                .catch(err => {
                    console.error(err)
                })

            res.redirect('/');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu');
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (user) {
            if (user.password == password) {
                // Kullanıcı oturum açtığında user id isini tutuyorum ki sürekli girş yapmak zorunda kalmasın
                req.session.userId = user._id
                res.redirect('/users/{{_id}}')
            } else {
                res.redirect('/users/login')
            }
        } else {
            res.redirect('/users/register')
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('Bir hata oluştu')
    }
})

router.get('/:id', (req, res) => {
    User.findById(req.session.userId)
        .then(user => {
            res.render('site/index', { user: user.toJSON() })
        })
        .catch(err => {
            console.error(err);
            res.render('site/profile')
        })
})




module.exports = router