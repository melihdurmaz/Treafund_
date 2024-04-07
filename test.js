
const mongoose = require('mongoose');

const User = require('./models/user'); // Kullanıcı modelinin yolunu dosyanıza göre güncelleyin
const Collection = require('./models/collection'); // Koleksiyon modelinin yolunu dosyanıza göre güncelleyin

/*(async () => {
    try {
        //const userId = 'k6604900de309816ef8166bd4'; // Kullanıcının ObjectId'sini gerçek bir değerle değiştirin
        //const collectionId = '6604948f655149ad4d364492'; // Koleksiyonun ObjectId'sini gerçek bir değerle değiştirin

        // Kullanıcıyı bulun

        const userIdString = 'k6604900de309816ef8166bd4'; // Gerçek ObjectId değerini bu string ile değiştirin
        const userId = mongoose.Types.ObjectId(userIdString);
        // Koleksiyonu bulun
        const collectionIdString = await Collection.findById('6604948f655149ad4d364492');
        const collectionId = mongoose.Types.ObjectId(userIcollectionIdStringdString);
        if (!user || !collection) {
            console.log("Kullanıcı veya koleksiyon bulunamadı.");
            return;
        }

        // Kullanıcının koleksiyonlar dizisine koleksiyonu ekleyin
        user.collections.push(collection);

        // Değişiklikleri kaydedin
        await user.save();

        console.log("Koleksiyon kullanıcıya başarıyla eklendi.");
    } catch (error) {
        console.error("Hata:", error);
    }
})();*/
const user1 = new User({
    username: 'user1',
    email: 'user1@example.com',
    password: 'password1',
    collections: [
        new Collection({ title: 'Collection A' }),
        new Collection({ title: 'Collection B' })
    ]
});

user1.save()
    .then(() => console.log('User 1 created with collections'))
    .catch(err => console.error(err));

