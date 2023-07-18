import mongoose, { mongo } from "mongoose";
import { v4 as uuid } from 'uuid';

function generateUniqueEmail(): string{
    return 'unique-email@example.com'
}

const user_Test = new mongoose.Schema({
id: {
    type: String,
    default: uuid(),
},
email:{
    type: String, 
    default: function(){
        const uniqueValue = generateUniqueEmail();
        return uniqueValue;
    },
    unique: true,
},

password: String,
name: String,
avatar_url: String,
Schedule: String

});


const shedule_Test = new mongoose.Schema ({

    id:{
        type: String,
        default: uuid(),
    },
    name: String,
    phone: String,
    date: Date,
    user_id:{
        // type: String, 
        default: ('')
    },
    users:{
        type: String, 
        
    }
})

const Users = mongoose.model('Users', user_Test);
const Shedules = mongoose.model('Shedules', shedule_Test);

export { Users, Shedules }