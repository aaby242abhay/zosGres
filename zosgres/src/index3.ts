import { PrismaClient } from "@prisma/client";
import { lchown } from "fs";
const prisma = new PrismaClient();

interface UpdateParams{
    firstName : string,
    lastName : string
}

async function insertUser(username : string, password : string, firstName : string, lastName : string){
    const res = await prisma.user.create({
        data : {
            email : username,
            password,
            firstName,
            lastName
        },
        select : {
            id : true,
            password : true
        }
    })
    console.log(res);
}

async function updateUser(username : string, {firstName, lastName} : UpdateParams){
    const res = await prisma.user.update({
        where : {
            email : username,
        },
        data : {
            firstName,
            lastName
        },
    })
    console.log(res);
}



insertUser("user_2_@gmail.com", "123456", "abhay", "kumar").catch(console.error);
updateUser("aaby242abhay@gmail.com", {firstName : "Lwreya", lastName : "Lwreyiii"}).catch(console.error);
