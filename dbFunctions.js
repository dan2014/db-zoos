const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);

module.exports = {
    get:function(){
        const query = db("zoos");
        return query;
    },
    getID:function(id){
        const query = db("zoos").select().where("id",id).first();
        return query;
    },
    insert:function(name){
        const query =  db("zoos").insert(name);
        return query;
    },
    update:function(id,name){
        const query =  db("zoos").where({id}).update({name});
        return query;
    },
    delete:function(id){
        const query =  db("zoos").where(id).delete()
        return query;
    }
}