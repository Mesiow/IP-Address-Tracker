if(process.env.NODE_ENV !== 'production'){
    require("dotenv").config();
}

module.exports = {
    MAPBOX_KEY: process.env.MAPBOX_KEY,
    IPIFY_KEY: process.env.IPIFY_KEY
};