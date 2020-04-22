use pubs;
db.getCollection("welsh_pubs").find(
    { 
        "name" : /.*snooker.*/i, 
        "local_authority" : { 
            "$ne" : "Caerphilly"
        }
    }, 
    { 
        "fsa_id" : 1.0, 
        "name" : 1.0, 
        "address.city" : 1.0, 
        "local_authority" : 1.0
    }
).sort(
    { 
        "address.city" : 1.0
    }
);
