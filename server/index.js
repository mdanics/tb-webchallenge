const express = require('express');
const cors = require('cors');

const findMedianPrimes = require("./findMedianPrimes");

const app = express();

const port = 3005;

app.use(cors());
app.use(express.json()); // <==== parse request body as JSON

app.post('/getMedianPrimes', (req, res) => {


    const n = parseInt(req.body.upperLimit);

    if (!req.body.upperLimit) {
        res.status(400);
        return res.send("Error - Upper limit was not passed")
    }


    if (isNaN(n)){
        res.status(400);
        return res.send("Error - Upper limit was not a valid integer")
    }

    if (n < 0){
        res.status(400);
        return res.send("Error - Upper limit must be positive")
    }

    if (n > 75000000) {
        res.status(400);
        return res.send("Error - Upper limit too large, ensure upper limit is below 75,000,000 [limitation of memory heap]")
    }


    const result = findMedianPrimes.calculate(req.body.upperLimit);

    return res.json(result)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));