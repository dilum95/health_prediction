import clientPromise from "./db.config.js"

// cname = collections name
export function insert(data, cname) {

    return new Promise(async (resolve, reject) => {

        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection(cname);

        try {

            let res = await collection.insertOne({ ...data })
            resolve(res)

        } catch (error) {
            reject(error)
        }

    })

}
export function insertMany(data, cname) {

    return new Promise(async (resolve, reject) => {

        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection(cname);

        try {

            let res = await collection.insertMany(data)
            resolve(res)
            

        } catch (error) {
            reject(error)
        }


    })

}

export function findOne(query, cname) {

    return new Promise(async (resolve, reject) => {

        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection(cname);

        collection.findOne({ ...query }, function (err, result) {

            if (err) {
                reject(err)
            }

            resolve(result)

        })



    })


}



export function updateOne(query1, query2, cname) {

    return new Promise(async (resolve, reject) => {

        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection(cname);

        collection.updateOne(query1, query2, function (err, result) {

            if (err) {
                reject(err)
            }

            resolve(result)
            
        })



    })


}

export function findAll(query, cname) {

    return new Promise(async (resolve, reject) => {

        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection(cname);

        collection.find(query).toArray(function (err, result) {

            if (err) {
                reject(err)
            }
            resolve(result)
           

        })

    })

}

export function findAllAnsSort(query,sort, cname) {

    return new Promise(async (resolve, reject) => {

        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection(cname);

        collection.find(query).sort(sort).toArray(function (err, result) {

            if (err) {
                reject(err)
            }
            resolve(result)
           

        })

    })

}

export function pullArray(query1, query2, cname) {

    return new Promise(async (resolve, reject) => {

        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection(cname);

        collection.update(query1, query2, function (err, result) {

            if (err) {
                reject(err)
            }

            resolve(result)

        })



    })


}

export function deletedata(query1,cname) {

    return new Promise(async (resolve, reject) => {

        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection(cname);

        collection.deleteOne(query1, function (err, result) {

            if (err) {
                reject(err)
            }

            resolve(result)

        })



    })

}

export function aggregate_list(query,cname) {

    return new Promise(async (resolve, reject) => {

        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection(cname);

      
        collection.aggregate(query).toArray(function (err, result) {

            if (err) {
                console.log(err)
                reject(err)
            }

            resolve(result)
           

        })




    })


}

export function update_Many(query1,query2,cname) {

    return new Promise(async (resolve, reject) => {

        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection(cname);

        collection.updateMany(query1,query2,function (err, result) {

            if (err) {
                reject(err)
            }

            resolve(result)

        })



    })

}