if(process.env.NODE_ENV !== 'production'){
    require("dotenv").config();
}

module.exports = {
    MAPBOX_KEY: process.env.MAPBOX_KEY
};